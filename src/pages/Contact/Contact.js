import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect, useRef } from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import './contact.scss';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { init, sendForm } from 'emailjs-com';
import * as yup from "yup";
import Button from '../../components/Button/Button';
import Modal, { ModalContent } from '../../components/Modal/Modal';
init("dmhozFSDKhmbKpaGR");
const schema = yup.object().shape({
    name: yup
        .string()
        .required("Name is required"),
    email: yup
        .string()
        .email('Must be a valid email')
        .required("Email is required")
        .max(50),
    subject: yup
        .string()
        .required("Subject is required")
        .max(50),
    message: yup
        .string()
        .required("Message is required")
        .max(255)
});
const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });
    const [contactNumber, setContactNumber] = useState("000000");
    // const [statusMessage, setStatusMessage] = useState("Message");
    const formRef = useRef(null);
    const statusRef = useRef(null);
    const generateContactNumber = () => {
        const numStr = "000000" + (Math.random() * 1000000 | 0);
        setContactNumber(numStr.substring(numStr.length - 6));
    };
    const handleClose1 = () => {
        document.querySelector('#modal-1').className = "modal";
    };
    const handleClose2 = () => {
        document.querySelector('#modal-2').className = "modal";
    };
    const onMessageSubmit = (data) => {
        generateContactNumber();
        sendForm('default_service', 'template_5prqtp4', '#contact-form')
            .then(function (response) {
            document.querySelector('#modal-1').className = "modal active";
            formRef.current.reset();
        }, function (error) {
            document.querySelector('#modal-2').className = "modal active";
        });
    };
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: "slide" }), _jsxs("div", { className: "section contact", "data-aos": "fade-up", children: [_jsx(PageHeader, { white: 'get in', yellow: 'touch', titleBg: 'contact' }), _jsx("div", { className: "container", children: _jsxs("div", { className: "row", children: [_jsx("div", { className: "col col-4", children: _jsxs("div", { className: "contact-info mb-3", children: [_jsx("h3", { children: "\u9023\u7D61\u5148" }), _jsx("p", { children: "\u6700\u5F8C\u307E\u3067\u3054\u89A7\u3044\u305F\u3060\u304D\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3057\u305F\u3002\u3053\u306E\u30B5\u30A4\u30C8\u3092\u901A\u3057\u3066\u3001\u79C1\u306E\u3053\u3068\u3092\u5C11\u3057\u3067\u3082\u77E5\u3063\u3066\u3044\u305F\u3060\u3051\u305F\u306E\u306A\u3089\u5B09\u3057\u3044\u3067\u3059\u3002\u3082\u3057\u3053\u306E\u30B5\u30A4\u30C8\u3084\u79C1\u306B\u3064\u3044\u3066\u4F55\u304B\u30B3\u30E1\u30F3\u30C8\u304C\u3042\u308A\u307E\u3057\u305F\u3089\u3001\u30D5\u30A9\u30FC\u30E0\u3092\u3054\u5229\u7528\u304F\u3060\u3055\u3044\u3002" }), _jsxs("ul", { className: "contact-info__list", children: [_jsxs("li", { children: [_jsx("div", { className: "icon", children: _jsx("i", { className: 'bx bxs-map' }) }), _jsx("span", { children: "\u73FE\u4F4F\u6240" }), "\u57FC\u7389\u770C\u8349\u52A0\u5E02"] }), _jsxs("li", { children: [_jsx("div", { className: "icon", children: _jsx("i", { className: 'bx bxs-envelope-open' }) }), _jsx("span", { children: "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9" }), "cxxx150@ccg.ac.jp"] }), _jsxs("li", { children: [_jsx("div", { className: "icon", children: _jsx("i", { className: 'bx bxs-phone-call' }) }), _jsx("span", { children: "\u96FB\u8A71\u756A\u53F7" }), _jsx("a", { href: "tel:07089592557", children: "07089592xxx" })] })] }), _jsxs("ul", { className: "social-list", children: [_jsx("li", { children: _jsx("a", { href: "https://www.facebook.com/loc.la.9693/", children: _jsx("i", { className: 'bx bxl-facebook' }) }) }), _jsx("li", { children: _jsx("a", { href: "https://github.com/LaPhuocLoc", children: _jsx("i", { className: 'bx bxl-github' }) }) })] })] }) }), _jsx("div", { className: "col col-8", children: _jsxs("form", { className: "contact-form", id: "contact-form", onSubmit: handleSubmit(onMessageSubmit), ref: formRef, children: [_jsxs("div", { className: "field contact-form__info", children: [_jsxs("div", { className: "contact-form__info-name", children: [_jsx("input", { ...register("name"), placeholder: "your name" }), errors.name &&
                                                                _jsx("span", { className: "error", children: errors.name?.message })] }), _jsxs("div", { className: "contact-form__info-email", children: [_jsx("input", { ...register("email"), placeholder: "your email" }), errors.email &&
                                                                _jsx("span", { className: "error", children: errors.email?.message })] })] }), _jsxs("div", { className: "field contact-form__subject", children: [_jsx("input", { ...register("subject"), placeholder: "your subject" }), errors.subject &&
                                                        _jsx("span", { className: "error", children: errors.subject?.message })] }), _jsxs("div", { className: "field contact-form__message", children: [_jsx("textarea", { ...register("message"), placeholder: "your message" }), errors.message &&
                                                        _jsx("span", { className: "error", children: errors.message?.message })] }), _jsx("div", { className: "field", children: _jsxs(Button, { type: "submit", children: [_jsx("span", { className: "btn-text", children: "send message" }), _jsx("span", { className: "btn-icon", children: _jsx("i", { className: 'bx bx-mail-send bx-tada' }) })] }) })] }) })] }) })] }), _jsx(Modal, { id: "modal-1", children: _jsxs(ModalContent, { className: "success", children: [_jsx("div", { className: "icon", children: _jsx("i", { className: 'bx bx-check' }) }), _jsx("h3", { children: "Success!" }), _jsx("p", { children: "We've sent a confirmation to your e-mail for verification." }), _jsx("button", { type: "button", className: "redo-btn", onClick: handleClose1, children: "Ok" }), _jsx("span", { className: "change", children: "-- Click to close the modal --" })] }) }), _jsx(Modal, { id: "modal-2", children: _jsxs(ModalContent, { className: "error", children: [_jsx("div", { className: "icon", children: _jsx("i", { className: 'bx bxs-dislike' }) }), _jsx("h3", { children: "Oh no!" }), _jsx("p", { children: "Oops! Something went wrong, you should try again." }), _jsx("button", { type: "button", className: "redo-btn", onClick: handleClose2, children: "Ok" }), _jsx("span", { className: "change", children: "-- Click to close the modal --" })] }) })] }));
};
export default Contact;
