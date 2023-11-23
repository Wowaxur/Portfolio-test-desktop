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
        <svg width={props.width || '50'} height={props.height || '50'} viewBox={props.viewBox || '0 0 64 48'}
             xmlns="http://www.w3.org/2000/svg" fill="none">
            <use xlinkHref={`${BrandSprite}#${props.IconId}`}/>
        </svg>

    );
};