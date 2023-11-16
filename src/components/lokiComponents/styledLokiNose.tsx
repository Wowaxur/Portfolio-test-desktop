import React from 'react';
import styled from "styled-components";
import LokiTwo from '../../assets/images/lokinose.png'

export const StyledLokiNose = () => {
    return (
       <StyledRectangle><LokiNose/></StyledRectangle>
    );
};

const LokiNose = styled.img`
  width: 287px;
  height: 427px;
  margin: 29px;
  flex-shrink: 0;
  box-shadow: 0px 0px 0px 6px #686868;
  background: url(${LokiTwo}) lightgray 50% / cover no-repeat;

`
const StyledRectangle = styled.div`
  z-index: 0;
  margin-top: 100px;
  border-radius: 14px;
  background: #2C2C2C;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }

`