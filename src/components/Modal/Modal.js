import { jsx as _jsx } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import './modal.scss';
const Modal = ({ id, active, children }) => {
    const [isActive, setIsActive] = useState(false);
    useEffect(() => {
        setIsActive(active);
    }, [active]);
    return (_jsx("div", { id: id, className: `modal ${isActive ? 'active' : ''}`, children: children }));
};
export const ModalContent = ({ className = '', children }) => {
    return _jsx("div", { className: `modal__content ${className}`, children: children });
};
export default Modal;
