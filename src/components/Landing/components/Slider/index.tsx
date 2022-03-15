import React from "react";
import Box from "@mui/material/Box";
import Board1 from "../../../../img/board1.png"
import Board2 from "../../../../img/board2.png"
import Board3 from "../../../../img/board3.png"
import SwiperCore, {Navigation, Pagination, Controller, Thumbs} from "swiper";
import "swiper/swiper-bundle.css";
import {Swiper, SwiperSlide} from "swiper/react/swiper-react";
import useStyles from "./styles";
import Header from "../Header";

SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);

const Slider: React.FC = () => {
    const classes = useStyles();
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
        <Box className={classes.container}>
            <Swiper
                id="main"
                navigation
                pagination
                spaceBetween={0}
                slidesPerView={1}
                onInit={(swiper) => console.log("Swiper initialized!", swiper)}
                onSlideChange={(swiper) => {
                    console.log("Slide index changed to: ", swiper.activeIndex);
                }}
                onReachEnd={() => console.log("Swiper end reached")}
            >
                {images.map((photo, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={photo.url}
                            alt={photo.alternativeText}
                            style={{width: "100%"}}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    )
}

export default Slider