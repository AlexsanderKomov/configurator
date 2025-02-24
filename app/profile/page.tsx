import { getSession } from "@/app/auth/session";
import SignOut from "@/components/authentication/SignOut";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const session = await getSession();

  if (!session) {
    redirect("/login"); // Перенаправление на страницу входа
  }

  return (
    <div>
      <h1>Профиль</h1>
      <p>Email: {session.user.email}</p>
      <p>Телефон: {session.user.phone}</p>
      <SignOut />
    </div>
  );
}
