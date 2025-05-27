import { ElementRoot } from "../element-root/element-root";
import type { ElementRootProps } from "../utils/element.type";
import { clsx } from "clsx";

type ContainerRootProps = ElementRootProps & {};

export const ContainerRoot: React.FunctionComponent<ContainerRootProps> = ({
  children,
  className,
  as = "main",
  px,
  py,
  w,
  h,
}) => {
  return (
    <ElementRoot
      as={as}
      className={clsx(
        "w-full px-2 ",
        `${px && px} ${py && py} ${w && w} ${h && h} ${className}`
      )}
    >
      {children}
    </ElementRoot>
  );
};
