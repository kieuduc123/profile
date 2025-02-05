import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Gallery from '../Gallery/Gallery';
import './portfolio-detail.scss';
const PortfolioDetail = ({ item, id }) => {
    console.log(id);
    const handleClose = () => {
        const detailElement = document.querySelector(`#portfolio-detail-${id}`);
        if (detailElement) {
            detailElement.classList.remove('active');
        }
        document.body.classList.remove('hide-scrolling');
    };
    return (_jsx("div", { className: "portfolio-detail overlay", id: `portfolio-detail-${id}`, children: _jsx("div", { className: "portfolio-detail__inner", children: _jsxs("div", { className: "portfolio-detail__content", children: [_jsxs("div", { className: "portfolio-detail__content-left", children: [_jsx("h3", { children: _jsx("span", { children: item.title }) }), _jsx(Gallery, { item: item })] }), _jsxs("div", { className: "portfolio-detail__content-right", children: [_jsx("h3", { children: _jsx("span", { children: "\u8A73\u7D30" }) }), _jsx("p", { children: item.description }), _jsxs("ul", { children: [_jsxs("li", { children: [" Created - ", _jsx("span", { children: item.date }), " "] }), _jsxs("li", { children: [" Role - ", _jsx("span", { children: item.role }), " "] }), _jsxs("li", { children: [" Frontend - ", _jsx("span", { children: item.frontend.join(", ") }), " "] }), _jsxs("li", { children: [" Backend - ", _jsx("span", { children: item.backend }), " "] }), _jsxs("li", { children: [" Tags - ", _jsx("span", { style: { textTransform: "lowercase" }, children: item.tags.join(' / ') }), " "] }), _jsxs("li", { children: [" Source - ", _jsx("a", { href: item.source, target: "_blank", rel: "noopener noreferrer", children: item.source }), " "] }), _jsxs("li", { children: [" Demo - ", _jsx("a", { href: item.preview, target: "_blank", rel: "noopener noreferrer", children: item.preview }), " "] }), _jsxs("li", { children: [" Preview video - ", _jsx("a", { href: item.video, target: "_blank", rel: "noopener noreferrer", children: item.video }), " "] })] })] }), _jsx("div", { className: "close-btn", onClick: handleClose, children: _jsx("i", { className: 'bx bx-x' }) })] }) }) }));
};
export default PortfolioDetail;
