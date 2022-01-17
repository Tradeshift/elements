import React from "react";
import { TSTypographyHTMLAttributes } from "@tradeshift/elements.typography";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "ts-typography": TSTypographyHTMLAttributes & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
