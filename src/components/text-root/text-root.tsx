import { ElementRoot } from "../element-root/element-root";
import type { ElementRootProps } from "../types/element.type";
import { clsx } from "clsx";

type TextRootProps = ElementRootProps & {
  color?: string;
  size?:
    | "sm"
    | "sm-bold"
    | "md"
    | "md-bold"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl";
};

export const TextRoot: React.FunctionComponent<TextRootProps> = ({
  children,
  className,
  size,
  as = "p",
}) => {
  switch (size) {
    case "sm":
      return (
        <ElementRoot
          as={as}
          className={clsx("text-sm leading-5 font-semibold", className)}
        >
          {children}
        </ElementRoot>
      );
    case "md":
      return (
        <ElementRoot
          as={as}
          className={clsx("text-base leading-6 font-normal", className)}
        >
          {children}
        </ElementRoot>
      );
    case "md-bold":
      return (
        <ElementRoot
          as={as}
          className={clsx("text-base leading-6 font-bold", className)}
        >
          {children}
        </ElementRoot>
      );
    default:
      return (
        <ElementRoot
          as={as}
          className={clsx("text-base leading-6 font-normal", className)}
        >
          {children}
        </ElementRoot>
      );
  }
};
