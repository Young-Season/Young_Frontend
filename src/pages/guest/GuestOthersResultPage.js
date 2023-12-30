import React from "react";
import styled from "styled-components";
import Footer from "../../components/layout/Footer";

import {
  Wrapper,
  Container,
  Title,
  WhiteBox,
  ButtonContainer,
  GoToBackButton,
} from "../host/HostIndividualResultPage";

const HostTotalResultPage = () => {
  const image = process.env.PUBLIC_URL + "/images/rabbit22.png";
  const homeButton = process.env.PUBLIC_URL + "/images/home.png";
  const backButton = process.env.PUBLIC_URL + "/images/goToBackButton.png";

  return (
    <Wrapper>
      <Container>
        <ButtonContainer>
          <GoToBackButton src={backButton} />
        </ButtonContainer>
        <Title>친구들이 생각하는 루씨는?</Title>
        <WhiteBox style={{ padding: 0 }}>
          <Image src={image} />
        </WhiteBox>
        <DescriptionContainer>
          <DescriptionTitle>처음엔 귀엽지만 지금은 웃긴 친구!</DescriptionTitle>
          <Description>
            당신은 처음엔 수줍지만 귀여운 친구였어요.
            <br />
            마치 뭐랄까.. 왜 다들 수업에 갑자기 가버린걸까요?
            <br />
            흑흑 남겨지니 조금 슬프네요.
            <br />
            <br />
            하지만 이제는 웃기다는걸 알게 됐어요. <br />
            마치 나의 멋사 내의 웃음벨이랄까요? <br />
            당신 없는 멋사 상상할 수 없다 이말이야 ~ <br />
          </Description>
        </DescriptionContainer>
        <CuriousContainer>
          <CuriousText>친구가 보는 내가 궁금하다면?</CuriousText>
          <Button>
            <ButtonText>
              물어보러 가기 <HomeButton src={homeButton} />
            </ButtonText>
          </Button>
        </CuriousContainer>
      </Container>
      <Footer />
    </Wrapper>
  );
};

export default HostTotalResultPage;

export const Image = styled.img`
  width: 20rem;
  height: 20rem;
  flex-shrink: 0;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  width: 20rem;
  padding: 0rem 0rem;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  align-self: center;
`;

export const DescriptionTitle = styled.div`
  color: #000;
  text-align: center;
  font-family: Spoqa Han Sans Neo;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 200%; /* 2rem */
  align-self: center;
`;

export const Description = styled.div`
  color: var(--Gray, #555);
  text-align: center;
  font-family: Spoqa Han Sans Neo;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 1.3125rem */
`;

export const CuriousContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  width: 20rem;
`;

export const CuriousText = styled.div`
  color: #64422e;
  font-family: Spoqa Han Sans Neo;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  align-self: center;
`;

export const Button = styled.button`
  display: flex;
  width: 17.5rem;
  height: 3.75rem;
  padding: 0.625rem 1.25rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 1.25rem;
  border: 1px solid var(--Brown, #64422e);
  background: #fff;
  align-self: center;
  box-shadow: -1px -2px 7.3px 0px rgba(0, 0, 0, 0.25) inset;
  cursor: pointer;
`;

export const ButtonText = styled.div`
  color: #64422e;
  font-family: Spoqa Han Sans Neo;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const HomeButton = styled.img`
  width: 1.25rem;
  height: 1.25rem;
  align-self: center;
`;
