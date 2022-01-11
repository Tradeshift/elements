import React from "@types/react";
import { TSAppIconHTMLAttributes } from "@tradeshift/elements.app-icon";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "ts-app-icon": TSAppIconHTMLAttributes & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
