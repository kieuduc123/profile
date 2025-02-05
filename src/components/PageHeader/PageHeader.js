import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './page-header.scss';
const PageHeader = (props) => {
    const { white, yellow, titleBg } = props;
    return (_jsxs("div", { className: "page-header", children: [_jsxs("h1", { children: [_jsx("span", { children: white }), " ", yellow] }), titleBg && _jsx("span", { children: titleBg })] }));
};
export default PageHeader;
