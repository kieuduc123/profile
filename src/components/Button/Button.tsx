import { useRef } from "react";
import "./button.scss";

type ButtonProps = {
  className?: string;
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
};

const Button = ({ className = "", type = "button", children }: ButtonProps) => {
  const btnRef = useRef<HTMLButtonElement | null>(null);

  const handleHoverIn = () => {
    if (btnRef.current) {
      btnRef.current.classList.add("is-hover");
    }
  };

  const handleHoverOut = () => {
    if (btnRef.current) {
      btnRef.current.classList.remove("is-hover");
    }
  };

  return (
    <button
      className={`btn ${className}`}
      type={type}
      onMouseEnter={handleHoverIn}
      onMouseLeave={handleHoverOut}
      ref={btnRef}
    >
      {children}
    </button>
  );
};

export default Button;
