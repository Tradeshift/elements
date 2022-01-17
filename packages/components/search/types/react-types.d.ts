import React from "react";
import { TSSearchHTMLAttributes } from "@tradeshift/elements.search";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "ts-search": TSSearchHTMLAttributes & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
