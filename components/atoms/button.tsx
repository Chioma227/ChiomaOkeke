import clsx from "clsx";
import { ReactComponentElement } from "react";
import { eventNoArg } from "@/types/events.types";
import { ButtonVariant } from "@/variants/rootVariants";

interface BProps {
  variant: ButtonVariant;
  children: string | ReactComponentElement<any, any>[];
  className?: string;
  onClick: eventNoArg;
}

const { SECONDARY } = ButtonVariant;

let style = "text-white";

const Button = ({ variant, children, className, onClick }: BProps) => {
  switch (variant) {
    case SECONDARY:
      className = clsx(style, className, "button");
      break;
    default:
      break;
  }
  return <button className={className} onClick={onClick}>{children}</button>;
};

export default Button;
