import React from 'react';
import lokiBody from '../../assets/images/lokiBody.webp'
import styled from "styled-components";

export const StyledLokiBody = () => {
    return (
        <StyledRectangle><LokiBody/></StyledRectangle>
    );
};

const LokiBody = styled.img`
  width: 270px;
  height: 320px;
  box-shadow: 0 0 0 6px rgba(104, 104, 104, 1);
  background: url(${lokiBody}) lightgray 50% / cover no-repeat;;
  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
`
const StyledRectangle = styled.div`
  z-index: 1;
  margin-top: -36px;
  background: #2c2c2c;
  border-radius: 14px;
  width: 330px;
  height: 380px;
  position: relative;
  box-shadow: 0 4px 15px 0 rgba(27, 27, 27, 1);
  padding: 24px;
  @media (max-width: 768px) {
    padding: 20px;
    width: 190px;
    height: 190px;
  }



`