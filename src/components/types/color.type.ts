export type ColorTypeVariants =
  | "bg"
  | "text"
  | "border"
  | "placeholder"
  | "ring"
  | "accent"
  | "fill"
  | "stroke"
  | "shadow"
  | "divide"
  | "caret"
  | "active"
  | "outline";

export type ColorVariants = "white" | "black" | "gray" | "green" | "pink";

export type ColorValueVariants = "100" | "200" | "500" | "800";

export type ColorRootVariants = {
  type: ColorTypeVariants;
  color: ColorVariants;
  value?: ColorValueVariants;
};

export const colorRootClasses: Record<keyof ColorRootVariants, string> = {
  type: "type",
  color: "color",
  value: "value",
};

export const colorValueClasses: Record<ColorValueVariants, string> = {
  "100": "100",
  "200": "200",
  "500": "500",
  "800": "800",
};

export const colorClasses: Record<ColorVariants, string> = {
  black: "black",
  white: "white",
  gray: "gray",
  green: "green",
  pink: "pink",
};

export const colorTypeClasses: Record<ColorTypeVariants, string> = {
  bg: "bg",
  accent: "accent",
  border: "border",
  caret: "caret",
  divide: "divide",
  fill: "fill",
  placeholder: "placeholder",
  ring: "ring",
  shadow: "shadow",
  stroke: "stroke",
  text: "text",
  active: "active",
  outline: "outline",
};

export const colorVariantClasses = {
  bg: {
    white: "bg-white",
    black: "bg-black",
    gray: {
      "100": "bg-gray-100",
      "200": "bg-gray-200",
      "500": "bg-gray-500",
      "800": "bg-gray-800",
    },
    green: {
      "100": "bg-green-100",
      "200": "bg-green-200",
      "500": "bg-green-500",
      "800": "bg-green-800",
    },
    pink: {
      "100": "bg-pink-100",
      "200": "bg-pink-200",
      "500": "bg-pink-500",
      "800": "bg-pink-800",
    },
  },
  accent: {
    white: "bg-white",
    black: "bg-black",
    gray: {
      "100": "bg-gray-100",
      "200": "bg-gray-200",
      "500": "bg-gray-500",
      "800": "bg-gray-800",
    },
    green: {
      "100": "bg-green-100",
      "200": "bg-green-200",
      "500": "bg-green-500",
      "800": "bg-green-800",
    },
    pink: {
      "100": "bg-pink-100",
      "200": "bg-pink-200",
      "500": "bg-pink-500",
      "800": "bg-pink-800",
    },
  },
  border: {
    white: "bg-white",
    black: "bg-black",
    gray: {
      "100": "bg-gray-100",
      "200": "bg-gray-200",
      "500": "bg-gray-500",
      "800": "bg-gray-800",
    },
    green: {
      "100": "bg-green-100",
      "200": "bg-green-200",
      "500": "bg-green-500",
      "800": "bg-green-800",
    },
    pink: {
      "100": "bg-pink-100",
      "200": "bg-pink-200",
      "500": "bg-pink-500",
      "800": "bg-pink-800",
    },
  },
  caret: "caret",
  divide: "divide",
  fill: "fill",
  placeholder: "placeholder",
  ring: "ring",
  shadow: "shadow",
  stroke: "stroke",
  text: "text",
  active: "active",
  outline: "outline",
};
