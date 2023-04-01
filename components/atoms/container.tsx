import { containerVariants } from "@/variants/rootVariants";
import clsx from "clsx";
import { ReactComponentElement, ReactNode } from "react";

interface CProps {
  variant: containerVariants;
  className?: string;
  children: string | ReactComponentElement<any, any>[] | ReactNode;
}

const { NORMAL, FLEXED, FLEX_COL, FLEX_START } = containerVariants;

let style = "";

const Container = ({ variant, className, children }: CProps) => {
  switch (variant) {
    case NORMAL:
      className = clsx(className, "normal");
      break;
    case FLEXED:
      className = clsx(className, "flexed");
      break;
    case FLEX_COL:
      className = clsx(className, "flex_col_center");
      break;
    case FLEX_START:
      className = clsx(className, "flex_col_start");
      break;
    default:
      break;
  }

  return <main className={className}>{children}</main>;
};

export default Container;
