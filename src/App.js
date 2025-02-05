import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment } from 'react';
import './assets/boxicons-2.1.2/css/boxicons.min.css';
import 'aos/dist/aos.css';
import * as AOS from "aos";
import Home from './pages/Home';
import ToggleTheme from './components/ToggleTheme';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import "./App.scss";
import './scss/_variables.scss';
import Header from './components/Header';
import * as React from 'react';
const App = () => {
    React.useEffect(() => {
        AOS.init({
            duration: 1200,
        });
    }, []);
    return (_jsxs(Fragment, { children: [_jsx(Header, {}), _jsx(ToggleTheme, {}), _jsx("div", { className: "main", children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/about", element: _jsx(About, {}) }), _jsx(Route, { path: "/portfolio", element: _jsx(Portfolio, {}) }), _jsx(Route, { path: "/contact", element: _jsx(Contact, {}) }), _jsx(Route, { path: "/blog", element: _jsx(Blog, {}) })] }) })] }));
};
export default App;
