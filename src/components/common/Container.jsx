// File: src/components/common/Container.jsx
import React from "react";

function Container({ children, className = "" }) {
  return (
    <div
      className={`
        w-full
        max-w-[1440px]
        mx-auto
        px-5
        sm:px-8
        lg:px-12
        xl:px-16
        2xl:px-20
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default Container;
