import styled, { css } from 'styled-components'

export const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #0052D4;
  color: #ffffff;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  font-weight: bold;

  ${props => props.primary && css`
    background: #0052D4;
    color: white;
    width: 1rem;
  `}

   ${props => props.width && css`
    width: ${props.width};
  `}

  ${props => props.height && css`
    height: ${props.height};
  `}
`;