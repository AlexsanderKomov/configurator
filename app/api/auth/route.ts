import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

export async function POST(request: Request) {
  const { email, password } = await request.json();

  if (email && password) {
    // Регистрация через email
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ data });
  }

  return NextResponse.json(
    { error: "Email or phone is required" },
    { status: 400 }
  );
}
