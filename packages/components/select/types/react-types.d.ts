import React from "@types/react";
import { TSSelectHTMLAttributes } from "@tradeshift/elements.select";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "ts-select": TSSelectHTMLAttributes & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
