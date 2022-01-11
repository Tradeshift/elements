import React from "@types/react";
import { TSDocumentCardHTMLAttributes } from "@tradeshift/elements.document-card";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "ts-document-card": TSDocumentCardHTMLAttributes & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
