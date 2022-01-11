import React from "@types/react";
import { TSPagerHTMLAttributes } from "@tradeshift/elements.pager";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "ts-pager": TSPagerHTMLAttributes & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
