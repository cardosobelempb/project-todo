import { ElementRoot } from "../element-root/element-root";
import type { ElementRootProps } from "../types/element.type";
import { clsx } from "clsx";

type ContainerRootProps = ElementRootProps & {};

export const ContainerRoot: React.FunctionComponent<ContainerRootProps> = ({
  children,
  className,
  as = "article",
  px,
  py,
}) => {
  return (
    <ElementRoot
      as={as}
      className={clsx(
        "flex items-center gap-x-3 rounded-lg border border-gray-200 bg-white shadow-sm p-5",
        `${px && px} ${py && py} ${className}`
      )}
    >
      {children}
    </ElementRoot>
  );
};
