import { clsx } from "clsx";
import type { IconType } from "react-icons";
import type { ElementRootProps } from "../types/element.type";

export type IconRootProps = ElementRootProps & {
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
  strock,
  fill,
  className,
  onClick,
}) => {
  const animate = spin && "animate-spin";
  const event = onClick && "cursor-pointer";
  return (
    <ElementRoot
      onClick={onClick}
      size={size}
      className={clsx(
        "",
        `${event} ${animate} ${strock && strock} ${fill && fill}  ${className}`
      )}
    />
  );
};
