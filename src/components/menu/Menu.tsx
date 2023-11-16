import React from 'react';
import styled from "styled-components";

export const Menu = () => {
    return (
        <StyledMenu>
            <ul>
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">About me</a>
                </li>
                <li>
                    <a href="">Portfolio</a>
                </li>
                <li>
                    <a href="">Contact</a>
                </li>
            </ul>

        </StyledMenu>
    );
};
const StyledMenu = styled.nav`
  width: 100%;
  margin-right: 200px;

  ul {
    align-self: flex-end;
    justify-content: space-between;
    List-style-type: none;
    display: flex;
    color: var(--text, #E4E4E4);
    font-family: 'Arodora Pro', sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    @media (max-width: 767px) {
    justify-content: center;
      margin-left: 50%;
      gap: 15px;
    }
  }

  li {
    margin-right: 10px;
  }

  @media (max-width: 767px) {
    flex-wrap: wrap;
    align-self: flex-end;
    flex-direction: column;
    justify-content: center;
    max-width: 767px;
    width: 100%;

  }
`