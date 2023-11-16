import React from 'react';
import {Logo} from "./logo";
import {Nickname} from "../nickname";
import styled from "styled-components";


export const NicknamePluslogo = () => {
    return (
            <NicknameLogo>
            <Logo/>
            <Nickname/>

             </NicknameLogo>
    );
};

const NicknameLogo = styled.div`
display: inline-flex;
`