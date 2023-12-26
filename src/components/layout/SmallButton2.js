import React from 'react'
import styled from 'styled-components';
const colors = ["#FF5D5D", "#F4CD00", "#00BA4B", "#4971FF", "#7800EF", "#F15AD0", "#FFFFFF", "#000000"];
const SmallButton = ({contents, index}) => {
  //example: return <SmallButton contents={"Hello"}></SmallButton>
  return (
    <SmallButtonContainer index={index}>
      <ContentBox index={index}>
        {contents}
      </ContentBox>
    </SmallButtonContainer>
  )
}

export default SmallButton;

const SmallButtonContainer = styled.div`
display: flex;
width: 9.5rem;
height: 3.25rem;
// padding: 10px 20px;
justify-content: center;
align-items: center;
gap: 10px;
border: 1px solid var(--Light-Brown, #866B5B);
border-radius: 20px;

color: ${props => colors[props.index]};
background: #FFF;
box-shadow: -1px -2px 6px 0px rgba(0, 0, 0, 0.15) inset;

@media (max-width: 350px) {
  width: 7rem;
}
@media (max-width: 300px) {
  width: 4rem;
}

`

const ContentBox = styled.div`
flex: 1 0 0;
text-shadow: ${props => props.index === 6 ? "-0.5px 0 black, 0 0.5px black, 0.5px 0 black, 0 -0.5px black" : "none"};
color: ${props => colors[props.index]};
text-align: center;
font-family: Spoqa Han Sans Neo;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
`
/* 버튼 내용 */

