import React from "@types/react";
import { TSIconHTMLAttributes } from "@tradeshift/elements.icon";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "ts-icon": TSIconHTMLAttributes & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
