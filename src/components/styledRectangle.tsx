import styled from "styled-components";

type StyledRectanglePropsType = {
    width?: string
    height?: string
}
export const Rectangle = styled.div<StyledRectanglePropsType>`
  width:  ${props => props.width || '270px'};
  height: ${props => props.height || '270px'};
  text-decoration: none;
  border-radius: 29px;
  text-align: center;
  background: #2A2A2A;
  border-color: transparent;
  border-style: solid;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.47);
  transition: 1.2s;
  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
    padding-top: 10px;
  }
\``

