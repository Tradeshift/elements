import React from "@types/react";
import { TSButtonHTMLAttributes } from "@tradeshift/elements.button";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "ts-button": TSButtonHTMLAttributes & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
