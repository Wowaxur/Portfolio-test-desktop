import styled from 'styled-components';
import BgImg from '../../assets/images/MainPhoto.webp'
import React from "react";

export const CardProject = () => {
    return (
<Container>
    <CardBox className={'CardBox'}>
        <CardImage/>
        <Title>Welcome </Title>
        <Paragraph>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.
        </Paragraph>
        <BtnBlock>
        <StyledBtn primary>See more</StyledBtn>
        <StyledBtn>Save</StyledBtn>
        </BtnBlock>
    </CardBox>

</Container>
);
}


const Container = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 21px;
  @media (max-width: 768px) {
    margin-top: 50px;

  }
`
const CardBox = styled.div
    ` 
      max-width: 300px;
      background: #FFF;
      box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.10);
      position: relative;
      border-radius: 15px;
      padding: 10px 10px 10px 10px;
      @media (max-width: 768px) {
        width: 200px;
        min-width: 200px;
      }
    `
const CardImage = styled.img
    ` 
      margin: 0 auto;
      background: lightgray 50% / cover no-repeat url(${BgImg});
      background-size: cover;
      width: 95%;
      min-height: 170px;
      flex-shrink: 1;
      @media (max-width: 768px) {
        width: 180px;
        height: 165px;
      }
    `
const Title = styled.h1`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
  margin: 20px;
`;
const Paragraph = styled.p`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 500;
  word-wrap: break-word;
  font-size: 12px;
  line-height: 20px;
  color: #ABB3BA;
  margin: 20px;
  
`
const BtnBlock = styled.div `
  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;

  }
`
const StyledBtn = styled.button<{ primary?: boolean; }>`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "#4E71FE" : "white"};
  color: ${props => props.primary ? "white" : "#4E71FE"};
  width: 86px;
  height: 30px;
  flex-shrink: 0;
  border-radius: 5px;
  border: 2px #4E71FE solid;
  font-size: 10px;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  line-height: 20px;
  word-wrap: break-word;
  margin-left: 12px;
  @media (max-width: 768px) {
    margin: 0 auto;
    max-width: 80px;

  }
`;

