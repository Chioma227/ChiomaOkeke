import Link from "next/link";
import { ReactComponentElement } from "react";

interface Lprops {
  href: string;
  children: string | ReactComponentElement<any, any>[];
  className: string;
}

const anchorLink = ({ children, className, href }: Lprops) => {
  return <Link href={href}>{children}</Link>;
};

export default anchorLink;
