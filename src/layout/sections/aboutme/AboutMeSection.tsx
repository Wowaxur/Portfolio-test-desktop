import React from 'react';
import styled from "styled-components";
import {StyledLokiNose} from "../../../components/lokiComponents/styledLokiNose";
import {StyledLokiFace} from "../../../components/lokiComponents/styledLokiFace";
import {StyledLokiBody} from "../../../components/lokiComponents/styledLokiBody";
import {Elipses} from "../ellipses/Elipses";
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
  margin-top: 10%;
  align-items: flex-start;
  position: relative;
  justify-content: center;
  text-align: center;
  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    text-align: center;
  };
  img{
    border-radius: 5%;
  }
  img:hover {
    transform: scale(1.05);
    transition: .3s;
    
  }
    
`
const LeftImages = styled.div`
  display: flex;
  flex-direction: column;
  
`
const RightImg = styled.div`
  flex-wrap: nowrap;
`
const AboutWrapper = styled.div`
  width: 496px;
  height: 822px;
`
const AboutCenterBlock = styled.div`
  background: #2c2c2c;
  z-index: 1;
  border-radius: 14px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: sticky;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    max-width: 90%;
    height: auto;
    margin: 0 15px;
  }
`
const AboutTitle = styled.h3`
  color: var(--text, #e4e4e4);
  text-align: center;
  display: flex;
  font: 400 48px "NEXT ART", sans-serif;
  margin-bottom: 36px;
`
const AboutText = styled.div`
  color: #ffffff;
  text-align: left;
  font: 300 20px "Arodora Pro", sans-serif;
  width: 370px;
  @media (max-width: 768px) {
    font: 300 20px "Arodora Pro", sans-serif;
    @media (max-width: 768px) {
      width: auto;
      margin: 15px;
      text-align: left;
      
          }
    




`
