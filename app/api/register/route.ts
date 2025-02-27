// import { createClient } from "@/lib/supabaseServer";
// import { NextResponse } from "next/server";

// export async function POST(request: Request) {
//   const supabase = await createClient();

//   try {
//     const {
//       email,
//       password,
//       firstName,
//       lastName,
//       middleName,
//       company,
//       phoneNumber,
//     } = await request.json();

//     const { data: authData, error: authError } = await supabase.auth.signUp({
//       email,
//       password,
//     });

//     if (authError) {
//       console.error("Supabase Auth Error:", authError);
//       return NextResponse.json({ error: authError.message }, { status: 400 });
//     }

//     // Создание профиля пользователя в таблице profiles
//     const { error: profileError } = await supabase.from("profiles").insert([
//       {
//         user_id: authData.user?.id, // ID пользователя из Supabase Auth
//         first_name: firstName,
//         last_name: lastName,
//         middle_name: middleName || null, // Опциональное поле
//         phone_number: phoneNumber,
//         company,
//         role: "user", // Роль по умолчанию
//       },
//     ]);

//     if (profileError) {
//       return NextResponse.json(
//         { error: profileError.message },
//         { status: 400 }
//       );
//     }

//     alert("Регистрация успешна!");

//     return NextResponse.json(
//       { message: "User registered successfully", user: authData.user },
//       { status: 201 }
//     );
//   } catch (error) {
//     console.error("Error during registration:", error);
//     return NextResponse.json(
//       { error: "Internal Server Error" },
//       { status: 500 }
//     );
//   }
// }
