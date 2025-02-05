import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import "./about.scss";
import PageHeader from "../../components/PageHeader/PageHeader";
import Separator from "../../components/Separator/Separator";
import Skills from '../../components/Skills/Skills';
import Info from "../../components/Info/Info";
import Resume from '../../components/Resume/Resume';
const About = () => {
    window.scrollTo(0, 0);
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: "slide" }), _jsxs("div", { className: "section about", "data-aos": "fade-up", children: [_jsx(PageHeader, { white: "About", yellow: "Me", titleBg: "Resume" }), _jsxs("div", { className: "container", children: [_jsx(Info, {}), _jsx(Separator, {}), _jsx(Skills, {}), _jsx(Separator, {}), _jsx(Resume, {})] })] })] }));
};
export default About;
