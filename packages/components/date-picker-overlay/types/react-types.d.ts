import React from "@types/react";
import { TSDatePickerOverlayHTMLAttributes } from "@tradeshift/elements.date-picker-overlay";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "ts-date-picker-overlay": TSDatePickerOverlayHTMLAttributes & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
