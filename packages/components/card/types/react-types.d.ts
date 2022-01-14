import React from "@types/react";
import { TSCardHTMLAttributes } from "@tradeshift/elements.card";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "ts-card": TSCardHTMLAttributes & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
