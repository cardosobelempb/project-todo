import type { ElementType, ComponentPropsWithoutRef } from "react";
import type { JSX } from "react";
import type { IconType } from "react-icons";
export type ElementRootProps<T extends ElementType = "span"> = {
  as?: keyof JSX.IntrinsicElements | ElementType;
  disabled?: boolean;
  icon?: IconType;
  className?: string;
  children?: React.ReactNode;
  bg?:
    | "bg-white"
    | "bg-black"
    | "bg-gray-100"
    | "bg-gray-200"
    | "bg-gray-500"
    | "bg-gray-800"
    | "bg-green-100"
    | "bg-green-500"
    | "bg-green-800"
    | "bg-pink-100"
    | "bg-pink-500"
    | "bg-pink-800";
  color?:
    | "text-white"
    | "text-black"
    | "text-gray-100"
    | "text-gray-200"
    | "text-gray-500"
    | "text-gray-800"
    | "text-green-100"
    | "text-green-500"
    | "text-green-800"
    | "text-pink-100"
    | "text-pink-500"
    | "text-pink-800";
  fill?:
    | "fill-white"
    | "fill-black"
    | "fill-gray-100"
    | "fill-gray-200"
    | "fill-gray-500"
    | "fill-gray-800"
    | "fill-green-100"
    | "fill-green-500"
    | "fill-green-800"
    | "fill-pink-100"
    | "fill-pink-500"
    | "fill-pink-800";
  strock?:
    | "strock-white"
    | "strock-black"
    | "strock-gray-100"
    | "strock-gray-200"
    | "strock-gray-500"
    | "strock-gray-800"
    | "strock-green-100"
    | "strock-green-500"
    | "strock-green-800"
    | "strock-pink-100"
    | "strock-pink-500"
    | "strock-pink-800";

  size?: "text-base" | "text-xs";
  font?: "font-semibold" | "font-bold" | "font-normal";
  leading?: "leading-5" | "leading-6";
  px?: "px-0" | "px-1" | "px-2" | "px-3" | "px-4" | "px-5";
  py?: "py-0" | "py-1" | "py-2" | "py-3" | "py-4" | "py-5";
} & ComponentPropsWithoutRef<T>;
