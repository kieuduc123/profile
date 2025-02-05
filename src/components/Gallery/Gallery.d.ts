import React from 'react';
import "./gallery.scss";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
interface GalleryProps {
    item: {
        thumbUrl: any;
    };
}
declare const Gallery: React.FC<GalleryProps>;
export default Gallery;
