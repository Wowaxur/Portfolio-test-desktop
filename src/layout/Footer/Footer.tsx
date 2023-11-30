import styled from "styled-components";
import React from "react";
import {NicknamePluslogo} from "../../components/logo/nicknamePluslogo";
import {Menu} from "../../components/menu/Menu";
import {Link} from "react-scroll";


interface FooterSectionProps {
    id?: string; // Указываем, что 'id' - это строка
}


export const Footer = () => {
    return (
        <StyledFooter id='Contact'>
            <MobileFootWrapper>
                <FirstColumn>
                    <FooterTitleBlock>
                       <Menu/>
                    </FooterTitleBlock>
                </FirstColumn>
                <FooterTitleBlock>
                    <li><span>Contact:</span></li>
                    <li><span> Email: Wowaxur@ya.ru</span></li>
                    <li><span>Telegram: Wowaxur</span></li>
                    <li><span>Calls: +7 (961) - 584 - 29 -32</span></li>
                </FooterTitleBlock>
            </MobileFootWrapper>
            <NicKLogoBlock>
                <MobileFootWrapper>
                    <NicknamePluslogo/>
                    <EclipseVector>
                        <Link to="mainSection" smooth={true} duration={500}>
                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <circle cx="30" cy="30" r="30" fill="url(#paint0_linear_93_26)"/>
                            <path d="M40.5 28.5L30 18L19.5 28.5" stroke="#E4E4E4" strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"/>
                            <path d="M30 18L30 42" stroke="#E4E4E4" strokeWidth="2" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                            <defs>
                                <linearGradient id="paint0_linear_93_26" x1="-1.90735e-06" y1="-1.90735e-06"
                                                x2="57.0661"
                                                y2="-2.6715" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#E2A300"/>
                                    <stop offset="1" stopColor="#E29500"/>
                                </linearGradient>
                            </defs>
                        </svg>
                        </Link>
                    </EclipseVector>
                </MobileFootWrapper>
                <Copyright>Copyright © 2023</Copyright>
            </NicKLogoBlock>
        </StyledFooter>
    );
};
const StyledFooter = styled.footer<FooterSectionProps>`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: center;
  gap: 50px;
  background: var(--Gray2, linear-gradient(131deg, #414141 0%, #2D2D2D 100.52%));
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
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
  display: inline;
  position: relative;
  justify-content: center;
  @media (max-width: 768px) {
    display: none;
  }
  li {
    transition: .5s;

  }

  li:hover {
    transform: scale(1.5); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
  }

`
const FooterTitleBlock = styled.ul`
  display: inline-flex;
  List-style-type: none;
  flex-direction: column;
  font-family: 'Arodora Pro', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  ul {
    flex-direction: column;
  }
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
  span {
    color: var(--text, #E4E4E4);
  }

`
const NicKLogoBlock = styled.div`
  margin-top: 40px;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto 10px auto;
    align-items: center;
  }
`
const Copyright = styled.small`
  color: var(--text, #E4E4E4);
  font-family: 'Arodora Pro', sans-serif;
  font-size: 18px;
  font-style: normal;
  line-height: normal;
`
const EclipseVector = styled.span`
  position: absolute;
  margin-top: 25px; 
  @media (max-width: 768px) {  position: relative;
  }
  
  svg {
    transition: .5s;
    @media (max-width: 768px) {
      margin-bottom: 25px;
    }

    :hover {
      transform: scale(1.2);
    }
  }
`

