import React from "react";
import { Container } from "./GuestMyResultPage";
import styled from "styled-components";
import Title from "../../components/layout/Title";
import WhiteBox from "../../components/layout/WhiteBox";
import Description from "../../components/layout/Description";
import TextAndButton from "../../components/result/TextAndButton";
import Footer from "../../components/layout/Footer";
import backButton from "../../../public/images/goToBackButton.png";
import homeButton from "../../../public/images/home.png";
import { useNavigate } from "react-router-dom";

const goBackPage = () => {};

const GuestOthersResultPage = () => {
  return (
    <div>
      <Container>
        <BackButtonContainer>
          <BackButton src={backButton} onClick={goBackPage} />
        </BackButtonContainer>
        <Title>앞에서 이름 넘겨받아야함</Title>
        <WhiteBox>이미지 넘겨받기</WhiteBox>
        <Description>앞에 설명 넘겨받기</Description>
        <TextAndButton
          text="친구가 보는 내가 궁금하다면?"
          buttonText={`물어보러 가기 ${homeButton}`}
        />
      </Container>
      <Footer />
    </div>
  );
};

export default GuestOthersResultPage;

const BackButtonContainer = styled.div`
  display: flex;
  width: 20rem;
  padding: 6.25rem 0rem 5rem 0rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.25rem;
`;

const BackButton = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
`;
