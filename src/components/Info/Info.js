import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./info.scss";
import Button from "../Button/Button";
const info = {
    firstName: "La (ら)",
    lastName: "Duc (ふぉっくろっく)",
    birthday: "22歳",
    sex: "男",
    nation: "ベトナム",
    address: "埼玉県草加市",
    phone: "07089592xxx",
    email: "cxxx150@ccg.ac.jp",
    facebook: "facebook.com/loc.la.9693",
    git: "https://github.com/LaPhuocLoc",
    language: "ベトナム語、日本語",
};
const card = [
    {
        title: "7",
        text: "個人",
        span: "プロジェクト",
    },
    {
        title: "1",
        text: "プログラミング",
        span: "経験年数",
    },
    {
        title: "1",
        text: "幸せな",
        span: "顧客",
    },
    {
        title: "1",
        text: "アワード",
        span: "受賞",
    },
];
const Info = () => {
    return (_jsxs("div", { className: "info", children: [_jsxs("div", { className: "info__basic", "data-aos": "fade-up-right", children: [_jsx("h3", { children: "\u57FA\u672C\u60C5\u5831" }), _jsxs("ul", { className: "info-list", children: [_jsxs("li", { children: [_jsx("span", { children: "\u59D3: " }), info.firstName] }), _jsxs("li", { children: [_jsx("span", { children: "\u540D: " }), info.lastName] }), _jsxs("li", { children: [_jsx("span", { children: "\u751F\u5E74\u6708\u65E5: " }), info.birthday] }), _jsxs("li", { children: [_jsx("span", { children: "\u6027\u5225: " }), info.sex] }), _jsxs("li", { children: [_jsx("span", { children: "\u56FD\u7C4D: " }), info.nation] }), _jsxs("li", { children: [_jsx("span", { children: "\u73FE\u4F4F\u6240: " }), info.address] }), _jsxs("li", { children: [_jsx("span", { children: "\u96FB\u8A71\u756A\u53F7: " }), info.phone] }), _jsxs("li", { children: [_jsx("span", { children: "Facebook: " }), info.facebook] }), _jsxs("li", { children: [_jsx("span", { children: "\u8A00\u8A9E: " }), info.language] }), _jsxs("li", { children: [_jsx("span", { children: "\u30E1\u30FC\u30EB: " }), info.email] })] }), _jsx(Button, { children: _jsxs("a", { href: "https://drive.google.com/file/d/14BNcLxvB7DAkVSYYgVbuBf9fup7E4eNB", rel: "noopener", download: true, children: [_jsx("span", { className: "btn-text", children: "\u5C65\u6B74\u66F8\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9" }), _jsx("span", { className: "btn-icon", children: _jsx("i", { className: "bx bxs-download" }) })] }) })] }), _jsx("div", { className: "info__more", "data-aos": "fade-up-left", children: card.map((item, i) => (_jsxs("div", { className: "info__more__card", children: [_jsxs("h3", { children: [item.title, _jsx("i", { className: "bx bx-plus bx-rotate-90" })] }), _jsxs("p", { children: [item.text, " ", _jsx("span", { children: item.span })] })] }, i))) })] }));
};
export default Info;
