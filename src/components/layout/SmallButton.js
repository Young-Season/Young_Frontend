import React from 'react'
import styled from 'styled-components';

const SmallButton = ({contents}) => {
  //example: return <SmallButton contents={"Hello"}></SmallButton>
  return (
    <SmallButtonContainer>
      <ContentBox>
        {contents}
      </ContentBox>
    </SmallButtonContainer>
  )
}

export default SmallButton;

const SmallButtonContainer = styled.div`
display: flex;
width: 152px;
height: 52px;
padding: 10px 20px;
justify-content: center;
align-items: center;
gap: 10px;

border-radius: 20px;
border: 1px solid var(--Light-Brown, #866B5B);
background: #FFF;
box-shadow: -1px -2px 6px 0px rgba(0, 0, 0, 0.15) inset;
`

const ContentBox = styled.div`
flex: 1 0 0;

color: #000;
text-align: center;
font-family: Spoqa Han Sans Neo;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
`