import React from "@types/react";
import { TSHeaderHTMLAttributes } from "@tradeshift/elements.header";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "ts-header": TSHeaderHTMLAttributes & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
