import React from "react";
import BrandSprite from '../../assets/images/Brands-sprite.svg'
import styled from "styled-components";

type BrandsIconPropsType = {
    IconId: string
    width?: string
    height?: string
    viewBox?: string
    margin?: string
}

export const BrandsIcon = (props: BrandsIconPropsType) => {
    return (
        <BrIcon width={props.width || '120'} height={props.height || '120'} viewBox={props.viewBox || '0 0 120 120'}
             xmlns="http://www.w3.org/2000/svg" fill="none">
            <use xlinkHref={`${BrandSprite}#${props.IconId}`}/>
        </BrIcon>

    );
};
const BrIcon = styled.svg`
  border-radius: 15px;
`
