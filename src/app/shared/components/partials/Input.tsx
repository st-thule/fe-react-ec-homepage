import React from "react";

interface InputProps {
  className?: string;
  type?: string;
  placeholder?: string;
}
export const Input: React.FC<InputProps> = ({
  className = "",
  type = "",
  placeholder = "",
  ...rest
}) => {
  return (
    <input
      className={className}
      type={type}
      placeholder={placeholder}
      {...rest}
    />
  );
};
