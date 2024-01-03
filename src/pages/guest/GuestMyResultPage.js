import React, { useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
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
  TextAndPictureContainer,
} from "./GuestOthersResultPage";
import { hostNicknameState, usePostResponses } from "../../apis/guest";
import { useRecoilValue } from "recoil";
import { animalImageState, arrayState, userIdState } from "../../atom";

const GuestMyResultPage = () => {
  const homeButton = process.env.PUBLIC_URL + "/images/home.png";
  // const image = process.env.PUBLIC_URL + "/images/rabbit22.png";
  const image = useRecoilValue(animalImageState);

  const navigate = useNavigate();

  const { state } = useLocation();
  const myResultData = state.myResultData;
  const hostId = myResultData.hostId;
  const hostName = useRecoilValue(hostNicknameState);

  const seeOthersResult = () => {
    navigate("/guestOtherResult", {
      state: { hostName: hostName, hostId: hostId },
    });
  };

  const goToHostLogin = () => {
    navigate("/hostLogin");
  };
  //조사 설정1
  const set_prepositional_particle1 = (name) => {
    if (name) {
      //name의 마지막 음절의 유니코드(UTF-16)
      const charCode = name.charCodeAt(name.length - 1);

      //유니코드의 한글 범위 내에서 해당 코드의 받침 확인
      const consonantCode = (charCode - 44032) % 28;

      if (consonantCode === 0) {
        //0이면 받침 없음 -> 를
        return `${name}는`;
      }
      //1이상이면 받침 있음 -> 을
      return `${name}은`;
    }
  };
  //조사 설정2
  const set_prepositional_particle2 = (name) => {
    if (name) {
      //name의 마지막 음절의 유니코드(UTF-16)
      const charCode = name.charCodeAt(name.length - 1);

      //유니코드의 한글 범위 내에서 해당 코드의 받침 확인
      const consonantCode = (charCode - 44032) % 28;

      if (consonantCode === 0) {
        //0이면 받침 없음 -> 가
        return `${name}가`;
      }
      //1이상이면 받침 있음 -> 이
      return `${name}이`;
    }
  };

  return (
    <Wrapper>
      <Container>
        <Title>내가 생각하는 {set_prepositional_particle1(hostName)}?</Title>
        <WhiteBox style={{ padding: 0 }}>
          <Image src={image} />
        </WhiteBox>
        <DescriptionContainer>
          <DescriptionTitle>{myResultData.title || "제목"}</DescriptionTitle>
          <Description>
            {myResultData.first || "first"}
            <br />
            <br />
            {myResultData.now || "now"}
          </Description>
        </DescriptionContainer>

        <CuriousContainer>
          <CuriousText>
            다른 친구들이 본 {set_prepositional_particle2(hostName)} 궁금하다면?
          </CuriousText>
          <Button onClick={seeOthersResult}>
            <ButtonText>결과 보러 가기</ButtonText>
          </Button>
        </CuriousContainer>

        <CuriousContainer>
          <CuriousText>친구가 보는 내가 궁금하다면?</CuriousText>
          <Button onClick={goToHostLogin}>
            <TextAndPictureContainer>
              <ButtonText>물어보러 가기</ButtonText>
              <HomeButton src={homeButton} />
            </TextAndPictureContainer>
          </Button>
        </CuriousContainer>
      </Container>
      <Footer />
    </Wrapper>
  );
};

export default GuestMyResultPage;
