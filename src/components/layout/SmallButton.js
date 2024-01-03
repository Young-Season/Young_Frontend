import React from "react";
import styled from "styled-components";

const SmallButton = ({ contents, onClick }) => {
  //example: return <SmallButton contents={"Hello"}></SmallButton>
  return (
    <SmallButtonContainer onClick={onClick}>
      <ContentBox>{contents}</ContentBox>
    </SmallButtonContainer>
  );
};

export default SmallButton;

const SmallButtonContainer = styled.div`
  display: flex;
  width: 9.5rem;
  height: 3.25rem;
  padding: 0.625rem, 1.25rem;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  border-radius: 20px;
  border: 1px solid var(--Light-Brown, #866b5b);
  background: #fff;
  box-shadow: -1px -2px 6px 0px rgba(0, 0, 0, 0.15) inset;

  @media (max-width: 350px) {
    width: 7rem;
  }
  @media (max-width: 300px) {
    width: 4rem;
  }
`;

const ContentBox = styled.div`
  flex: 1 0 0;
  color: #000;
  text-align: center;
  font-family: Spoqa Han Sans Neo;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  height: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
/* 버튼 내용 */
