import React from "react";
import { TSConfirmationPromptHTMLAttributes } from "@tradeshift/elements.confirmation-prompt";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "ts-confirmation-prompt": TSConfirmationPromptHTMLAttributes & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
