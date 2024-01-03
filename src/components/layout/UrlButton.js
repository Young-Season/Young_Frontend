import React from 'react'
import styled from 'styled-components';

const UrlButton = ({onClick, text}) => {
  // example : <BigButton textBox={<Text>HI</Text>}></BigButton>
  return (
    <BigButtonContainer onClick={onClick}>
      {text}
      <Image src={process.env.PUBLIC_URL + '/images/CopyButton.png'}></Image>
    </BigButtonContainer>
  )
}

export default UrlButton;

const BigButtonContainer = styled.button`
display: flex;
width: 16.5rem;
height: 2.5rem;
padding: 0.625rem 1.25rem;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 10px;


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
font-family: 'Spoqa Han Sans Neo';
font-style: normal;
font-weight: 500;
font-size: 17px;
line-height: 15px;
/* identical to box height */

/* Gray */
color: #555555;
`

const Image = styled.img`;
margin: 0rem;
`

