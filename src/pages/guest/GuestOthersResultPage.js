import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../../components/layout/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Wrapper,
  Container,
  Title,
  WhiteBox,
  ButtonContainer,
  GoToBackButton,
} from "../host/HostIndividualResultPage";
import { getOtherGuestsResult } from "../../apis/guest";
import { useRecoilValue } from "recoil";
import { userIdState } from "../../atom";

const HostTotalResultPage = () => {
  // const image = process.env.PUBLIC_URL + "/images/rabbit22.png";
  const homeButton = process.env.PUBLIC_URL + "/images/home.png";
  const backButton = process.env.PUBLIC_URL + "/images/goToBackButton.png";

  const navigate = useNavigate();

  const { state } = useLocation();
  const hostName = state.hostName;
  const hostId = state.hostId;

  const goToHostLogin = () => {
    navigate("/hostLogin");
  };

  const [otherGuestsData, setOtherGuestsData] = useState({});

  const convertToImageSource = (imageState) => {
    if (imageState) {
      console.log(imageState);
      return `https://young-season.o-r.kr/public/images/${imageState}.png`;
    } else {
      // imageState가 유효한 값이 아닌 경우에 대한 처리
      console.log("imageState에 값이 없음");
      return;
    }
  };

  // useEffect(() => {
  //   getOtherGuestsResult(hostId)
  //     .then((res) => {
  //       if (res.data.status === "200") {
  //         console.log(res.data.message);
  //         setOtherGuestsData(res.data.data);
  //       } else if (res.data.status === "400") {
  //         console.log(res.data.message);
  //       }
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getOtherGuestsResult(hostId);

        if (res.data.status === "200") {
          console.log(res.data.message);
          setOtherGuestsData(res.data.data);
        } else if (res.data.status === "400") {
          console.log(res.data.message);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
    //조사 설정
    const set_prepositional_particle = (name)=>{
      if(name){
        //name의 마지막 음절의 유니코드(UTF-16) 
        const charCode = name.charCodeAt(name.length - 1);
            
        //유니코드의 한글 범위 내에서 해당 코드의 받침 확인
        const consonantCode = (charCode - 44032) % 28;
    
        if(consonantCode === 0){
            //0이면 받침 없음 -> 를
            return `${name}는`;
        }
        //1이상이면 받침 있음 -> 을
        return `${name}은`;
      }
    }

  return (
    <Wrapper>
      <Container>
        <ButtonContainer>
          <GoToBackButton src={backButton} onClick={() => navigate(-1)} />
        </ButtonContainer>
        <Title>다른 친구들이 생각하는 {set_prepositional_particle(hostName)}?</Title>
        <WhiteBox style={{ padding: 0 }}>
          <Image src={convertToImageSource(otherGuestsData.image)} />
        </WhiteBox>
        <DescriptionContainer>
          <DescriptionTitle>{otherGuestsData.title}</DescriptionTitle>
          <Description>
            {otherGuestsData.first}
            <br />
            <br />
            {otherGuestsData.now}
          </Description>
        </DescriptionContainer>
        <CuriousContainer>
          <CuriousText>친구가 보는 내가 궁금하다면?</CuriousText>
          <Button onClick={goToHostLogin}>
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
  margin-top: 2rem;
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
  margin-top: 3.5rem;
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
  margin-top: 1.5rem;
  margin-bottom: 1rem;
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
