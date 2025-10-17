import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

const PrimaryButton: React.FC<ButtonProps> = ({ text, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-secondary text-black font-semibold px-6 py-2 rounded-2xl shadow-md transition-all duration-300 hover:bg-[#e09e4c] cursor-pointer ${className}`}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
