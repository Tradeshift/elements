import React from "react";
import { TSRadioGroupHTMLAttributes } from "@tradeshift/elements.radio-group";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "ts-radio-group": TSRadioGroupHTMLAttributes & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
