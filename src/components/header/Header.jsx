import React, { useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import sliderImg1 from "../../assets/sliderImages/1.jpg";
import sliderImg2 from "../../assets/sliderImages/2.jpg";
import sliderImg3 from "../../assets/sliderImages/3.jpg";
import sliderImg4 from "../../assets/sliderImages/4.jpg";
import sliderImg5 from "../../assets/sliderImages/5.jpg";
import sliderImg6 from "../../assets/sliderImages/6.jpg";

export default function Header() {
    const settings = {
        centerMode: true,
        infinite: true,
        dots: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    };


        if (window.innerWidth < 800) {
            settings.centerMode = false;
        }

    return (
        // SLIDER COMPONENET
        <>
            <main className='header'>
                <Slider {...settings}>
                    <div className="slider">
                        <img src={sliderImg1} alt="slider image" />
                    </div>
                    <div className="slider">
                        <img src={sliderImg2} alt="slider image" />
                    </div>
                    <div className="slider">
                        <img src={sliderImg3} alt="slider image" />
                    </div>
                    <div className="slider">
                        <img src={sliderImg4} alt="slider image" />
                    </div>
                    <div className="slider">
                        <img src={sliderImg5} alt="slider image" />
                    </div>

                    <div className="slider">
                        <img src={sliderImg6} alt="slider image" />
                    </div>
                </Slider>
            </main>
        </>
    )
}
