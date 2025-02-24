import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  try {
    const response = await fetch("http://localhost:3001/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch {
    // Удаляем переменную error, так как она не используется
    return NextResponse.json(
      { error: "Ошибка при регистрации" },
      { status: 500 }
    );
  }
}
