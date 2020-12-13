import styled, { css } from 'styled-components'

export const Card = styled.div`
display: inline-block;
padding: 1rem;
margin: 0.5rem;
width: 8rem;
border-radius: 4px;
text-align: center;

-webkit-box-shadow: 0px 0px 7px 3px rgba(0,0,0,0.16);
-moz-box-shadow: 0px 0px 7px 3px rgba(0,0,0,0.16);
box-shadow: 0px 0px 7px 3px rgba(0,0,0,0.16);
cursor: pointer;
${props => props.width && css`
    width: ${props.width};
`}
${props => props.noPointer && css`
    cursor: default;
`}

&:hover {
    -webkit-box-shadow: 0px 0px 10px 6px rgba(0,0,0,0.16);
    -moz-box-shadow: 0px 0px 10px 6px rgba(0,0,0,0.16);
    box-shadow: 0px 0px 10px 6px rgba(0,0,0,0.16);
}`