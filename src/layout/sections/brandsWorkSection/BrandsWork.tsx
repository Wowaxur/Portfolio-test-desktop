import React from 'react';
import {FlexContainer} from "../../../components/FlexContainer";
import styled from "styled-components";
import {BrandsIcon} from "../../../components/brandsLogo/BrandsLogo";

export const BrandsWorksSector = () => {
    return (
        <FlexContainer align={'center'} justify={'center'} direction={'column'} bgc={'#FAFAFA'} borRad={'30px'} margin={'1% 5% 1% 5%'}>
            <BrandTitle>Brands I’ve Worked</BrandTitle>
            <BrandLillteText>
                Things that I can do for my clients. Just make your good trust I love to provide quality works.
            </BrandLillteText>
            <BrandLogoBlock>
                <BrandsIcon height={'78'} width={'78'} viewBox={'0 0 78 78'} IconId='1-1'/>
                <BrandsIcon height={'78'} width={'78'} viewBox={'0 0 78 78'} IconId='1-2'/>
                <BrandsIcon height={'78'} width={'78'} viewBox={'0 0 78 78'} IconId='1-3'/>
                <BrandsIcon height={'78'} width={'78'} viewBox={'0 0 78 78'} IconId='1-4'/>
                <BrandsIcon height={'78'} width={'78'} viewBox={'0 0 78 78'} IconId='1-5'/>
                <BrandsIcon height={'78'} width={'78'} viewBox={'0 0 78 78'} IconId='1-6'/>
                <BrandsIcon height={'78'} width={'78'} viewBox={'0 0 78 78'} IconId='2-1'/>
                <BrandsIcon height={'78'} width={'78'} viewBox={'0 0 78 78'} IconId='2-2'/>
                <BrandsIcon height={'84'} width={'71'} viewBox={'0 0 84 71'} IconId='2-3'/>
                <BrandsIcon height={'87'} width={'71'} viewBox={'0 0 87 71'} IconId='2-4'/>
                <BrandsIcon height={'78'} width={'78'} viewBox={'0 0 78 78'} IconId='2-5'/>
                <BrandsIcon height={'78'} width={'78'} viewBox={'0 0 78 78'} IconId='2-6'/>

            </BrandLogoBlock>
        </FlexContainer>
    );
};

const BrandTitle = styled.h3`
  z-index: 1;
  color: #2D2D2D;
  text-align: center;
  font-family: Raleway, sans-serif;
  font-size: 48px;
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
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 185.182%; /* 29.629px */
  letter-spacing: 0.32px;
  @media (max-width: 767px) {
  margin: 5px 5px;
  }
`
const BrandLogoBlock = styled.div`
  z-index: 1;
  width: 80%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: 50px;
  padding-bottom: 68px;

  svg {
    align-self: center;
    justify-self: center;
    transition: .3s;
    :hover{
      scale: 1.2;
    }
    svg:after{
      content: "";
      position: absolute;
      top: 0;
      right: -12px;
      height: 100%;
      width: 30px;
      background: linear-gradient(to bottom, #9b1f21 0%, #e2e2e2 100%);
    }
  }

  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 20px;


  } 
`
