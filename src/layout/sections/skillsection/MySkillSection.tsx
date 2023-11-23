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
  font: 300 24px "Arodora Pro", sans-serif;
  position: relative;
  top: 30px;
  @media (max-width: 768px) {
    top: 0;
    font: 300 10px "Arodora Pro", sans-serif;


  }
`
const SkillBox = styled.div`
  display: flex;
  @media (max-width: 768px) {
    justify-content: center;
  }
`