import React from "react";
import Board1 from "../../../../img/board1.png"
import Board2 from "../../../../img/board2.png"
import Board3 from "../../../../img/board3.png"
import SwiperCore, {Navigation, Pagination, Controller, Thumbs} from "swiper";
import "swiper/swiper-bundle.css";
import {Swiper, SwiperSlide} from "swiper/react/swiper-react";
import {ImgContainer, SliderContainer, SliderLink} from "./styled";

SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);

const Slider: React.FC = () => {

    const images = [
        {
            url: Board1,
            alternativeText: "Sweden Photo One"
        },
        {
            url: Board2,
            alternativeText: "Sweden Photo Two"
        },
        {
            url: Board3,
            alternativeText: "Sweden Photo Three"
        }
    ];

    return (
        <SliderContainer>
            <Swiper
                id="main"
                navigation
                pagination
                spaceBetween={0}
                slidesPerView={1}
            >
                {images.map((photo, index) => (
                    <SwiperSlide key={index}>
                        <ImgContainer url={photo.url}>
                            <SliderLink>
                                dasdas
                            </SliderLink>
                        </ImgContainer>
                    </SwiperSlide>
                ))}
            </Swiper>
        </SliderContainer>
    )
}

export default Slider