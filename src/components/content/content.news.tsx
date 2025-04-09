'use client'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { Settings } from "react-slick";
import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button/Button";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Divider from '@mui/material/Divider';

const ContentNews = () => {
    const NextArrow = (props: any) => {
        return (
            <Button variant="outlined"
                onClick={props.onClick}
                sx={{
                    position: "absolute",
                    right: 0,
                    top: "50%",
                    zIndex: 2,
                    minWidth: 30,
                    width: 35,
                    transform: "translateY(-50%)",
                    borderRadius: '50%',
                }}
            >
                <ChevronRightIcon />
            </Button>
        )
    }

    const PrevArrow = (props: any) => {
        return (
            <Button variant="outlined" onClick={props.onClick}
                sx={{
                    position: "absolute",
                    top: "50%",
                    zIndex: 2,
                    minWidth: 30,
                    width: 35,
                    transform: "translateY(-50%)",
                    borderRadius: '50%',
                }}
            >
                <ChevronLeftIcon />
            </Button>
        )
    }

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
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <Box
            sx={{
                margin: "0 50px",
                ".abc": {
                    padding: "0 10px"
                },
                "h3": {
                    border: "1px solid #ccc",
                    padding: "20px",
                    height: "200px",
                }
            }}
        >
            <Typography variant="h6" component="div" color="primary" gutterBottom>
                News:
            </Typography>

            <Slider {...settings}>
                <div className="abc">
                    <h3>News 1</h3>
                </div>
                <div className="abc">
                    <h3>News 2</h3>
                </div>
                <div className="abc">
                    <h3>News 3</h3>
                </div>
                <div className="abc">
                    <h3>News 4</h3>
                </div>
                <div className="abc">
                    <h3>News 5</h3>
                </div>
                <div className="abc">
                    <h3>News 6</h3>
                </div>
            </Slider>

            <Box sx={{ display: 'flex', justifyContent: 'center', my: 3 }}>
                <Button variant="contained" href="#contained-buttons">
                    View more
                </Button>
            </Box>
            <Divider sx={{ mb: 4 }} />
        </Box>
    );
}

export default ContentNews;
