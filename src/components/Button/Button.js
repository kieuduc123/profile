import { jsx as _jsx } from "react/jsx-runtime";
import { useRef } from "react";
import "./button.scss";
const Button = ({ className = "", type = "button", children }) => {
    const btnRef = useRef(null);
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
    return (_jsx("button", { className: `btn ${className}`, type: type, onMouseEnter: handleHoverIn, onMouseLeave: handleHoverOut, ref: btnRef, children: children }));
};
export default Button;
