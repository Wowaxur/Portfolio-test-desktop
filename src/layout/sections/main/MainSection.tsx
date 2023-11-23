import React from 'react';
import styled from "styled-components";
import MyImg from '../../../assets/images/IMG_2305.webp'
import {FlexContainer} from "../../../components/FlexContainer";
import {Link} from "react-scroll";

interface MainSectionProps {
    id?: string; // Указываем, что 'id' - это строка
}

export const MainSection = () => {
    return (
        <StyledMain id="mainSection">
            <FlexContainer align={'center'} justify={'space-between'}>
                <TextTitle>
                    <Title>Hello</Title>
                    <NameTitle>I’m Vlad Vakula</NameTitle>
                    <SmallTitle>A Web Developer</SmallTitle>
                    <ContactMe><Link to="Contact" smooth={true} duration={500}>CONTACT ME</Link></ContactMe>
                </TextTitle>
                <PhotoWrapp>
                    <MyPhoto/>
                </PhotoWrapp>
            </FlexContainer>
        </StyledMain>
    );
};
const StyledMain = styled.section<MainSectionProps>`
  display: flex;
  justify-content: center;
  padding-bottom: 200px;
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

`
const PhotoWrapp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const MyPhoto = styled.img`
  position: relative;
  width: 524px;
  height: 544px;
  border-radius: 100%;
  border: 25px solid var(--blu, #00C4F0);
  box-shadow: 0 0 152px 0 rgba(0, 196, 240, 0.42);
  background: lightgray 50% / cover no-repeat url(${MyImg});
  object-fit: cover;
  transform: rotate(-9.81deg);
  margin-top: 20px;
  @media (max-width: 767px) {
    height: 344px;
    width: 324px;;
  }
`
const TextTitle = styled.div`
  margin: 25px;
  gap: 10px;
  display: flex;
  flex-direction: column;
  @media (max-width: 767px) {
    text-align: center;
    justify-content: center;
    align-items: center;
  }
`
export const Title = styled.span`
  color: var(--text, #E4E4E4);
  font-family: 'NEXT ART', sans-serif;
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: -12%;
  @media (max-width: 768px) {
    font-size: 32px;
  }
`
const NameTitle = styled.h2`
  color: var(--text, #E4E4E4);
  font-family: 'NEXT ART', sans-serif;
  font-size: 72px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  @media (max-width: 768px) {
    font-size: 52px;
  }
`
export const SmallTitle = styled.h1`
  color: #ABB3BA;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  margin-top: -12%;
  line-height: 20px;
  @media (max-width: 767px) {
    text-align: center;
  }
`
const ContactMe = styled.button`
  width: 200px;
  height: 47px;
  flex-shrink: 0;
  border-radius: 16px;
  color: #000;
  font-family: 'NEXT ART', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  background: var(--orange, linear-gradient(87deg, #E2A300 4.47%, #E29500 95.53%));
  box-shadow: 0 2px 13px 0 rgba(226, 158, 0, 0.48);
  transition: .7s;
  :hover {
    transform: scale(1.1); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
  }
`
