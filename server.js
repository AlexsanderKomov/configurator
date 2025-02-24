import express from "express";
import multer from "multer";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import { createClient } from "@supabase/supabase-js";

// Получаем __dirname в ES-модулях
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 5000;

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

// Настройка CORS
app.use(cors());

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

// Запуск сервера
app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});

app.post("/register", async (req, res) => {
  const {
    email,
    password,
    firstName,
    lastName,
    middleName,
    phoneNumber,
    company,
  } = req.body;

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  if (data.user) {
    const { error: profileError } = await supabase.from("profiles").insert([
      {
        id: data.user.id,
        first_name: firstName,
        last_name: lastName,
        middle_name: middleName,
        phone_number: phoneNumber,
        email,
        company,
        role: "user",
      },
    ]);

    if (profileError) {
      return res.status(400).json({ error: profileError.message });
    }

    return res.status(200).json({ message: "Регистрация успешна!" });
  }
});
