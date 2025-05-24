import { ElementRoot } from "../element-root/element-root";
import type { ElementRootProps } from "../types/element.type";
import { clsx } from "clsx";

type TextRootProps = ElementRootProps & {};

export const TextRoot: React.FunctionComponent<TextRootProps> = ({
  children,
  className,
  size,
  font = "font-normal",
  leading = "leading-5",
  as = "p",
}) => {
  return (
    <ElementRoot
      as={as}
      className={clsx(
        `${size && size} ${font && font} ${leading && leading} ${className}`
      )}
    >
      {children}
    </ElementRoot>
  );
};
