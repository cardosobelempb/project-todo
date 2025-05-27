import { clsx } from "clsx";
import { ElementRoot } from "../element-root/element-root";

import type { ElementRootProps } from "../utils/element.type";

import { twClassBuilder } from "../utils";

type TextRootProps = ElementRootProps & {};

export const TextRoot: React.FunctionComponent<TextRootProps> = ({
  children,
  className,
  size,
  weight,
  align,
  transform,
  style,
  text,
  ...props
}) => {
  const classBuilder = twClassBuilder({
    text,
    size,
    weight,
    align,
    transform,
    style,
  });

  return (
    <ElementRoot
      className={clsx("", `${classBuilder} ${className}`)}
      {...props}
    >
      {children}
    </ElementRoot>
  );
};
