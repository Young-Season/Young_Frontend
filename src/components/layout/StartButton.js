import React from 'react'
import styled from 'styled-components';

const StartButton = () => {
  return (
    <StartButtonContainer>시작하기</StartButtonContainer>
  )
}

export default StartButton;

const StartButtonContainer = styled.div`
display: flex;
width: 120px;
height: 36px;
justify-content: center;
align-items: center;
gap: 10px;

border-radius: 16px;
background: var(--Brown, #64422E);

color: var(--White, #FAFAFA);
text-align: center;
font-family: Spoqa Han Sans Neo;
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: normal;
cursor: pointer;
`