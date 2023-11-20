import React from 'react';
import styled from "styled-components";
import Universe from '../../../assets/images/imageUni.webp'
import {Icon} from "../../../components/icon/icon";
interface PortfolioSectionProps {
    id?: string; // Указываем, что 'id' - это строка
}

export const PortfolioSection = () => {
    return (
        <PortfolioSlider id='Portfolio'>
            <PortfolioTitle>PORTFOLIO</PortfolioTitle>

            <PortfolioBlock>
                <RectanglePortfolio>
                <PortfolioImg/>
                </RectanglePortfolio>
                <PortfolioText>
                    <TitlePortfolioText>Landing Ice-cream</TitlePortfolioText>
                    <SimpleTextPortfolio>Lorem ipsum dolor sit amet, conjecture adipiscing elit. Donec ut orci eu elit consequat posuere ut sed elit. Nulla et tristique felis. Morbi quis orci non purus blandit fringilla. Etiam et mollis eros. Duis venenatis vulputate lacus, non tristique eros placerat vel. Nam nec magna lacus. Etiam euismod egestas mauris nec mollis. Phasellus efficitur et ex vel condimentum. Cras enim purus, tempor sed massa vel, accumsan bibendum magna. Nullam hendrerit cursus purus, sit amet viverra arcu gravida vel.</SimpleTextPortfolio>
                    <MoreText href={'#'}> More
                    <Icon IconId={'secVector'} width={'36'} height={'36'} viewBox={'0 0 25 36'}/>
                    </MoreText>
                    </PortfolioText>
            </PortfolioBlock>
        </PortfolioSlider>
    );
};

const PortfolioSlider = styled.section<PortfolioSectionProps>`
  display: flex;
  z-index: 1;
  flex-direction: column;
  text-align: center;
  justify-items: center;
  align-items: center;
 margin-top: 186px;
  margin-bottom: 21px;
  
  @media (max-width: 768px) {  
    display: flex;
    flex-direction: column;
    justify-items: center;
    max-width: 100%;
    height: auto;
    margin-top: 55px;

  }
 
`
const PortfolioTitle = styled.span`
  
  color: #FFF;
  font-family: 'NEXT ART',sans-serif;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media (max-width: 768px) {
    padding: 10px;
`
const PortfolioBlock = styled.div`
  border-radius: 29px;
  margin-top: 30px;
  background: var(--Gray2, linear-gradient(131deg, #414141 0%, #2D2D2D 100.52%));
  box-shadow: 0 4px 15px 0 rgba(27, 27, 27, 0.28);
  width: 970px;
  height: 600px;
  flex-shrink: 0;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    max-width: 90%;
    height: auto;
    margin: 0 15px;
  }
  
`
const RectanglePortfolio = styled.div`
  background: #c4c4c4;
  border-radius: 29px;
  max-width: 493px;
  top: 50px;
  left: 50px;
  max-height: 500px;
  position: relative;
  display: flex;

  @media (max-width: 768px) {
    top: 0;
    left: 0;
      max-width: 90%;
    height: auto;
    margin: 35px;
  }
`
const PortfolioImg = styled.img`
  width: 100%;
  height: 500px;
  position: relative;
  border-radius: 29px;
  background:url(${Universe}) lightgray 0.283px 0px / 100% 100% no-repeat ;
  @media (max-width: 768px) {

    max-width: 100%;
    max-height: 100%;  }
`
const PortfolioText =styled.div`
  position: relative;
  margin: 82px 50px 0 63%;
  bottom: 80%;
  padding-bottom: 10px;
    a {
      text-decoration: none;
      span:hover{
        transform: scale(2);
      }
    }
  
  svg{
    stroke-width: 1px;
    stroke: #E2A100;
    width: 36px;
    height: 14px;
    rotate: 90deg;
    flex-shrink: 0;
    
  }
  @media (max-width: 768px) {
    margin: 5px auto;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    text-align: center;
    justify-items: center;
  }
  a:hover {
    transform: scale(1.2); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
  }
`
 const TitlePortfolioText = styled.span`
   color: #ffffff;
   text-align: center;
   font: 300 24px "Arodora Pro", sans-serif;
   left: 50px;
   position: relative;
   display: flex;
   align-items: center;
   justify-content: flex-start;
   @media (max-width: 768px) {
     display: flex;
     flex-direction: column;
     text-align: center;
   justify-content: center;
     align-items: center;
   left: 0;
   } `
const SimpleTextPortfolio = styled.div`
  margin-top: 20px;
  padding-bottom: 20px;
  color: #ffffff;
  text-align: center;
  font: 300 18px "Arodora Pro", sans-serif;
  position: relative;
  width: 296px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    width: auto;    

  }
`
const MoreText = styled.a`
  color: #E2A100;
  font-family: 'Arodora Pro', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  :hover{
    transform: scale(2);
  }
`