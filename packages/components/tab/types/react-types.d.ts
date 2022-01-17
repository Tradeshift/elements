import React from "react";
import { TSTabHTMLAttributes } from "@tradeshift/elements.tab";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "ts-tab": TSTabHTMLAttributes & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
