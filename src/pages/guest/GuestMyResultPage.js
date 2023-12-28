import React from "react";
import styled from "styled-components";
import Title from "../../components/layout/Title";
import WhiteBox from "../../components/layout/WhiteBox";
import Description from "../../components/layout/Description";
import TextAndButton from "../../components/result/TextAndButton";
import homeButton from "../../../public/images/home.png";
import Footer from "../../components/layout/Footer";

const GuestMyResultPage = () => {
  return (
    <div>
      <Container>
        <Title>앞에서 이름 넘겨받아야함</Title>
        <WhiteBox>이미지 넘겨받기</WhiteBox>
        <Description>앞에 설명 넘겨받기</Description>
        <TextAndButton
          text={`다른 친구들이 본 ${hostName}가 궁금하다면?`}
          buttonText={"결과 보러 가기"}
        />
        <TextAndButton
          text="친구가 보는 내가 궁금하다면?"
          buttonText={`물어보러 가기 ${homeButton}`}
        />
      </Container>
      <Footer />
    </div>
  );
};

export default GuestMyResultPage;

export const Container = styled.div`
  display: flex;
  width: 23.4375rem;
  padding: 6.25rem 0rem 5rem 0rem;
  justify-content: center;
  align-items: flex-start;
  gap: 0.625rem;
`;
