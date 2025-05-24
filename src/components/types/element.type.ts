import type { ElementType, ComponentPropsWithoutRef } from "react";
import type { JSX } from "react";
import type { IconType } from "react-icons";
import type {
  BackgroundVariants,
  FillVariants,
  StrockVariants,
  TextVariants,
} from "./color.type";
import type { FontVariants, LeadingVariants, SizeVariants } from "./text.type";
import type { PxVariants, PyVariants } from "./padding.type";
export type ElementRootProps<T extends ElementType = "span"> = {
  as?: keyof JSX.IntrinsicElements | ElementType;
  disabled?: boolean;
  icon?: IconType;
  className?: string;
  children?: React.ReactNode;
  bg?: BackgroundVariants;
  color?: TextVariants;
  fill?: FillVariants;
  strock?: StrockVariants;
  size?: SizeVariants;
  font?: FontVariants;
  leading?: LeadingVariants;
  px?: PxVariants;
  py?: PyVariants;
} & ComponentPropsWithoutRef<T>;
