import styled from "styled-components";
import React from "react";
import {NicknamePluslogo} from "../../components/logo/nicknamePluslogo";

export const Footer = () => {
    return (
        <StyledFooter>
            <MobileFootWrapper>
                <FirstColumn>
                    <FooterTitleBlock>
                        <li><a href={'#'}>Home</a></li>
                        <li><a href={'#'}>About me</a></li>
                        <li><a href={'#'}>Portfolio</a></li>
                        <li><a href={'#'}>Contact</a></li>
                    </FooterTitleBlock>
                </FirstColumn>
                <FooterTitleBlock>
                    <li><a href={'#'}>Contact:</a></li>
                    <li><a href={'#'}>Email: wowaxur@ya.ru</a></li>
                    <li><a href={'#'}>Inst: what_iz__love</a></li>
                    <li><a id={'number'} href={'#'}>Calls: +7 (999) - 123 - 45 -67</a></li>
                </FooterTitleBlock>
            </MobileFootWrapper>
                <NicKLogoBlock>
                    <MobileFootWrapper>
                        <NicknamePluslogo/>
                        <EclipseVector href={'#'}>
                            <svg width="60" height="60" viewBox="0 0 60 60" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <circle cx="30" cy="30" r="30" transform="rotate(90 30 30)"
                                        fill="url(#paint0_linear_93_26)"/>
                                <path d="M40.5 28.5L30 18L19.5 28.5" stroke="#E4E4E4" stroke-width="2"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"/>
                                <path d="M30 18L30 42" stroke="#E4E4E4" stroke-width="2" stroke-linecap="round"
                                      stroke-linejoin="round"/>
                                <defs>
                                    <linearGradient id="paint0_linear_93_26" x1="-1.90735e-06" y1="-1.90735e-06"
                                                    x2="57.0661"
                                                    y2="-2.6715" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#E2A300"/>
                                        <stop offset="1" stop-color="#E29500"/>
                                    </linearGradient>
                                </defs>
                            </svg>

                        </EclipseVector>
                    </MobileFootWrapper>
                    <Copyright>Copyright © 2023</Copyright>
                </NicKLogoBlock>
        </StyledFooter>
    );
};
const StyledFooter = styled.footer`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: center;
  gap: 50px;
  background: var(--Gray2, linear-gradient(131deg, #414141 0%, #2D2D2D 100.52%));
  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    gap: 5px;

  }
`
const MobileFootWrapper = styled.div`
  
  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    flex-direction: column;

  }
`
const FirstColumn = styled.div`
  display: inline-block;
  position: relative;
  justify-content: center;

  @media (max-width: 768px) {
    display: none;
  }

  li:hover {
    transform: scale(1.5); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
  }

`
const FooterTitleBlock = styled.ul`
  display: inline-block;
  List-style-type: none;
  flex-direction: column;
  font-family: 'Arodora Pro', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  @media (max-width: 768px) {
    font-size: 14px;
    margin-left: -40px;

  }

  a {
    color: var(--text, #E4E4E4);
    text-decoration: none;
  }

  li {
    margin-top: 15px;
  }


`
const NicKLogoBlock = styled.div`
  margin-top: 4%;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 10px auto;
    align-items: center;
    width: 100%;
    
  }
`
const Copyright = styled.small`

  color: var(--text, #E4E4E4);
  font-family: 'Arodora Pro', sans-serif;
  font-size: 18px;
  font-style: normal;
  line-height: normal;
`
const EclipseVector = styled.a`
  svg {
    transform: translate(10%, 25%);
    @media (max-width: 768px) {
      margin-bottom: 25px;
      
    }
    :hover {
      transform: scale(1.2);
    }
  }
`

