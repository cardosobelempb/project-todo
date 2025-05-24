import { clsx } from "clsx";
import type { IconType } from "react-icons";
import type { ElementRootProps } from "../types/element.type";

type IconRootProps = ElementRootProps & {
  icon: IconType;
  size?: number | string;
  className?: string;
  onClick?: () => void;
  spin?: boolean;
};

export const IconRoot: React.FunctionComponent<IconRootProps> = ({
  icon: ElementRoot,
  spin = false,
  size = 24,
  color = "inherit",
  className,
  onClick,
}) => {
  const animate = spin && "animate-spin";
  const event = onClick && "cursor-pointer";
  return (
    <ElementRoot
      onClick={onClick}
      size={size}
      color={color}
      className={clsx("", `${event} ${animate}  ${className}`)}
    />
  );
};
