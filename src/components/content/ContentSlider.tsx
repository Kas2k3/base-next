'use client'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { Settings } from "react-slick";
import { Box } from "@mui/material";

const ContentSlider = () => {

    const settings: Settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        appendDots: dots => (
            <div
                style={{
                    borderRadius: "10px",
                    padding: "10px",
                    bottom: "35px",
                    position: "absolute",
                    width: "100%",
                }}
            >
                <ul style={{ margin: "0" }}> {dots} </ul>
            </div>
        ),
        customPaging: i => (
            <div
                style={{
                    width: "8px",
                    height: "8px",
                    background: "white",
                    borderRadius: "50%",
                    opacity: 0.7,
                    transition: "all 0.3s ease"
                }}
            />
        ),
    };
    const slides = [
        {
            id: 1,
            image: "https://s7ap1.scene7.com/is/image/TCSCOMprod/cloud-9?wid=1100&hei=619&dpr=off",
            alt: "Image description 1"
        },
        {
            id: 2,
            image: "https://gimasys.com/wp-content/uploads/2023/08/Cortex-Framework-scaled.jpg",
            alt: "Image description 2"
        },
        {
            id: 3,
            image: "https://pub-f8c0307ce82b4885975558b04e13a858.r2.dev/2023/12/omb-12.14.png",
            alt: "Image description 3"
        },
        {
            id: 4,
            image: "https://t3.ftcdn.net/jpg/01/18/44/92/360_F_118449287_drB1ohuz9Nn73Y901U4dCR1wN28R1CIU.jpg",
            alt: "Image description 4"
        }
    ];


    return (
        <Box
            sx={{
                "h3": {
                    margin: "0",
                    padding: "0",
                    border: "1px solid #ccc",
                    height: "300px",
                    width: "100%",

                }
            }}
        >
            <Slider {...settings}>
                {slides.map((slide) => (
                    <div key={slide.id} className="abc">
                        <Box
                            sx={{
                                position: 'relative',
                                width: '100%',
                                height: { xs: '300px', md: '500px' },
                                overflow: 'hidden',
                            }}
                        >
                            <Box
                                component="img"
                                src={slide.image}
                                alt={slide.alt}
                                sx={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                }}
                            />
                        </Box>
                    </div>
                ))}
            </Slider>
        </Box>
    );
}

export default ContentSlider;