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
  w,
  h,
}) => {
  return (
    <ElementRoot
      as={as}
      className={clsx(
        "mx-auto",
        `${px && px} ${py && py} ${w && w} ${h && h} ${className}`
      )}
    >
      {children}
    </ElementRoot>
  );
};
