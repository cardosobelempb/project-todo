import type { ElementRootProps } from "../types/element.type";
import { clsx } from "clsx";
import { InputRoot } from "../input-root/input-root";
import { IconRoot } from "../icon-root/icon-root";

export type CheckBoxRootProps = ElementRootProps & {};

export const InputCheckBoxRoot: React.FunctionComponent<CheckBoxRootProps> = ({
  label,
  error,
  className,
  disabled,
  isChecked,
  isFocus,
  strock,
  fill,
  icon,
  h = "h-6",
  w = "w-6",
  p = "p-0.5",
}) => {
  const baseClasses = clsx(
    "appearance-none peer flex items-center justify-center border-2 border-green-500 hover:border-green-800 hover:bg-green-800 transition overflow-hidden cursor-pointer rounded",
    className,
    label,
    error,
    isFocus && "focus:border-pink-500 group",
    isChecked &&
      "checked:border-green-500 checked:bg-green-500 group-hover:checked:border-green-800 group-hover:checked:bg-green-800 relative",
    h,
    w
  );

  return (
    <>
      <InputRoot
        className={baseClasses}
        type="checkbox"
        disabled={disabled}
        checked={isChecked}
      >
        {icon && (
          <IconRoot
            strock={strock}
            fill={fill}
            className="absolute top-1/2 left-0 -translate-y-1/2 hidden peer-checked:block fill-white"
            icon={icon}
            h={h}
            w={w}
            p={p}
          />
        )}
      </InputRoot>
    </>
  );
};
