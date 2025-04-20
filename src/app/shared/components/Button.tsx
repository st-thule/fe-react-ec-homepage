interface ButtonProps {
  className?: string;
  type: "primary" | "secondary";
  size: "sm" | "lg" | "xl";
  onClick: () => void;
}
