import SignInWithEmail from "@/components/authentication/SignInWithEmail";
import SignInWithPhone from "@/components/authentication/SignInWithPhone";

export default function SignInPage() {
  return (
    <div className="flex flex-col gap-y-8">
      <h1>Вход</h1>
      <SignInWithEmail />
      <SignInWithPhone />
    </div>
  );
}
