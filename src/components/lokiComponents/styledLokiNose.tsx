import React from 'react';
import styled from "styled-components";
import LokiTwo from '../../assets/images/lokinose.png'

export const StyledLokiNose = () => {
    return (
       <StyledRectangle><LokiNose/></StyledRectangle>
    );
};

const LokiNose = styled.img`
  z-index: 1;
  width: 287px;
  height: 427px;
  flex-shrink: 0;
  box-shadow: 0 0 0 6px #686868;
  background: url(${LokiTwo}) lightgray 50% / cover no-repeat;
  transition: .3s;
 
`
const StyledRectangle = styled.div`
  z-index: 1;
  height: max-content;
  margin-top: 100px;
  padding: 24px;
  border-radius: 14px;
  background: #2C2C2C;
  align-items: center;
  box-shadow: 0 4px 15px 0 rgba(27, 27, 27, 1);

  @media (max-width: 768px) {
    display: none;
  }

`