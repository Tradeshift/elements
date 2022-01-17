import React from "react";
import { TSProgressBarHTMLAttributes } from "@tradeshift/elements.progress-bar";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "ts-progress-bar": TSProgressBarHTMLAttributes & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
