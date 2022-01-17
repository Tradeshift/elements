import React from "react";
import { TSOverlayHTMLAttributes } from "@tradeshift/elements.overlay";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "ts-overlay": TSOverlayHTMLAttributes & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
