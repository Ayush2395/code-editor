import React from "react";

interface ButtonProps {
  title: string;
  className?: string | boolean | any;
  onClick: () => any;
}

const Button: React.FC<ButtonProps> = ({ title, className, onClick }) => {
  return (
    <>
      <button className={className} onClick={onClick}>
        {title}
      </button>
    </>
  );
};

export default Button;
