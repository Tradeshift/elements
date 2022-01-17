import React from "react";
import { TSModalHTMLAttributes } from "@tradeshift/elements.modal";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "ts-modal": TSModalHTMLAttributes & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
