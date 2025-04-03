import Link from "next/link";
import { LinkHTMLAttributes } from "react";

interface ILinkStyled extends LinkHTMLAttributes<HTMLLinkElement> {
  href: string;
  children: React.ReactNode;
}
function LinkStyled(props: ILinkStyled) {
  const { children, href } = props;

  return (
    <Link
      href={href}
      className="px-4 py-2 text-white rounded text-base font-medium
        bg-gradient-to-r from-[#30ebff] to-[#2563eb] hover:opacity-60 transition-opacity duration-200 focus:outline-none focus:ring-2 focus:#2563eb focus:ring-offset-2"
    >
      {children}
    </Link>
  );
}

export default LinkStyled;
