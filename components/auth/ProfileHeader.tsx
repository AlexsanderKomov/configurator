import Link from "next/link";
import { useProfile } from "./store";
import { RefObject, useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";
import ButtonLogout from "../uikit/ButtonLogout";

function ProfileHeader() {
  const [isHovered, setIsHovered] = useState(false); // Состояние для управления видимостью popover
  const { user } = useProfile((state) => state);

  const popoverRef = useRef<null>(null);

  // Закрыть popover при клике вне его области
  useOnClickOutside(popoverRef as unknown as RefObject<HTMLElement>, () =>
    setIsHovered(false)
  );

  return (
    <div
      ref={popoverRef}
      className="relative"
      onMouseEnter={() => setIsHovered(true)} // Показываем popover при наведении
    >
      {/* Ссылка */}
      <Link
        href={"/profile"}
        className="border border-black rounded-full h-10 w-10 flex items-center justify-center"
      >
        {user.first_name.split("")[0]}
        {user.last_name.split("")[0]}
      </Link>

      {/* Popover */}
      {isHovered && (
        <div className="absolute top-12 right-0 bg-white border rounded-lg shadow-lg p-2">
          <Link href={"/profile"}>Профиль</Link>
          <ButtonLogout />
        </div>
      )}
    </div>
  );
}

export default ProfileHeader;
