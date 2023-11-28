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
            <RightImg>
                <StyledLokiNose/>
            </RightImg>
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

`
const LeftImages = styled.div`
  display: flex;
  flex-direction: column;
  
  @media (max-width: 768px) {
    margin-right: 40%;
  }
`
const RightImg = styled.div`
  flex-wrap: nowrap;
`
const AboutWrapper = styled.div`
  width: 496px;
  
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
const AboutTitle = styled.h3`
  color: var(--text, #e4e4e4);
  text-align: center;
  display: flex;
  font-family: NEXT ART, sans-serif;
  font-size: calc( (100vw - 360px)/(1920 - 360) * (48 - 26) + 26px);
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
  overflow: scroll;
  @media (max-width: 768px) {
    font-size: 14px;
    width: auto;
    margin: 10px;
  }





`
