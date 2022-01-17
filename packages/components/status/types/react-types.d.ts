import React from "react";
import { TSStatusHTMLAttributes } from "@tradeshift/elements.status";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "ts-status": TSStatusHTMLAttributes & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
