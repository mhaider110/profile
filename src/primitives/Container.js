import styled, { css } from 'styled-components'

export const Container = styled.div`

  ${props => props.centerContent && css`
    display: flex;
    justify-content: center;
  `}

  ${props => props.spaceEvenly && css`
    display: flex;
    justify-content: space-evenly;
  `}
 

  ${props => props.marginTop && css`
     margin-top: ${props.marginTop};
  `}

  ${props => props.padding && css`
    padding: ${props.padding};
  `}

  ${props => props.width && css`
    width: ${props.width};
  `}

  ${props => props.height && css`
    height: ${props.height};
  `}

  ${props => props.innerShadow && css`
    box-shadow: 10px 10px 10px  rgba(0, 0, 0, 0.2) inset;
  `}

  ${props => props.leftBorder && css`
    border-left: 4px solid #0052D4;
  `}

  ${props => props.textCenter && css`
    text-align: center;
  `}

 
  
`;