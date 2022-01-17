import React from "react";
import { TSLabelHTMLAttributes } from "@tradeshift/elements.label";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "ts-label": TSLabelHTMLAttributes & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
