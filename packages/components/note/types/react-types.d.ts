import React from "react";
import { TSNoteHTMLAttributes } from "@tradeshift/elements.note";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "ts-note": TSNoteHTMLAttributes & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
