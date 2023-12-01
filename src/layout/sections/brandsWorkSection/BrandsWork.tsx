import React from 'react';
import {FlexContainer} from "../../../components/FlexContainer";
import styled from "styled-components";
import {BrandsIcon} from "../../../components/brandsLogo/BrandsLogo";

const iconIds = ['1-1', '1-2', '1-3', '1-4', '1-5', '1-6', '2-1', '2-2', '2-3', '2-4', '2-5', '2-6'];

export const BrandsWorksSector = () => {
    return (
        <FlexContainer align={'center'} justify={'center'} direction={'column'} bgc={'#FAFAFA'} borRad={'30px'} margin={'30px 5% 20px 5%'}>
            <BrandTitle>Brands I’ve Worked</BrandTitle>
            <BrandLillteText>
                Things that I can do for my clients. Just make your good trust I love to provide quality works.
            </BrandLillteText>
            <BrandLogoBlock>
                {iconIds.map((iconId, index) =>
                    <BrandsIcon key={index} height={'78'} width={'78'} viewBox={'0 0 87 87'} IconId={iconId} />
                )}
            </BrandLogoBlock>
        </FlexContainer>
    );
};

const BrandTitle = styled.h3`
  z-index: 1;
  color: #2D2D2D;
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
  padding-top: 30px;
  z-index: 1;
  width: 80%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: 50px;
  padding-bottom: 60px;
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