import React from "react";
import { TSTabsHTMLAttributes } from "@tradeshift/elements.tabs";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "ts-tabs": TSTabsHTMLAttributes & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
