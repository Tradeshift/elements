import React from "react";
import { TSTagHTMLAttributes } from "@tradeshift/elements.tag";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "ts-tag": TSTagHTMLAttributes & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
