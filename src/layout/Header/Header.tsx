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
  //position: fixed;
  //opacity: 0.8;
  display: flex;
  width: 100%;
  flex-wrap: nowrap;
  justify-content: center;
  text-align: center;
  padding: 0 15px;
  align-items: center;
  z-index: 2;
  a{
    text-decoration: none;
    color: var(--text, #e4e4e4);
    font: 300 18px "Arodora Pro", sans-serif;
  }
  
  ul {
    justify-content: space-around;
    position: relative;
    @media (max-width: 768px) {
      
    padding: 0 15px;
      }
   
  }
@media (max-width: 768px) {
  flex-wrap: wrap;
  position: relative;
  }
`
