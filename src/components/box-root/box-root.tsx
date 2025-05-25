import { ElementRoot } from "../element-root/element-root";
import type { ElementRootProps } from "../types/element.type";
import { clsx } from "clsx";

type BoxRootProps = ElementRootProps & {};

export const BoxRoot: React.FunctionComponent<BoxRootProps> = ({
  children,
  className,
  as = "div",
  px,
  py,
  w,
  h,
}) => {
  return (
    <ElementRoot
      as={as}
      className={clsx(
        "flex items-center gap-x-3 rounded-lg border border-gray-200 bg-white shadow-sm p-5",
        `${px && px} ${w && w} ${h && h} ${py && py} ${className}`
      )}
    >
      {children}
    </ElementRoot>
  );
};
