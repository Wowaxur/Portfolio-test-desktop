import React from 'react';
import styled from "styled-components";
import {StyledLokiNose} from "../../../components/lokiComponents/styledLokiNose";
import {StyledLokiFace} from "../../../components/lokiComponents/styledLokiFace";
import {StyledLokiBody} from "../../../components/lokiComponents/styledLokiBody";
interface AboutMeSectionProps {
    id?: string; // Указываем, что 'id' - это строка
}

export const AboutMeSection = () => {
    return (

        <AboutGroup id='AboutMeSection'>
            <LeftImages>
                <StyledLokiFace/>
                <StyledLokiBody/>
            </LeftImages>
            <AboutWrapper>
            <AboutCenterBlock>
                <AboutTitle>ABOUT ME</AboutTitle>
                <AboutText> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.""Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                </AboutText>
            </AboutCenterBlock>
            </AboutWrapper>
                <StyledLokiNose/>
        </AboutGroup>
    );
};


const AboutGroup = styled.section<AboutMeSectionProps>`
  display: flex;
  margin: 10% 10px 5% 10px;
  position: relative;
  justify-content: center;
  text-align: center;
  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    text-align: center;
  };
  img {
    border-radius: 5%;
  }
  &::before {
    z-index: 0;
    content: "";
    position: absolute;
    border-radius: 50%;
    border-style: solid;
    border-color: var(--text, #e4e4e4);
    border-width: 89px;
    width: 640px;
    height: 640px;
    // Adjust these values to position the ellipse correctly
    top: 0;
    left: 10%;
    transition: 1s;
  }
  @media (max-width: 768px) {
    &::before {
      top: 0;
      left: -550px;
      
    }  }
`
const LeftImages = styled.div`
  z-index: 2;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    margin-right: 40%;
  }
`
const AboutWrapper = styled.div`
  width: 496px;
  z-index: 1;
  @media (max-width: 768px) {
    height: auto;
  }
`
const AboutCenterBlock = styled.div`
  background: #2c2c2c;
  z-index: 1;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 25px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    max-width: 100%;
    height: auto;
    padding-bottom: 5px;
  }
  
`
const AboutTitle = styled.h2`
  color: var(--text, #e4e4e4);
  text-align: center;
  display: flex;
  font-family: NEXT ART, sans-serif;
  font-size: clamp(32px, calc(1vw + 1vh + .5vmin), 48px);
  font-weight: 400;
  margin-bottom: 36px;
  @media (max-width: 768px) {
    margin-bottom: 0;
  }
  
`
const AboutText = styled.div`
  position: relative;
  color: #ffffff;
  text-align: left;
  font-family: Arodora Pro, sans-serif;
  letter-spacing: 0.2px;
  line-height: normal;
  font-style: normal;
  font-size: 20px;
  font-weight: 300;
  width: 370px;
  padding: 10px;
  max-height: 700px;
  &::before {
    z-index: -1;
    content: "";
    position: absolute;
    border-radius: 50%;
    border-style: solid;
    border-color: var(--blu, #00c4f0);
    border-width: 55px;
    width: 486px;
    height: 486px;
    box-shadow: 0 4px 70px 0 rgba(0, 193, 236, 0.25);
    // Adjust these values to position the ellipse correctly
    top: 15%;
    left: 45%;
    transition: 1s;
  }
  &::after {
    z-index: -2;
    content: "";
    position: absolute;
    border-radius: 50%;
    border-style: solid;
    border-color: #e2a200;
    border-width: 34px;
    width: 356px;
    height: 356px;
    box-shadow: 0 4px 70px 0 rgba(226, 162, 0, 0.25);
    // Adjust these values to position the block correctly
    bottom: 80%;
    left: 50%;
    transition: 1s;
  }
  @media (max-width: 768px) {
    font-size: 14px;
    width: auto;
    margin: 10px;
    &::before {
      left:0;
      top: 180%;
    }
    &::after {
      left:0;
      bottom: 100%;    }
  }





`
