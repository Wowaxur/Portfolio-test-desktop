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
  background: var(--bg-1,
  linear-gradient(101.56deg, rgba(44, 44, 44, 1) 0%, rgba(28, 28, 28, 1) 100%));
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
