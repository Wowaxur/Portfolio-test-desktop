import React from 'react';
import {AboutMeSection} from "../aboutme/AboutMeSection";
import styled from "styled-components";
import {MySkillSection} from "../skillsection/MySkillSection";
import {Carousel} from "../carousel/Carousel";
export const GreySector = () => {
    return (
        <StyledGreySector>
            <MySkillSection/>
            <AboutMeSection/>
            <Carousel/>
        </StyledGreySector>
    );
};

const StyledGreySector = styled.section`
  width: 98%;
  position: relative;
  flex-direction: column;
  border-radius: 35px;
  margin: 0 25px;
  background: var(--Gray2, linear-gradient(130deg, #414141 0%, #2D2D2D 100%));
  display: flex;
  @media (max-width: 768px) {
    margin: auto;
  }
  
`