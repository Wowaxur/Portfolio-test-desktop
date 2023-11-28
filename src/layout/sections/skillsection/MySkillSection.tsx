import React from 'react';
import styled from "styled-components";
import {SkillSvg} from "../../../components/icon/icon";
import {Rectangle} from "../../../components/styledRectangle";

export const MySkillSection = () => {

    return (
        <SkillSection>
            <SkillBox>
                <Rectangle width={'270px'} height={'270px'} href={'#'}>
                    <SkillSvg height={'155'} width={'270'} viewBox={'0 0 7 90 '} IconId='vector-ven'/>
                    <SkillText>Product Design</SkillText>
                </Rectangle>
            </SkillBox>
            <SkillBox>
                <Rectangle width={'270px'} height={'270px'} href={'#'}>
                    <SkillSvg height={'155'} width={'230'} viewBox={'0 0 10 90 '} IconId='display'/>
                    <SkillText>Frontend</SkillText>
                </Rectangle>
            </SkillBox>
            <SkillBox>
                <Rectangle width={'270px'} height={'270px'} href={'#'}>
                    <SkillSvg height={'155'} width={'230'} viewBox={'0 0 7 90 '} IconId='nav-icon'/>
                    <SkillText>Icon Design</SkillText>
                </Rectangle>
            </SkillBox>
            <SkillBox>
                <Rectangle width={'270px'} height={'270px'} href={'#'}>
                    <SkillSvg height={'155'} width={'230'} viewBox={'0 0 7 90 '} IconId='design_logo'/>
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
  margin-top: -100px;
  @media (max-width: 770px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 20%;
    margin-top: -30%;
   padding: 0 10%;
  }

`
const SkillText = styled.span`
  color: var(--text, #e4e4e4);
  font-size: calc( (100vw - 360px)/(1920 - 360) * (24 - 12) + 12px);
  font-family:"Arodora Pro", sans-serif ;
  font-weight: 500;
  position: relative;
  top: 30px;
  @media (max-width: 768px) {
    top: 0;


  }
`
const SkillBox = styled.div`
  display: flex;
  @media (max-width: 768px) {
    justify-content: center;
  }
`