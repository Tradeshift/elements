import React from "@types/react";
import { TSFileCardHTMLAttributes } from "@tradeshift/elements.file-card";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "ts-file-card": TSFileCardHTMLAttributes & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
