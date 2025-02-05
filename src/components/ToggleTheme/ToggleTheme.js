import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import './toggletheme.scss';
const ToggleTheme = () => {
    const storedTheme = localStorage.getItem('theme') || 'dark';
    const [theme, setTheme] = useState(storedTheme);
    useEffect(() => {
        document.body.dataset.theme = theme;
        localStorage.setItem('theme', theme);
    }, [theme]);
    const onClickTheme = () => {
        setTheme((prevTheme) => {
            if (prevTheme === 'dark')
                return 'light';
            else {
                return 'dark';
            }
        });
        const themeToggleElement = document.querySelector('.toggle-theme');
        if (themeToggleElement) {
            themeToggleElement.classList.toggle('active');
        }
    };
    return (_jsxs("button", { className: "toggle-theme ", onClick: onClickTheme, children: [_jsx("i", { className: 'bx bxs-moon' }), _jsx("i", { className: 'bx bx-bulb' })] }));
};
export default ToggleTheme;
