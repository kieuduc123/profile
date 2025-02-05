import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import PageHeader from '../../components/PageHeader/PageHeader';
import './blog.scss';
const Blog = () => {
    window.scrollTo(0, 0);
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: "slide" }), _jsx("div", { className: "section blog", "data-aos": "fade-up", children: _jsx(PageHeader, { white: 'my', yellow: 'blog', titleBg: 'posts' }) })] }));
};
export default Blog;
