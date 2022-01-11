import React from "@types/react";
import { TSInputHTMLAttributes } from "@tradeshift/elements.input";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "ts-input": TSInputHTMLAttributes & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
