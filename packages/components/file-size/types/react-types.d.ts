import React from "@types/react";
import { TSFileSizeHTMLAttributes } from "@tradeshift/elements.file-size";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "ts-file-size": TSFileSizeHTMLAttributes & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
