import React from "react";
import { TSActionSelectHTMLAttributes } from "@tradeshift/elements.action-select";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "ts-action-select": TSActionSelectHTMLAttributes & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
