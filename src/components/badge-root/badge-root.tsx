import { ElementRoot } from "../element-root/element-root";
import type { ElementRootProps } from "../types/element.type";
import { clsx } from "clsx";

type BadgeRootProps = ElementRootProps & {};

export const BadgeRoot: React.FunctionComponent<BadgeRootProps> = ({
  children,
  className,
  as = "span",
}) => {
  return (
    <ElementRoot
      as={as}
      className={clsx(
        "min-w-2.5 flex justify-center items-center text-xs font-bold size-5 p-1 rounded-full",
        className
      )}
    >
      {children}
    </ElementRoot>
  );
};
