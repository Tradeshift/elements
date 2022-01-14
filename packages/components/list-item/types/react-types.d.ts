import React from "@types/react";
import { TSListItemHTMLAttributes } from "@tradeshift/elements.list-item";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "ts-list-item": TSListItemHTMLAttributes & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
