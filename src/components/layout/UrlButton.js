import React from 'react'
import styled from 'styled-components';

const BigButton = ({textBox}) => {
  // example : <BigButton textBox={<Text>HI</Text>}></BigButton>
  return (
    <BigButtonContainer>{textBox}</BigButtonContainer>
  )
}

export default BigButton;

const BigButtonContainer = styled.textarea`
display: flex;
width: 17.5rem;
height: 3.25rem;
padding: 0.625rem 1.25rem;

justify-content: center;
align-items: center;
// gap: 10px;


border-radius: 20px;
border: 1px solid var(--Brown, #64422E);
background: var(--White, #FAFAFA);
box-shadow: -1px -2px 7.3px 0px rgba(0, 0, 0, 0.25) inset;

@media (max-width: 360px) {
  width: 15rem;
}
@media (max-width: 300px) {
  width: 13rem;
}
@media (max-width: 250px) {
  width: 11rem;
}

`