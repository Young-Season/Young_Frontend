import React from "react";
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
} from "./GuestOthersResultPage";
import { usePostResponses } from "../../apis/guest";
import { useRecoilValue } from "recoil";
import { arrayState, userIdState } from "../../atom";

const GuestMyResultPage = () => {
  const homeButton = process.env.PUBLIC_URL + "/images/home.png";
  const image = process.env.PUBLIC_URL + "/images/rabbit22.png";

  const navigate = useNavigate();

  const { state } = useLocation();
  const myResultData = state.myResultData;
  const hostId = myResultData.hostId;
  const hostName = myResultData.hostName;
  const guestName = myResultData.guestName;

  const seeOthersResult = () => {
    navigate("/guestOtherResult", {
      state: { hostName: hostName, hostId: hostId },
    });
  };

  const goToHostLogin = () => {
    navigate("/hostLogin");
  };

  //게스트가 배열에 저장한 호스트의 이미지 결과 post
  // const postMyResult = async () => {
  //   const baseUrl = "https://young-season.o-r.kr";
  //   const url = `${baseUrl}/responses`;
  //   const data = useRecoilValue(arrayState);
  //   const postData = {
  //     hostId: hostId,
  //     guestName: guestName,
  //     animal: data[0],
  //     emoji: data[1],
  //     color: data[2],
  //     first: data[3],
  //     now: data[4],
  //   };
  //   try {
  //     const response = await axios.post(url, JSON.stringify(postData));
  //     return response;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   postMyResult()
  //     .then((res) => {
  //       if (res.data.status === "201") {
  //         console.log(res.data.message);
  //         setMyResult(res.data.data);
  //       } else if (res.data.status === "400") {
  //         console.log(res.data.message);
  //       } else if (res.data.status === "404") {
  //         console.log(res.data.message);
  //       }
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);

  return (
    <Wrapper>
      <Container>
        <Title>내가 생각하는 {hostName}는?</Title>
        <WhiteBox style={{ padding: 0 }}>
          <Image src={image} />
        </WhiteBox>
        <DescriptionContainer>
          <DescriptionTitle>{myResultData.title}</DescriptionTitle>
          <Description>
            {myResultData.first}
            <br />
            <br />
            {myResultData.now}
          </Description>
        </DescriptionContainer>

        <CuriousContainer>
          <CuriousText>다른 친구들이 본 {hostName}가 궁금하다면?</CuriousText>
          <Button onClick={seeOthersResult}>
            <ButtonText>결과 보러 가기</ButtonText>
          </Button>
        </CuriousContainer>

        <CuriousContainer>
          <CuriousText>친구가 보는 내가 궁금하다면?</CuriousText>
          <Button>
            <ButtonText onClick={goToHostLogin}>
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
