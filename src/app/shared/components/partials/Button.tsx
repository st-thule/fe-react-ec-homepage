import React from "react";

interface ButtonProps {
  className?: string;
  onClick?: () => void;
  type: "primary" | "secondary";
  size?: "sm" | "xl";
  style?: "normal" | "bold";
  isFlex?: boolean;
  isFontSmall?: boolean;
  label: string;
  icon?: string;
}

const Button: React.FC<ButtonProps> = ({
  className = "",
  onClick,
  type = "primary",
  size = "xl",
  style = "normal",
  isFlex = false,
  isFontSmall = false,
  label,
  icon,
}) => {
  const buttonClass = `
    btn
    ${type === "primary" ? "btn-primary" : "btn-secondary"}
    ${size === "sm" ? "btn-sm" : "btn-xl"}
    ${style === "bold" ? "btn-bold" : ""}
    ${isFlex ? "btn-flex" : ""}
    ${isFontSmall ? "btn-font-small" : ""}
    ${className}
  `.trim();

  return (
    <a className={buttonClass} onClick={onClick}>
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
