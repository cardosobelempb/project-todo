import type { ElementType, ComponentPropsWithoutRef } from "react";
import type { JSX } from "react";
export type ElementRootProps<T extends ElementType = "span"> = {
  as?: keyof JSX.IntrinsicElements | ElementType;
  className?: string;
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<T>;
