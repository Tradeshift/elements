import React from "react";
import { TSAsideHTMLAttributes } from "@tradeshift/elements.aside";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "ts-aside": TSAsideHTMLAttributes & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
