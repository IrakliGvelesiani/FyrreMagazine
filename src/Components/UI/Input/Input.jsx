import React from "react";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={`
        Input ${className || ""}`}
      ref={ref}
      {...props}
    />
  );
});

Input.displayName = "Input";

export default Input;
