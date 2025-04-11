'use client'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { Settings } from "react-slick";
import { Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Divider, Typography } from "antd";

const ContentEvent = () => {
    const NextArrow = (props: any) => {
        return (
            <Button
                type="default"
                shape="circle"
                onClick={props.onClick}
                className="!absolute !right-0 top-1/2 -translate-y-1/2 z-10"
                icon={<RightOutlined />}
            />
        );
    };

    const PrevArrow = (props: any) => {
        return (
            <Button
                type="default"
                shape="circle"
                onClick={props.onClick}
                className="!absolute !left-0 top-1/2 -translate-y-1/2 z-10"
                icon={<LeftOutlined />}
            />
        );
    };

    const settings: Settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="mx-[50px]">
            <Typography.Title level={5} className="text-blue-600 mb-4">
                Events:
            </Typography.Title>

            <Slider {...settings}>
                {["Event 1", "Event 2", "Event 3", "Event 4", "Event 5", "Event 6"].map(
                    (item, index) => (
                        <div key={index} className="px-2">
                            <div className="border border-gray-300 p-5 h-[200px] flex items-center justify-center text-center">
                                <h3>{item}</h3>
                            </div>
                        </div>
                    )
                )}
            </Slider>

            <div className="flex justify-center my-6">
                <Button type="primary" href="#">
                    View more
                </Button>
            </div>

            <Divider className="mb-8" />
        </div>
    );
};

export default ContentEvent;
