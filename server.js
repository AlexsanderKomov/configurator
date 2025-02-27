import dotenv from "dotenv";
import express from "express";
import multer from "multer";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import cookieParser from "cookie-parser";
import { createClient } from "@supabase/supabase-js";

// Загружаем переменные окружения из.env
dotenv.config({ path: ".env.local" });

// Получаем __dirname в ES-модулях
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const app = express();
const port = 3001;
app.use(cookieParser());
app.use(express.json());

// Настройка CORS
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

// Создаем папку для загруженных файлов, если её нет
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Настройка Multer для загрузки файлов
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir); // Сохраняем файлы в папку "uploads"
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname); // Уникальное имя файла
  },
});

const upload = multer({ storage });

// Роут для загрузки изображений
app.post("/api/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "Файл не был загружен" });
  }

  // Возвращаем ссылку на загруженный файл
  const fileUrl = `http://localhost:${port}/uploads/${req.file.filename}`;
  res.json({ url: fileUrl });
});

// Роут для доступа к загруженным файлам
app.use("/uploads", express.static(uploadDir));

// Регистрация пользователя
app.post("/api/register", async (req, res) => {
  const {
    firstName,
    lastName,
    middleName,
    phoneNumber,
    email,
    company,
    password,
  } = req.body;

  const { data: authData, error: authError } = await supabase.auth.signUp({
    email,
    password,
  });

  if (authError) {
    return res.status(400).json({ error: authError.message });
  }

  // Создание профиля пользователя в таблице profiles
  const { error: profileError } = await supabase.from("profiles").insert([
    {
      id: authData.user?.id,
      first_name: firstName,
      last_name: lastName,
      middle_name: middleName || null, // Опциональное поле
      phone_number: phoneNumber,
      email,
      company,
      role: "user", // Роль по умолчанию
    },
  ]);

  if (profileError) {
    return res.status(400).json({ error: profileError.message });
  }

  res.status(201).json({ message: "Регистрация успешна" });
});

// Вход пользователя
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  // Проверяем, что data.session существует
  if (!data.session) {
    console.error("Сессия не найдена в data:", data); // Логируем данные
    return res.status(400).json({ error: "Сессия не найдена" });
  }

  // Проверяем, что access_token существует
  if (!data.session.access_token) {
    console.error("access_token не найден в сессии:", data.session); // Логируем сессию
    return res.status(400).json({ error: "access_token не найден" });
  }

  // Установка куки
  res.cookie("auth_token", data.session.access_token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax", // Добавьте sameSite
  });

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  res.json({ message: "Logged in successfully" });
});

// Выход пользователя
app.post("/api/logout", async (req, res) => {
  await supabase.auth.signOut();

  res.clearCookie("auth_token");
  res.json({ message: "Logged out successfully" });
});

app.get("/api/profile", async (req, res) => {
  const token = req.cookies.auth_token;

  if (!token) {
    return res.status(401).json({ error: "Не авторизован" });
  }

  // Получаем данные пользователя из Supabase
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser(token);

  if (error) {
    return res.status(401).json({ error: "Неверный токен" });
  }
  console.log(user);
  res.json({ user });
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
