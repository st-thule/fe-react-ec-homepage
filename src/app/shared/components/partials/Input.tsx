import React from "react";

interface InputProps {
  name?: string;
  label?: string;
  placeHolder?: string;
  className?: string;
  maxLength?: number;
  minLength?: number;
  onInputBlur?: (value: string) => void;
  onInputChange?: (value: string) => void;
  isReadOnly?: boolean;
  isDisabled?: boolean;
  type?: string;
}
export const Input: React.FC<InputProps> = ({
  name = "",
  label = "",
  className = "",
  type = "text",
  placeHolder = "",
  maxLength,
  minLength,
  isReadOnly = false,
  isDisabled = false,
  onInputBlur,
  onInputChange,
}) => {
  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (onInputBlur) {
      onInputBlur(event.target.value);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onInputChange) {
      onInputChange(event.target.value);
    }
  };
  return (
    <div className="input-wrapper">
      {label && <label>{label}</label>}
      <input
        id={name}
        name={name}
        type={type}
        className={className}
        placeholder={placeHolder}
        maxLength={maxLength}
        minLength={minLength}
        readOnly={isReadOnly}
        disabled={isDisabled}
        onBlur={handleBlur}
        onChange={handleChange}
      />
    </div>
  );
};
