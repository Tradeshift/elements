import React from "@types/react";
import { TSFileUploaderInputHTMLAttributes } from "@tradeshift/elements.file-uploader-input";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "ts-file-uploader-input": TSFileUploaderInputHTMLAttributes & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
