import React from "@types/react";
import { TSSelectMenuHTMLAttributes } from "@tradeshift/elements.select-menu";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "ts-select-menu": TSSelectMenuHTMLAttributes & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
