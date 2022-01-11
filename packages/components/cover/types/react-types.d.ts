import React from "@types/react";
import { TSCoverHTMLAttributes } from "@tradeshift/elements.cover";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "ts-cover": TSCoverHTMLAttributes & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
