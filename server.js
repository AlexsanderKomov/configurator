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
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);
const supabaseService = createClient(supabaseUrl, supabaseServiceKey);

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

app.post("/api/delete_images", (req, res) => {
  const { images } = req.body;

  images.forEach((imagePath) => {
    const fullPath = path.join(__dirname, "uploads", imagePath);
    if (fs.existsSync(fullPath)) {
      fs.unlinkSync(fullPath);
    }
  });

  res.status(200).send("Изображения удалены");
});

// Регистрация пользователя
app.post("/api/registration", async (req, res) => {
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

  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      // Отправляем пользователю понятное сообщение
      if (error.message === "Invalid login credentials") {
        return res.status(400).json({ message: "Неверный email или пароль" });
      }
      return res.status(400).json({ message: "Ошибка при входе" });
    }

    // Успешный вход
    res.cookie("auth_token", data.session.access_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 дней
    });

    res.json({ message: "Авторизация выполнена успешно" });
  } catch (error) {
    // Логируем ошибку для разработчиков
    console.error("Ошибка при входе:", error);

    // Отправляем пользователю общее сообщение
    res.status(500).json({ error: "Ошибка сервера" });
  }
});

// Выход пользователя
app.post("/api/logout", async (req, res) => {
  await supabase.auth.signOut();

  res.clearCookie("auth_token");
  res.json({ message: "Успешно вышли из системы" });
});

app.get("/api/profile", async (req, res) => {
  const token = req.cookies.auth_token;

  if (!token) {
    return res.status(401).json({ error: "Не авторизован" });
  }

  // Проверяем текущий токен
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser(token);

  if (userError) {
    // Если токен истек или недействителен, пытаемся обновить его
    const {
      data: { session },
      error: refreshError,
    } = await supabase.auth.refreshSession({ refresh_token: token });

    if (refreshError) {
      return res.status(401).json({ error: "Неверный токен" });
    }

    // Обновляем токен в куках
    res.cookie("auth_token", session.access_token, {
      httpOnly: true,
      secure: true,
    });

    // Продолжаем с новым токеном
    const { data: userData, error: dataError } = await supabaseService
      .from("profiles")
      .select("role, first_name, last_name, company, phone_number")
      .eq("id", session.user.id);

    if (dataError) {
      return res
        .status(401)
        .json({ error: "Не удалось получить ID пользователя" });
    }

    if (userData && userData.length > 0) {
      return res.json(userData);
    } else {
      return res.status(404).json({ error: "Данные пользователя не найдены" });
    }
  }

  // Если токен действителен, продолжаем с текущим токеном
  const { data: userData, error: dataError } = await supabaseService
    .from("profiles")
    .select("role, first_name, last_name, company, phone_number")
    .eq("id", user.id);

  if (dataError) {
    return res
      .status(401)
      .json({ error: "Не удалось получить ID пользователя" });
  }

  if (userData && userData.length > 0) {
    res.json(userData);
  } else {
    res.status(404).json({ error: "Данные пользователя не найдены" });
  }
});

// Редактирование профиля
app.put("/api/profile", async (req, res) => {
  const token = req.cookies.auth_token;

  if (!token) {
    return res.status(401).json({ error: "Не авторизован" });
  }

  // Получаем данные пользователя из Supabase
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser(token);

  if (authError) {
    return res.status(401).json({ error: "Неверный токен" });
  }

  // Данные для обновления профиля
  const { first_name, last_name, middle_name, phone_number, company } =
    req.body;

  // Обновляем профиль в таблице profiles
  const { data: updatedProfile, error: updateError } = await supabase
    .from("profiles")
    .update({
      first_name,
      last_name,
      middle_name,
      phone_number,
      company,
    })
    .eq("id", user.id) // Обновляем только профиль текущего пользователя
    .select(); // Возвращаем обновленные данные

  if (updateError) {
    return res.status(400).json({ error: updateError.message });
  }

  // Возвращаем обновленные данные профиля
  res.json(updatedProfile);
});

app.post("/api/add_product", async (req, res) => {
  const productData = req.body;

  // Проверяем, что productData является массивом
  if (!Array.isArray(productData)) {
    return res.status(400).json({ error: "Ожидается массив товаров" });
  }

  try {
    // 1. Собираем все артикулы для проверки
    const articles = productData.map((p) => p.article);

    // 2. Одним запросом проверяем все дубликаты
    const { data: existingProducts, error: fetchError } = await supabaseService
      .from("products")
      .select("article")
      .in("article", articles);

    if (fetchError) {
      console.error("Ошибка при проверке товаров:", fetchError);
      return res.status(500).json({ error: "Ошибка при проверке товаров" });
    }

    // 3. Находим дубликаты
    const duplicateArticles = existingProducts.map((p) => p.article);
    const duplicates = productData.filter((p) =>
      duplicateArticles.includes(p.article)
    );

    if (duplicates.length > 0) {
      return res.status(400).json({
        message: "Найдены дубликаты товаров",
        duplicates: duplicates.map((d) => d.article),
      });
    }

    // 4. Вставляем все товары одной операцией
    const { data: insertData, error: insertError } = await supabaseService
      .from("products")
      .insert(productData);

    if (insertError) {
      console.error("Ошибка при вставке товаров:", insertError);
      return res.status(400).json({
        error: "Ошибка при добавлении товаров",
        details: insertError.message,
      });
    }

    // 5. Успешный ответ
    return res.status(201).json({
      message: "Товары успешно добавлены",
      count: productData.length,
      data: insertData,
    });
  } catch (error) {
    console.error("Необработанная ошибка:", error);
    return res.status(500).json({
      error: "Ошибка сервера",
      message: error.message,
    });
  }
});

app.post("/api/configurator/private_house", async (req, res) => {
  if (!req.body.action) {
    return res.status(400).json({ error: "Действие не указано" });
  } else {
    const { data: productData, error } = await supabaseService
      .from("products")
      .select("*")
      .eq("type_equipment", req.body.action);

    if (error) {
      console.error("Ошибка при запросе к Supabase:", error);
      return res.status(500).json({ error: "Ошибка при получении данных" });
    }

    res.json(productData);
  }
});

// Роут для получения всех товаров
app.get("/api/products", async (req, res) => {
  try {
    // Запрашиваем все товары из таблицы products
    const { data: products, error } = await supabaseService
      .from("products")
      .select("*");

    if (error) {
      console.error("Ошибка при запросе к Supabase:", error);
      return res.status(500).json({ error: "Ошибка при получении данных" });
    }

    return res.status(200).send(products);
  } catch (error) {
    console.error("Ошибка сервера:", error);
    return res.status(500).json({ error: "Ошибка сервера" });
  }
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
