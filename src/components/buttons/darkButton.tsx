import React from "react";

type DarkButtonProps = {
  text?: string;                  // Button text
  icon?: React.ReactElement;      // Optional icon
  onClick?: () => void;           // Click handler
  className?: string;             // Extra Tailwind classes
};

const DarkButton: React.FC<DarkButtonProps> = ({
  text = "Click Me",
  icon,
  onClick,
  className = "",
}) => {
  return (
   <button
        onClick={onClick}
        className={`border border-pink-900 inline-flex items-center gap-2 cursor-pointer text-sm md:text-base text-indigo-hover hover:shadow-white/20 hover:border-pink-700 rounded-md px-2 md:px-6 py-2 hover-zoom-in bg-shadow-primary ${className}`}
        >
       
        {icon && <span className="ml-2">{icon}</span>}
         {text}
    </button>
  );
};

export default DarkButton;
