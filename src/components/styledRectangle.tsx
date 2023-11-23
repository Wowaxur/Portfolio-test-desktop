import styled from "styled-components";

type StyledRectanglePropsType = {
    width?: string
    height?: string
}
export const Rectangle = styled.a<StyledRectanglePropsType>`
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
  :hover {
    transform: scale(1.2); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
  }
  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
    padding-top: 10px;
  }
\``

