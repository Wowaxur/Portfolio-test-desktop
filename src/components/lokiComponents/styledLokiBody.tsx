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
  box-shadow: 0 0 0 6px rgba(104, 104, 104, 1);
  background: url(${lokiBody}) lightgray 50% / cover no-repeat;;
  transition: .3s;
  :hover {
    transform: scale(1.17);}
  @media (max-width: 767px) {
    width: 150px;
    height: 150px;
    margin-top: 10%;

  }
`
const StyledRectangle = styled.div`
  margin-top: -36px;
  background: #2c2c2c;
  border-radius: 14px;
  width: 330px;
  height: 378px;
  position: relative;
  align-items: center;
  box-shadow: 0 4px 15px 0 rgba(27, 27, 27, 1);

  @media (max-width: 768px) {
    justify-content: left;
    width: 185px;
    height: 185px;
  }



`