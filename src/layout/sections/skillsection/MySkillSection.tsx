import React from 'react';
import styled from "styled-components";
import {SkillSvg} from "../../../components/icon/icon";
import {Rectangle} from "../../../components/styledRectangle";

export const MySkillSection = () => {

    return (
        <SkillSection>
            <SkillBox>
                <Rectangle width={'270px'} height={'270px'} href={'#'}>
                    <SkillSvg height={'107'} width={'108'} viewBox={'0 0 107 108 '} IconId='vector-ven'/>
                    <SkillText>Product Design</SkillText>
                </Rectangle>
            </SkillBox>
            <SkillBox>
                <Rectangle width={'270px'} height={'270px'} href={'#'}>
                    <SkillSvg height={'107'} width={'108'} viewBox={'0 0 75 59 '} IconId='display'/>
                    <SkillText>Frontend</SkillText>
                </Rectangle>
            </SkillBox>
            <SkillBox>
                <Rectangle width={'270px'} height={'270px'} href={'#'}>
                    <SkillSvg height={'107'} width={'108'} viewBox={'0 0 75 75 '} IconId='nav-icon'/>
                    <SkillText>Icon Design</SkillText>
                </Rectangle>
            </SkillBox>
            <SkillBox>
                <Rectangle width={'270px'} height={'270px'} href={'#'}>
                    <SkillSvg height={'107'} width={'108'} viewBox={'0 0 75 75 '} IconId='design_logo'/>
                    <SkillText>Logo Design</SkillText>
                </Rectangle>

            </SkillBox>
        </SkillSection>
    );
};

const SkillSection = styled.section`
  gap: 32px;
  justify-content: center;
  flex-wrap: wrap;
  display: flex;
  position: relative;
  margin-top: -10%;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: -30%;

  }

`
const SkillText = styled.span`
  color: var(--text, #e4e4e4);
  font: 300 24px "Arodora Pro", sans-serif;
  position: relative;
  top: 30px;
`
const SkillBox = styled.div`
  display: flex;
 
  
  @media (max-width: 768px) {
    margin-bottom: 32px;
    justify-content: center;
  }
`