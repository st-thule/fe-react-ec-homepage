import React from "react";

interface ButtonProps {
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  label: string;
  icon?: string;
}

const Button: React.FC<ButtonProps> = ({
  className = "",
  type = "button",
  onClick,
  label,
  icon,
}) => {
  return (
    <a className={`btn ${className}`} onClick={onClick}>
      <p>{label}</p>
      {icon && (
        <span className="btn-icon">
          <img src={icon} alt="button icon" />
        </span>
      )}
    </a>
  );
};

export default Button;
