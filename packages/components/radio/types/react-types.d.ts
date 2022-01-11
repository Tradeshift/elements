import React from "@types/react";
import { TSRadioHTMLAttributes } from "@tradeshift/elements.radio";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "ts-radio": TSRadioHTMLAttributes & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
