import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import './skills.scss';
import { html, css, sass, javascript, bootstrap, responsive, react, redux, git, axios } from '../../assets/skills/skills';
const skills = [
    {
        name: 'html',
        path: html
    },
    {
        name: 'css',
        path: css
    },
    {
        name: 'sass',
        path: sass
    },
    {
        name: 'javascript',
        path: javascript
    },
    // {
    //   name: 'java',
    //   path: java
    // },
    {
        name: 'bootstrap',
        path: bootstrap
    },
    {
        name: 'responsive web design',
        path: responsive
    },
    {
        name: 'react',
        path: react
    },
    {
        name: 'redux',
        path: redux
    },
    {
        name: 'git',
        path: git
    },
    {
        name: 'axios',
        path: axios
    },
];
const Skills = () => {
    return (_jsxs(_Fragment, { children: [_jsx("h3", { className: "skill-heading mb-3", children: "\u30B9\u30AD\u30EB\u30B7\u30FC\u30C8" }), _jsx("div", { className: "skill", children: skills.map((item, i) => (_jsxs("div", { className: "skill-item", "data-aos": "fade-up", children: [_jsx("div", { className: "skill-item__img mb-1", children: _jsx("div", { className: "skill-item__img-wrap", style: { backgroundImage: `url(${item.path})` } }) }), _jsx("div", { className: "skill-item__name", children: _jsx("h6", { children: item.name }) })] }, i))) })] }));
};
export default Skills;
