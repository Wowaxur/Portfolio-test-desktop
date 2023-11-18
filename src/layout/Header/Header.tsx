import React from "react";
import styled from "styled-components";
import {Menu} from "../../components/menu/Menu";
import {NicknamePluslogo} from "../../components/logo/nicknamePluslogo";

export const Header = () => {
    return (

            <StyledHeader>
                <NicknamePluslogo/>
                <Menu/>
            </StyledHeader>
        );
    };

const StyledHeader = styled.header`
  background: linear-gradient(131deg, #414141 0%, #2D2D2D 100.52%);
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  text-align: center;
  a{
    text-decoration: none;
    color: var(--text, #e4e4e4);
    font: 300 18px "Arodora Pro", sans-serif;
  }
  @media (max-width: 767px) { 
  flex-wrap: wrap;
    justify-content: center;
    align-items: center;}
`
