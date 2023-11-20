import React from 'react';
import styled from "styled-components";
import {Link} from "react-scroll";

export const Menu = () => {
    return (
        <StyledMenu>
            <ul>
                <li>
                    <Link to="mainSection" smooth={true} duration={500}>Home</Link>
                </li>
                <li><Link to="AboutMeSection" smooth={true} duration={500}>About me</Link></li>
                <li><Link to="Portfolio" smooth={true} duration={500}>Portfolio</Link></li>
                <li><Link to="Contact" smooth={true} duration={500}>Contact</Link></li>
            </ul>

        </StyledMenu>
    );
};
const StyledMenu = styled.nav`
  width: 100%;
  

  ul {
    
    align-self: center;
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
      gap: 15px;
    }
  }

  li {
    margin-right: 10px;
    transition: .5s;
    :hover {
      transform: scale(1.2); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
    }
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