import React from "react";
import { TSHelpTextHTMLAttributes } from "@tradeshift/elements.help-text";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "ts-help-text": TSHelpTextHTMLAttributes & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
