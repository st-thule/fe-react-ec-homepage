import React from "react";

interface ButtonProps {
  className?: string;
  onClick?: () => void;
  label: string;
  icon?: string;
}

const Button: React.FC<ButtonProps> = ({
  className = "",
  onClick,
  label,
  icon,
}) => {
  return (
    <a className={`btn ${className}`} onClick={onClick}>
      {icon && (
        <span className="btn-icon">
          <img src={icon} alt="button icon" />
        </span>
      )}
      <p>{label}</p>
    </a>
  );
};

export default Button;
