// File: src/components/common/Container.jsx
import React from "react";

function Container({ children, className = "" }) {
  return <div className={`container-custom ${className}`}>{children}</div>;
}

export default Container;
