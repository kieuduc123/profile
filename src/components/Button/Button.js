import { jsx as _jsx } from "react/jsx-runtime";
import { useRef } from 'react';
import './button.scss';
const Button = props => {
    const btnRef = useRef(null);
    const handleHoverIn = () => {
        btnRef.current.classList.add('is-hover');
    };
    const handleHoverOut = () => {
        btnRef.current.classList.remove('is-hover');
    };
    return (_jsx("button", { className: `btn ${props.className}`, type: props.type, onMouseEnter: handleHoverIn, onMouseLeave: handleHoverOut, ref: btnRef, children: props.children }));
};
export default Button;
