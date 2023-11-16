import React from 'react';
import lokiBody from '../../assets/images/lokiBody.webp'
import styled from "styled-components";

export const StyledLokiBody = () => {
    return (
        <StyledRectangle><LokiBody/></StyledRectangle>
    );
};

const LokiBody = styled.img`
  margin-top: 29px;
  width: 272px;
  height: 320px;
  position: relative;
  box-shadow: 0px 0px 0px 6px rgba(104, 104, 104, 1);
  background: url(${lokiBody}) lightgray 50% / cover no-repeat;;
`
const StyledRectangle = styled.div`
  margin-top: -36px;
  background: #2c2c2c;
  border-radius: 14px;
  width: 330px;
  height: 378px;
  position: relative;
  align-items: center;
  @media (max-width: 768px) {
    margin: 15px;
  }



`