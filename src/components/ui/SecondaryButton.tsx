// src/components/ui/SecondaryButton.tsx
import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

const SecondaryButton: React.FC<ButtonProps> = ({
  text,
  onClick,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={`border-2 border-secondary text-secondary font-semibold px-6 py-2 rounded-2xl transition-all duration-300 hover:bg-secondary hover:text-black cursor-pointer ${className}`}
    >
      {text}
    </button>
  );
};

export default SecondaryButton;
