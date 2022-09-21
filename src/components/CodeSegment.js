import React from "react";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
const CodeSegment = ({ children, language }) => {
  return (
    <SyntaxHighlighter language={language} style={dark}>
      {children}
    </SyntaxHighlighter>
  );
};

export default CodeSegment;
