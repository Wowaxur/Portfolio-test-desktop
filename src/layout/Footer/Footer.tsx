import styled from "styled-components";
import React from "react";
import {NicknamePluslogo} from "../../components/logo/nicknamePluslogo";
import {Icon} from "../../components/icon/icon";

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
            <MobileFootWrapper>
            <NicKLogoBlock><NicknamePluslogo/><br/>
                <Copyright>Copyright © 2023</Copyright>
            </NicKLogoBlock>
            <EclipseOrange href={'#'}>
                <Icon IconId={'secVector'} width={'36'} height={'36'} viewBox={'0 0 36 36'}/>
            </EclipseOrange></MobileFootWrapper>
        </StyledFooter>
    );
};
const StyledFooter = styled.footer`
  box-sizing: border-box;
  display: flex;
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
    
  }
`
const FirstColumn = styled.div`
  display: inline-block;
  position: relative;
  justify-content: center;

  @media (max-width: 768px) {
    display: none;
    
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
  margin-top: 53px;
  @media (max-width: 768px) {
    margin: 30px 20px;
    width: 100%;
    display: inline;
    text-align: center;
  }
`
const Copyright = styled.small`

  color: var(--text, #E4E4E4);
  font-family: 'Arodora Pro', sans-serif;
  font-size: 18px;
  font-style: normal;
  line-height: normal;
`
const EclipseOrange = styled.a`
  background: var(--orange,
  linear-gradient(87.32deg,
  rgba(226, 163, 0, 1) 0%,
  rgba(226, 149, 0, 1) 100%));
  margin-top: 71px;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  transform: rotate(90deg) scale(1, 1);
  @media (max-width: 768px) {
    margin-top: 7px;
    display: none;

  }

  svg {
    width: 36px;
    height: 36px;
    position: absolute;
    top: 20%;
    left: 20%;
    rotate: 270deg;
  }
`
