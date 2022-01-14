import React from "@types/react";
import { TSTextFieldHTMLAttributes } from "@tradeshift/elements.text-field";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "ts-text-field": TSTextFieldHTMLAttributes & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
