import type { ElementRootProps } from "../types/element.type";

import type { FunctionComponent } from "react";
import React from "react";

export const ElementRoot: FunctionComponent<ElementRootProps> = ({
  as = "span",
  className,
  children,
  ...props
}) => {
  return React.createElement(
    as,
    {
      className,
      ...props,
    },
    children
  );
};
