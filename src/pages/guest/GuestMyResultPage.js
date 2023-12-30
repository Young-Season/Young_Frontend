import React from "react";
import styled from "styled-components";
import Footer from "../../components/layout/Footer";
import {
  Wrapper,
  Container,
  Title,
  WhiteBox,
} from "../host/HostIndividualResultPage";

import {
  Image,
  DescriptionContainer,
  DescriptionTitle,
  Description,
  CuriousContainer,
  CuriousText,
  Button,
  ButtonText,
  HomeButton,
} from "./GuestOthersResultPage";

const GuestMyResultPage = () => {
  const homeButton = process.env.PUBLIC_URL + "/images/home.png";
  const image = process.env.PUBLIC_URL + "/images/rabbit22.png";

  return (
    <Wrapper>
      <Container>
        <Title>내가 생각하는 루씨는?</Title>
        <WhiteBox style={{ padding: 0 }}>
          <Image src={image} />
        </WhiteBox>
        <DescriptionContainer>
          <DescriptionTitle>처음엔 ㅇㅇㅇ만 지금은 ㅁㅁ친구!</DescriptionTitle>
          <Description>
            ~~~~~~~~~~~
            <br />
            ~~~~~~~~~~~
            <br />
            ~~~~~~~~~~~
            <br />
            <br />
            ~~~~~~~~~~~
            <br />
            ~~~~~~~~~~~
            <br />
            ~~~~~~~~~~~
            <br />
          </Description>
        </DescriptionContainer>

        <CuriousContainer>
          <CuriousText>다른 친구들이 본 루씨가 궁금하다면?</CuriousText>
          <Button>
            <ButtonText>결과 보러 가기</ButtonText>
          </Button>
        </CuriousContainer>

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

export default GuestMyResultPage;
