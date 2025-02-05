import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link, useLocation } from 'react-router-dom';
import './header.scss';
const nav = [
    {
        name: 'Home',
        icon: 'bx bxs-home',
        path: '/'
    },
    {
        name: 'Portfolio',
        icon: 'bx bxs-briefcase',
        path: '/portfolio'
    },
    {
        name: 'About',
        icon: 'bx bxs-user',
        path: '/about'
    },
    {
        name: 'Contact',
        icon: 'bx bxs-envelope-open',
        path: '/contact'
    },
    {
        name: 'Blog',
        icon: 'bx bxl-blogger',
        path: '/blog'
    },
];
const Header = () => {
    const { pathname } = useLocation();
    const active = nav.findIndex((e) => e.path === pathname);
    return (_jsx("ul", { className: "nav-list", children: nav.map((item, i) => (_jsx("li", { className: "nav-item", children: _jsxs(Link, { to: item.path, className: i === active ? 'active' : null, children: [_jsx("h2", { children: item.name }), _jsx("i", { className: item.icon })] }) }, i))) }));
};
export default Header;
