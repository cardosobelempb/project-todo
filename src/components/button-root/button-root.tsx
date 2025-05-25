import { ElementRoot } from "../element-root/element-root";
import { IconRoot } from "../icon-root/icon-root";
import type { ElementRootProps } from "../types/element.type";
import { clsx } from "clsx";

type ButtonRootProps = ElementRootProps & {};

export const ButtonRoot: React.FunctionComponent<ButtonRootProps> = ({
  children,
  className,
  size,
  font = "font-normal",
  leading = "leading-5",
  as = "button",
  disabled,
  icon,
  bg,
  color,
  fill,
  strock,
  px,
  py,
  ...props
}) => {
  return (
    <ElementRoot
      as={as}
      className={clsx(
        "flex gap-x-1 group ",
        `${size && size} ${font && font} ${leading && leading} ${className} ${
          disabled
            ? `${bg ? bg : "bg-gray-100/50 hover:bg-gray-100"} ${
                color ? color : "text-gray-500"
              } cursor-not-allowed pointer-events-none `
            : `cursor-pointer ${className}`
        } ${bg && bg} ${color && color} ${px ? px : "px-5"} ${py ? py : "py-4"}`
      )}
      {...props}
    >
      {icon && (
        <IconRoot strock={strock} fill={fill} className="p-1" icon={icon} />
      )}
      {children}
    </ElementRoot>
  );
};
