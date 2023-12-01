import React from 'react';
import styled from "styled-components";
import {BrandsIcon} from "../../../components/brandsLogo/BrandsLogo";

const iconIds = ['1-1', '1-2', '1-3', '1-4', '1-5', '1-6', '2-1', '2-2', '2-3', '2-4', '2-5', '2-6'];

export const BrandsWorksSector = () => {
    return (
        <TechStack>
            <BrandTitle>My Tech Stack</BrandTitle>
            <BrandLillteText>
                Technologies I’ve been working with recently
            </BrandLillteText>
            <BrandLogoBlock>
                {iconIds.map((iconId, index) =>
                    <BrandsIcon
                        key={index}
                        height={iconId === '2-3' ? '70' : '100'}
                        width= '120'
                        viewBox={'0 0 120 130'}
                        IconId={iconId}
                    />
                )}
            </BrandLogoBlock>
        </TechStack>
    );
};

const TechStack = styled.section`
  position: relative;
  z-index: 2;
`

const BrandTitle = styled.h3`
  z-index: 1;
  color: #ffffff;
  text-align: center;
  font-family: Raleway, sans-serif;
  font-size: calc( (100vw - 360px)/(1920 - 360) * (48 - 26) + 26px);
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.48px;
  text-transform: capitalize;
  margin-bottom: 5px;
`

const BrandLillteText = styled.p`
  z-index: 1;
  color: #909090;
  text-align: center;
  font-family: Lato, sans-serif;
  font-size: calc( (100vw - 360px)/(1920 - 360) * (16 - 12) + 12px);
  font-style: normal;
  font-weight: 400;
  line-height: 185%; /* 29.629px */
  letter-spacing: 0.3px;
  padding: 0 20px;
  @media (max-width: 768px) {
    margin: 5px 5px;
  }
`

const BrandLogoBlock = styled.div`
  padding: 30px;
  z-index: 2;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: 30px;
  grid-column-gap: 10px;
  svg {
    align-self: center;
    justify-self: center;
    }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 20px;
    padding: 10px 0;
  }
`
