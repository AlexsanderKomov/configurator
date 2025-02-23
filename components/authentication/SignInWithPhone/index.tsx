"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

const SignInWithPhone = () => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);

  const handleSendOtp = async () => {
    const { error } = await supabase.auth.signInWithOtp({
      phone,
    });

    if (error) {
      console.error("Ошибка при отправке OTP:", error.message);
    } else {
      setIsOtpSent(true);
      console.log("OTP отправлен на номер:", phone);
    }
  };

  const handleVerifyOtp = async () => {
    const { data, error } = await supabase.auth.verifyOtp({
      phone,
      token: otp,
      type: "sms",
    });

    if (error) {
      console.error("Ошибка при проверке OTP:", error.message);
    } else {
      console.log("Успешный вход:", data.user);
      window.location.href = "/profile"; // Перенаправление на страницу профиля
    }
  };

  return (
    <div>
      {!isOtpSent ? (
        <div>
          <input
            type="tel"
            placeholder="Телефон"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <button onClick={handleSendOtp}>Отправить OTP</button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Введите OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button onClick={handleVerifyOtp}>Подтвердить OTP</button>
        </div>
      )}
    </div>
  );
};

export default SignInWithPhone;
