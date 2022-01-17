import React from "react";
import { TSCheckboxHTMLAttributes } from "@tradeshift/elements.checkbox";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "ts-checkbox": TSCheckboxHTMLAttributes & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
