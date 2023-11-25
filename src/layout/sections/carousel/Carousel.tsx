import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import Slider from 'react-slick'
import {CardProject} from "../../cardProj/CardProject";

export const Carousel = () => {
    let settings = {
        centerMode: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerMode: false,
                    adaptiveHeight: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
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
            </Slider>
        </SliderSlick>
    );

};

const SliderSlick = styled.div`
  padding: 0 5%;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  .slick-slide {
    align-items: center;
    transition: 0.7s ease;
    &.slick-center {
      .CardBox {
        background: linear-gradient(45deg, rgb(246, 146, 89), rgb(241, 105, 117));
        p {
          color: aliceblue;
        }
      }

    }
  }
}
.dots-style li[class="slick-active"] button {
  background: #eac8be;
}
@media (max-width: 768px) {
  padding: 0 10%;

`