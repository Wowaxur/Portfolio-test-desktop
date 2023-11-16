import React from 'react';
import {AboutMeSection} from "../aboutme/AboutMeSection";
import styled from "styled-components";
import {MySkillSection} from "../skillsection/MySkillSection";
import {Elipses} from "../ellipses/Elipses";
import {PortfolioSection} from "../aboutme/PottfolioSliderSection";
export const GreySector = () => {
    return (
        <StyledGreySector>
            <Elipses/>

            <MySkillSection/>
            <AboutMeSection/>
            <PortfolioSection/>

        </StyledGreySector>
    );
};

const StyledGreySector = styled.section`
  position: relative;
  flex-direction: column;
  background: var(--Gray2, linear-gradient(130deg, #414141 0%, #2D2D2D 100%));
  display: flex;
  @media (max-width: 767px) {

  }
`