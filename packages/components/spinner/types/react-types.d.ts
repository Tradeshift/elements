import React from "react";
import { TSSpinnerHTMLAttributes } from "@tradeshift/elements.spinner";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "ts-spinner": TSSpinnerHTMLAttributes & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
