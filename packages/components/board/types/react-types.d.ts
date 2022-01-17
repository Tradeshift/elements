import React from "react";
import { TSBoardHTMLAttributes } from "@tradeshift/elements.board";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "ts-board": TSBoardHTMLAttributes & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
