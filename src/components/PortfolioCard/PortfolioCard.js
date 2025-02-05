import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './portfolio-card.scss';
const PortfolioCard = ({ item, id }) => {
    const handleClick = () => {
        const detailElement = document.querySelector(`#portfolio-detail-${id}`);
        if (detailElement) {
            detailElement.classList.add('active');
        }
        document.body.classList.add('hide-scrolling');
    };
    return (_jsxs("div", { className: "portfolio-card", onClick: handleClick, children: [_jsx("div", { className: "bg-wrap", style: { backgroundImage: `url(${item.thumbUrl[0]})` } }), _jsx("h3", { children: item.title })] }));
};
export default PortfolioCard;
