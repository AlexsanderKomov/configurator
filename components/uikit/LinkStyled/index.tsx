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
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    >
      {children}
    </Link>
  );
}

export default LinkStyled;
