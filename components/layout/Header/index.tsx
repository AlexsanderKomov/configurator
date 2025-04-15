"use client";

import Image from "next/image";
import Link from "next/link";
import delc from "@/public/image/Logo-01.svg";
import { useProfile } from "@/components/auth/store";
import ProfileHeader from "@/components/auth/ProfileHeader";
import Login from "./components/Login";
import Registration from "./components/Registration";
import useFetchUserFromLocalStorage from "@/lib/hooks/useFetchUserFromLocalStorage";

function Header() {
  useFetchUserFromLocalStorage("userData");
  const { role } = useProfile((state) => state);

  return (
    <div className="container flex justify-between items-center py-5">
      <Link href="/">
        <Image width={150} height={100} src={delc} alt="Логотип DELC" />
      </Link>

      <div className="flex space-x-4">
        {role && <ProfileHeader />}
        {!role && (
          <>
            <Login /> <Registration />
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
