import React from "@types/react";
import { TSDialogHTMLAttributes } from "@tradeshift/elements.dialog";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "ts-dialog": TSDialogHTMLAttributes & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
