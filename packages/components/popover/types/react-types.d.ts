import React from "react";
import { TSPopoverHTMLAttributes } from "@tradeshift/elements.popover";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "ts-popover": TSPopoverHTMLAttributes & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
