import React from 'react';
import LokiOne from '../../assets/images/lokiface.png'
import styled from "styled-components";

export const StyledLokiFace = () => {
    return (
        <StyledRectangle><LokiFace/></StyledRectangle>
    );
};

const LokiFace = styled.img`
  z-index: 1;
  width: 280px;
  height: 280px;
  position: relative;
  border-radius: 5%;
  box-shadow: 0 0 0 6px rgba(104, 104, 104, 1);
  background-image:url(${LokiOne});
  background-size: cover;
  background-repeat: no-repeat;
  transition: .3s;
  

`
const StyledRectangle = styled.div`
  z-index: 1;
  background: #2c2c2c;
  border-radius: 14px;
  position: relative;
  height: 330px;
  margin-bottom: 50%;
  box-shadow: 0 4px 15px 0 rgba(27, 27, 27, 1);
  padding: 24px;
  @media (max-width: 768px) {
    display: none;
  }


`