/// <reference types="react" />
import "./button.scss";
type ButtonProps = {
    className?: string;
    type?: "button" | "submit" | "reset";
    children: React.ReactNode;
};
declare const Button: ({ className, type, children }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
export default Button;
