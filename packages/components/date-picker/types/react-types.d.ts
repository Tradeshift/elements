import React from "react";
import { TSDatePickerHTMLAttributes } from "@tradeshift/elements.date-picker";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "ts-date-picker": TSDatePickerHTMLAttributes & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
