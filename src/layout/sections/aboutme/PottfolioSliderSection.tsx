import React from 'react';
import styled from "styled-components";
import Universe from '../../../assets/images/imageUni.webp'
import Shoes from '../../../assets/images/imageShoes.png'
import ClearMix from '../../../assets/images/clearMix.png'
import Bakery from '../../../assets/images/BakeryLanding.png'
import 'react-alice-carousel/lib/alice-carousel.css';
const data = [
    {
        id: 1,
        title: 'Landing Ice-cream',
        text: 'when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        image:Universe,
        url: 'https://github.com/Wowaxur'
    },
    {
        id: 2,
        title: 'Shoe Store Ecommerce Landing Page',
        text: 'when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
        image:Shoes,
        url: 'https://github.com/Wowaxur'

    },
    {
        id: 3,
        title: 'ClearMix Landing page',
        text: 'when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
        image:ClearMix,
        url: 'https://github.com/Wowaxur'

    },
    {
        id: 4,
        title: 'Bakery Landing Page Design',
        text: 'when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
        image:Bakery,
        url: 'https://github.com/Wowaxur'


    },
    // другие элементы
];


interface PortfolioSectionProps {
    id: string; // Указываем, что 'id' - это строка
}
export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ id }) => {
    const itemId = Number(id); // Преобразуем id в число
    const item = data.find(item => item.id === itemId);

    if (!item) {
        return null; // или другая обработка ошибок
    }

    return (
        <PortfolioSlider id='Portfolio'>
            <PortfolioBlock key={item.id}>
                <RectanglePortfolio>
                    <PortfolioImg src={item.image} />
                </RectanglePortfolio>
                <PortfolioText>
                    <TitlePortfolioText>{item.title}</TitlePortfolioText>
                    <SimpleTextPortfolio>{item.text}</SimpleTextPortfolio>
                    <DetailsBtn>
                        <a href={item.url} target={'_blank'}> Details</a>
                    </DetailsBtn>
                </PortfolioText>
            </PortfolioBlock>
        </PortfolioSlider>
    );
};


const PortfolioSlider = styled.section<PortfolioSectionProps>`
  display: flex;
  z-index: 2;
  position: relative;
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

const PortfolioBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; // Добавьте это
  grid-auto-rows: auto;
  gap: 20px;
  border-radius: 29px;
  margin-top: 30px;
  background: var(--Gray2, linear-gradient(131deg, #414141 0%, #2D2D2D 100.52%));
  box-shadow: 0 4px 15px 0 rgba(27, 27, 27, 1);
  max-width: 765px;
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
  z-index: 1;
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
  z-index: 1;
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
  border-radius: 29px;
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: 100% 100%;
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
const TitlePortfolioText = styled.h3`
  color: #ffffff;
  text-align: center;
  font-size: clamp(18px, calc(1vw + 1vh + .5vmin), 28px);
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
  text-align: left;
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
const DetailsBtn = styled.button`
  color: #E2A100;
  background: transparent;
  font-family: Arodora Pro, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  width: 150px;
  height: 50px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  transition: .5s;
  border-radius: 10px;
  border: 1px solid #FCC028;
  a{display: inline-block;
    width: 100%;
    height: 100%;
    padding-top: 10px;
    text-decoration: none;
    color: #E2A100;
  }
  :hover{
    transform: scale(1.2);
    animation: pulse 2s infinite;
  }
  @media (max-width: 768px) {
    margin: 30px auto;
    padding: 12px;
  }
`