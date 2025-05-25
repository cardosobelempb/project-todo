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
}) => {
  const baseClasses = clsx(
    "w-6 h-6 appearance-none peer flex items-center justify-center border-2 border-green-500 hover:border-green-800 hover:bg-green-800 transition overflow-hidden cursor-pointer rounded",
    className,
    label,
    error,
    isFocus && "focus:border-pink-500 group",
    isChecked &&
      "checked:border-green-500 checked:bg-green-500 group-hover:checked:border-green-800 group-hover:checked:bg-green-800 relative"
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
            className="w-auto absolute top-1/2 left-0 -translate-y-1/2 p-1.5 hidden peer-checked:block fill-white"
            icon={icon}
          />
        )}
      </InputRoot>
    </>
  );
};
