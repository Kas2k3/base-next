'use client'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { Settings } from "react-slick";

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
            <div className="absolute bottom-9 w-full px-4">
                <ul className="m-0 flex justify-center space-x-2"> {dots} </ul>
            </div>
        ),
        customPaging: i => (
            <div className="w-2 h-2 bg-white rounded-full opacity-70 transition-all duration-300" />
        )
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
        <div>
            <Slider {...settings}>
                {slides.map((slide) => (
                    <div key={slide.id}>
                        <div className="relative w-full h-[300px] md:h-[500px] overflow-hidden">
                            <img
                                src={slide.image}
                                alt={slide.alt}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ContentSlider;
