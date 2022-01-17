import React from "react";
import { TSTooltipHTMLAttributes } from "@tradeshift/elements.tooltip";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "ts-tooltip": TSTooltipHTMLAttributes & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
