import React from "react";
import { TSBasicTableHTMLAttributes } from "@tradeshift/elements.basic-table";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "ts-basic-table": TSBasicTableHTMLAttributes & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
