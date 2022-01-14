import React from "@types/react";
import { TSButtonGroupHTMLAttributes } from "@tradeshift/elements.button-group";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "ts-button-group": TSButtonGroupHTMLAttributes & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
