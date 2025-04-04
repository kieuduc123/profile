// @ts-nocheck
import React, { useState, useRef } from 'react'
import "./gallery.scss"

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
interface GalleryProps {
  item: {
    thumbUrl: any;
  };
}

const Gallery: React.FC<GalleryProps> = ({ item }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

    return (
        <div className="gallery">
            <div className="gallery__main">
                <Swiper
                    style={{
                        "--swiper-navigation-color": "#fff",
                        "--swiper-pagination-color": "#fff",
                    }}
                    spaceBetween={10}
                    navigation={true}
                    lazy={true}
                    grabCursor={true}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper2"
                >
                    {item.thumbUrl.map((url, i) => (
                        <SwiperSlide key={i}>
                            <img src={url} loading="lazy" alt="description" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="gallery__sub">
                <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={3}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper"
                >
                    {item.thumbUrl.map((url, i) => (
                        <SwiperSlide key={i}>
                            <img src={url} loading="lazy"/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default Gallery