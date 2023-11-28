import React from 'react';
import IconSprite from '../../assets/images/Icon-srite.svg'
import styled from "styled-components";


type IconPropsType = {
    IconId: string
    width?: string
    height?: string
    viewBox?: string
    margin?: string
}

export const Icon = (props: IconPropsType) => {
    return (
        <svg width={props.width || '50'} height={props.height || '50'} viewBox={props.viewBox || '0 0 64 48'}
             xmlns="http://www.w3.org/2000/svg" fill="none">
            <use xlinkHref={`${IconSprite}#${props.IconId}`}/>
        </svg>

    );
};
type SkillSvgPropsType = {
    IconId: string
    width?: string
    height?: string
    viewBox?: string
    ratio?:string
}

export const SkillSvg = (props: SkillSvgPropsType) => {
    return (
        <SkillSvgStyled width={props.width || '50'} height={props.height || '50'} viewBox={props.viewBox || '-125 -125 300 300'} preserveAspectRatio={props.ratio ||"xMinYMin meet"}
             xmlns="http://www.w3.org/2000/svg"  fill="none">
            <use xlinkHref={`${IconSprite}#${props.IconId}`}/>
        </SkillSvgStyled>

    );
};
const SkillSvgStyled = styled.svg`
    padding: 51px 72px 0px 72px; 
   position: relative;
  @media (max-width: 768px) {
    padding: 10px;
    width: 50px;
    height: 50px;
  }
`