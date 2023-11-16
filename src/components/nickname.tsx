import React from "react";
import styled from "styled-components";


export const Nickname = () => {
    return (
        <MyNickname>
            WowAxur
        </MyNickname>
    );
};

const MyNickname = styled.span`
  margin: 20px;
  display: flex;
  color: #FFF;
  font: 400 18px "Nico Moji", sans-serif;  font-size: 18px;
  font-style: normal;
  line-height: normal;
`