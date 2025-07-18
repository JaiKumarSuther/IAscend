import React from "react";
import clsx from "clsx";

interface CustomButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";  // <-- Added type prop
}

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  onClick,
  className = "",
  disabled = false,
  type = "button",   // <-- Default type
}) => {
  return (
    <button
      type={type}     // <-- Button type applied
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        "w-full max-w-[361px] h-[44px] px-[20px] py-[12px] rounded-[8px] flex items-center justify-center gap-[10px]",
        "text-white text-[16px] leading-[1] font-medium font-plus-jakarta text-center",
        "transition-all duration-300 ease-in-out",
        !disabled
          ? "cursor-pointer bg-gradient-to-r from-[#D42066] to-[#D12498] hover:brightness-110 hover:shadow-md hover:scale-[1.02]"
          : "bg-gray-600 cursor-not-allowed opacity-60",
        className
      )}
    >
      {text}
    </button>
  );
};

export default CustomButton;
