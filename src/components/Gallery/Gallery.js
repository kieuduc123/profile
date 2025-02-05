import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// @ts-nocheck
import { useState } from 'react';
import "./gallery.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
const Gallery = ({ item }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (_jsxs("div", { className: "gallery", children: [_jsx("div", { className: "gallery__main", children: _jsx(Swiper, { style: {
                        "--swiper-navigation-color": "#fff",
                        "--swiper-pagination-color": "#fff",
                    }, spaceBetween: 10, navigation: true, lazy: true, grabCursor: true, thumbs: { swiper: thumbsSwiper }, modules: [FreeMode, Navigation, Thumbs], className: "mySwiper2", children: item.thumbUrl.map((url, i) => (_jsx(SwiperSlide, { children: _jsx("img", { src: url }) }, i))) }) }), _jsx("div", { className: "gallery__sub", children: _jsx(Swiper, { onSwiper: setThumbsSwiper, spaceBetween: 10, slidesPerView: 3, freeMode: true, watchSlidesProgress: true, modules: [FreeMode, Navigation, Thumbs], className: "mySwiper", children: item.thumbUrl.map((url, i) => (_jsx(SwiperSlide, { children: _jsx("img", { src: url }) }, i))) }) })] }));
};
export default Gallery;
