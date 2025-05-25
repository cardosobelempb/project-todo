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
import type {
  HVariants,
  PbVariants,
  PtVariants,
  PVariants,
  PxVariants,
  PyVariants,
  WVariants,
} from "./default";

export type ElementRootProps<T extends ElementType = "span"> = {
  label?: string;
  error?: string;
  isChecked?: boolean;
  isFocus?: boolean;
  as?: keyof JSX.IntrinsicElements | ElementType;
  disabled?: boolean;
  icon?: IconType;
  className?: string;
  children?: React.ReactNode;
  bg?: BackgroundVariants;
  cor?: TextVariants;
  fill?: FillVariants;
  strock?: StrockVariants;
  size?: SizeVariants;
  font?: FontVariants;
  leading?: LeadingVariants;
  p?: PVariants;
  px?: PxVariants;
  py?: PyVariants;
  pb?: PbVariants;
  pt?: PtVariants;
  w?: WVariants;
  h?: HVariants;
} & ComponentPropsWithoutRef<T>;
