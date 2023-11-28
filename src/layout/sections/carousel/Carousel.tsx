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
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: true,
        centerPadding: '0px',
        adaptiveHeight:false,
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
            <Slider className={'Slider'} {...settings}>
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
  margin: 10px auto;
  .slick-slide {
    align-items: center;
    transition: 1s ease;
    &.slick-center {
      .CardBox {
        transition: .5s;
        transform: scale(1.1);
        background: #CEB9C3;
        background: -moz-linear-gradient(top, #CEB9C3 0%, #C54B69 100%);
        background: -webkit-linear-gradient(top, #CEB9C3 0%, #C54B69 100%);
        background: linear-gradient(to bottom, #CEB9C3 0%, #C54B69 100%);
        p {
          color: aliceblue;
        }
      }

    }
  }
.dots-style li[class="slick-active"] button {
  background: #eac8be;
}
@media (max-width: 768px) {
  padding: 0 10%;
  }
`