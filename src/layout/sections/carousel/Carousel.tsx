import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import Slider from 'react-slick'
import {CardProject} from "../../cardProj/CardProject";

export const Carousel = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    };

    return (
        <SliderSlick>
            <Slider {...settings}>
                <CardProject/>
                <CardProject/>
                <CardProject/>
                <CardProject/>
                <CardProject/>
                <CardProject/>
            </Slider>
        </SliderSlick>
    );

};

const SliderSlick = styled.div`
  justify-content: center;
  margin: 15px 150px;
  @media (max-width: 768px) {
    margin: 0 auto;
    width: 85%;
  }
`