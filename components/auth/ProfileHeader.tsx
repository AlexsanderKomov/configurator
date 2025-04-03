import Link from "next/link";
import { useProfile } from "./store";
import { useRef, useState } from "react";
import ButtonLogout from "../uikit/ButtonLogout";

function ProfileHeader() {
  const [isHovered, setIsHovered] = useState(false);
  const { user } = useProfile((state) => state);

  // Таймер для плавного исчезновения (чтобы было время навести курсор на popover)
  const hoverTimer = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (hoverTimer.current) {
      clearTimeout(hoverTimer.current);
    }
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    hoverTimer.current = setTimeout(() => {
      setIsHovered(false);
    }, 300); // Небольшая задержка перед закрытием
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
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
        <div
          className="absolute top-12 right-0 bg-white border rounded-lg shadow-lg p-2 w-[180px]"
          onMouseEnter={handleMouseEnter} // Чтобы popover не закрывался при наведении на него
          onMouseLeave={handleMouseLeave}
        >
          <Link href={"/profile"} className="block py-1 px-2 hover:bg-gray-100">
            Профиль
          </Link>
          <ButtonLogout />
        </div>
      )}
    </div>
  );
}

export default ProfileHeader;
