import React from 'react';
import styled from "styled-components";

export const Elipses = () => {
    return (
        <ElipsesBlock>
            <WhiteElipse/>
            <RightElipses>
                <OrangeBlock/>
                <BlueElipse/>
            </RightElipses>
        </ElipsesBlock>
    );
};
const ElipsesBlock = styled.section`
  width: 100%;
  padding-top: 10%;
  box-sizing: border-box;
  display: flex;
  position: absolute;
  flex-wrap: wrap;
  flex-direction: row;
  z-index: 0;
  justify-content: center;
  @media (max-width: 768px) {
    display: block;
  }
`
const RightElipses = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-end;
  right: -10%;
 
`;
const WhiteElipse = styled.div`
  
  border-radius: 50%;
  border-style: solid;
  border-color: var(--text, #e4e4e4);
  border-width: 89px;
  width: 640px;
  height: 640px;
  box-shadow: 0 4px 70px 0 rgba(255, 255, 255, 0.25);
  position: relative;

`
const BlueElipse = styled.div`
  border-radius: 50%;
  border-style: solid;
  border-color: var(--blu, #00c4f0);
  border-width: 55px;
  width: 486px;
  height: 486px;
  box-shadow: 0px 4px 70px 0px rgba(0, 193, 236, 0.25);
  @media (max-width: 768px) {
    margin-right: 0%;
  }
`
const OrangeBlock = styled.div`
  border-radius: 50%;
  border-style: solid;
  border-color: #e2a200;
  border-width: 34px;
  width: 356px;
  height: 356px;
  box-shadow: 0px 4px 70px 0px rgba(226, 162, 0, 0.25);
  @media (max-width: 768px) {
    margin-right: 50%;
  }
`