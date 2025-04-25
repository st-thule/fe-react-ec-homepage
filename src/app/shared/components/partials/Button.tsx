import React from 'react';

interface ButtonProps {
  className?: string;
  type?: 'button' | 'submit';
  onClick?: () => void;
  label: string;
  iconPrefix?: string;
  iconSuffix?: string;
}

const Button: React.FC<ButtonProps> = ({
  className = '',
  type = 'button',
  onClick,
  label,
  iconPrefix,
  iconSuffix,
}) => {
  return (
    <button type={type} className={`btn ${className}`} onClick={onClick}>
      {iconPrefix && (
        <span className="btn-icon prefix">
          <img src={iconPrefix} alt="prefix icon" />
        </span>
      )}
      <p>{label}</p>
      {iconSuffix && (
        <span className="btn-icon suffix">
          <img src={iconSuffix} alt="suffix icon" />
        </span>
      )}
    </button>
  );
};

export default Button;
