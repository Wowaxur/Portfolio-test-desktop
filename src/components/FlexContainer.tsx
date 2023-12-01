import styled from "styled-components";
 type FlexContainerPropsType = {
     direction? : string
     justify?: string
     align?: string
     wrap?: string
     bgc?: string
     margin?: string
     borRad?: string
     padding?: string
}

export const FlexContainer = styled.div<FlexContainerPropsType>`
 display: flex;
  position: relative;
  border-radius: ${props => props.borRad || 'none'};
  background-color: ${props => props.bgc || 'none'};
  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justify || 'flex-start'};
  align-items: ${props => props.align || 'stretch'};
  flex-wrap: ${props => props.wrap|| 'nowrap'}; 
  margin: ${props => props.margin|| 'auto'}; 
  padding: ${props => props.padding|| '0'};
  z-index: 2;
  @media (max-width: 768px) { display: flex;
    flex-direction: column;
    

  }
`