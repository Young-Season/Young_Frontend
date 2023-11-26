import React from "react";
import styled from "styled-components";
import Footer from "../../components/layout/Footer";
import Title from "../../components/layout/Title";
import WhiteBox from "../../components/layout/WhiteBox";
import BigButton from "../../components/layout/BigButton";

const HostTotalResultPage = () => {
  return (
    <Wrapper>
      <ContentsContainer>
        <Title></Title>
        <WhiteBox></WhiteBox>
        <TextContainer></TextContainer>
        <BigButton></BigButton>
      </ContentsContainer>
      <Footer />
    </Wrapper>
  );
};

export default HostTotalResultPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  width: 23.4375rem;
`;

const ContentsContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 6.25rem 0rem 5rem 0rem;
  justify-content: center;
  align-items: flex-start;
  gap: 0.625rem;
`;

const TextContainer = styled.div``;
