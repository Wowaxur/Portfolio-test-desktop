import React from 'react';
import LokiOne from '../../assets/images/lokiface.png'
import styled from "styled-components";

export const StyledLokiFace = () => {
    return (
        <StyledRectangle><LokiFace/></StyledRectangle>
    );
};

const LokiFace = styled.img`
  margin: 29px;
  width: 270px;
  height: 281px;
  position: relative;
  box-shadow: 0px 0px 0px 6px rgba(104, 104, 104, 1);
  background: url(${LokiOne})  lightgray 50% / cover no-repeat;;
`
const StyledRectangle = styled.div`
  background: #2c2c2c;
  border-radius: 14px;
  position: relative;
  height: 339px;
  margin-bottom: 50%;
  @media (max-width: 768px) {
    display: none;
  }


`