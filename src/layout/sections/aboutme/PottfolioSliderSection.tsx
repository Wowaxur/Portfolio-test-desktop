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
                    <SimpleTextPortfolio>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut orci eu elit consequat posuere ut sed elit. Nulla et tristique felis. Morbi quis orci non purus blandit fringilla. Etiam et mollis eros. Duis venenatis vulputate lacus, non tristique eros placerat vel. Nam nec magna lacus. Etiam euismod egestas mauris nec mollis. Phasellus efficitur et ex vel condimentum. Cras enim purus, tempor sed massa vel, accumsan bibendum magna. Nullam hendrerit cursus purus, sit amet viverra arcu gravida vel.</SimpleTextPortfolio>
                    <MoreText><a href={'#'}> More</a>
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
const PortfolioTitle = styled.span`

  color: #FFF;
  font-family: 'NEXT ART',sans-serif;
  font-size: calc( (100vw - 360px)/(1920 - 360) * (48 - 26) + 26px);
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media (max-width: 768px) {
    padding: 10px;
`
const PortfolioBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; // Добавьте это
  grid-auto-rows: auto;
  gap: 20px;
  border-radius: 29px;
  margin-top: 30px;
  background: var(--Gray2, linear-gradient(131deg, #414141 0%, #2D2D2D 100.52%));
  box-shadow: 0 4px 15px 0 rgba(27, 27, 27, 1);
  max-width: 970px;
  min-height: 600px;
  flex-shrink: 0;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 0 15px;
  }

`
const RectanglePortfolio = styled.div`
  background: #c4c4c4;
  max-width: 493px;
  max-height: 500px;
  flex-shrink: 0;
  border-radius: 29px;
  position: relative;
  top: 50px;
  left: 50px;
  @media (max-width: 768px) {
    align-self: center;
    margin-top: 30px;
    top: auto;
    left: auto;
    width: 90%;
    max-width: 450px;
  }
`
const PortfolioImg = styled.img`
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 29px;
  background:url(${Universe}) lightgray 0.283px 0px / 100% 100% no-repeat ;
  @media (max-width: 768px) {
    height: 300px;

  }
`
const PortfolioText =styled.div`
  position: relative;
  margin: 15%;
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
`
const TitlePortfolioText = styled.span`
  color: #ffffff;
  text-align: center;
  font-size: calc( (100vw - 360px)/(1920 - 360) * (28 - 18) + 18px);
  font-weight: 700;
  font-family: Arodora Pro,sans-serif;
  margin: 0 auto;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  } `
const SimpleTextPortfolio = styled.div`
  margin-top: 20px;
  padding: 0 10px 20px 10px;
  color: #ffffff;
  text-align: center;
  font-size: 18px;
  font-family: Arodora Pro,sans-serif;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    width: auto;
    padding: 0 5%;
    font-size: 14px;

  }
`
const MoreText = styled.div`
  color: #E2A100;
  font-family: Arodora Pro, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  transition: .5s;
  a{
    text-decoration: none;
    color: #E2A100;
  }
  :hover{
    transform: scale(1.5);
  }
  @media (max-width: 768px) {
    padding: 30px;

  }
`