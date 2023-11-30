import AliceCarousel from "react-alice-carousel";
import 'react-alice-carousel/lib/alice-carousel.css';
import React from 'react';
import {PortfolioSection} from "../aboutme/PottfolioSliderSection";
import styled from "styled-components";
import '../../../components/styles/slyder.css'
interface PortfolioSectionProps {
    id?: string; // Указываем, что 'id' - это строка
}
const PortfolioItems = [
    <PortfolioSection key='1'/>,
    <PortfolioSection key='2'/>,
    <PortfolioSection key='3'/>,

];

export const Carousel = () => {

    return (
        /* <StyledAliceCarousel infinite keyboardNavigation items={PortfolioItems} mouseTracking />*/
        <PortfolioSlider id='Portfolio'>
            <PortfolioTitle>PORTFOLIO</PortfolioTitle>
            <AliceCarousel infinite keyboardNavigation items={PortfolioItems} mouseTracking></AliceCarousel>
        </PortfolioSlider>
    );

};
const PortfolioSlider = styled.section<PortfolioSectionProps>`
  z-index: 2;
  position: relative;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 21px;
  
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-items: center;
    max-width: 100%;
    height: auto;
    margin-top: 25px;
  }

`
const PortfolioTitle = styled.h2` 
  color: #FFF;
  text-align: center;
  font-family: 'NEXT ART',sans-serif;
  font-size: clamp(32px, calc(1vw + 1vh + .5vmin), 48px);
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media (max-width: 768px) {
    padding: 10px;
`
