import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../../components/layout/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Wrapper,
  Container,
  Title,
  ButtonContainer,
  GoToBackButton,
  ContentsText,
} from "./HostIndividualResultPage";
import { useRecoilValue } from "recoil";
import { nicknameAtom, userIdState } from "../../atom";
import { getHostStats } from "../../apis/host";

const HostStatisticsPage2 = () => {
  const backButton = process.env.PUBLIC_URL + "/images/goToBackButton.png";
  const navigate = useNavigate();
  const { state } = useLocation();
  const token = state.token;
  const hostId = state.hostId;
  const hostNickname = useRecoilValue(nicknameAtom);
  const animals = ['강아지', '고양이', '토끼', '여우', '곰','다람쥐'];
  const colors = [ "빨간색", "노란색","초록색","파란색","보라색","분홍색","흰색","검은색",];
  const emojis = [
    "emoji1",
    "emoji2",
    "emoji3",
    "emoji4",
    "emoji5",
    "emoji6",
    "emoji7",
    "emoji8",
  ];
  const firstImpressions = [
    "밝은",
    "다정한",
    "웃긴",
    "어른스러운",
    "섬세한",
    "시크한",
    "투명한",
    "줏대있는",
  ];
  const presentImpressions = [
    "밝은",
    "다정한",
    "웃긴",
    "어른스러운",
    "섬세한",
    "시크한",
    "투명한",
    "줏대있는",
  ];
  const [animalData, setAnimalData] = useState([]);
  const [mostAnimalData, setMostAnimalData] = useState();
  const [emojiData, setEmojiData] = useState([]);
  const [colorData, setColorData] = useState([]);
  const [firstImpressionData, setFirstImpressionData] = useState([]);
  const [presentImpressionData, setPresentImpressionData] = useState([]);
    useEffect(() => {
      console.log(token);
    console.log(hostId);
    getHostStats(token, hostId)
      .then((res) => {
        console.log(res.status);
        console.log("res.data.data:", res.data.data);
        console.log("res.data.data.animal:", res.data.data.animal);
        console.log("res.data.data.animal:", res.data.data.animal[0]);
        console.log("res.data.data.animal:", res.data.data.animal[0].animal);
        if (res.status === "200") {    
          const animalData = res.data.data.animal.map(item => {
            return {
              name: animals[item.animal],
              percent: item.percent
            };
          });
          setAnimalData(animalData);   
        } else if (res.status === "204") {
          console.log(res.status);
        } else if (res.status === "400") {
          console.log(res.status);
        } else if (res.status === "403") {
          console.log(res.status);
        }
      })
      .catch((error) => {
        console.error(error);
      });
    }, [animalData, emojiData]);
    useEffect(() => {
      console.log("animaldata:", animalData);
    }, [animalData]);

  return (
    <Wrapper>
      <Container>
        <ButtonContainer>
          <GoToBackButton src={backButton} onClick={() => navigate(-1)} />
        </ButtonContainer>
        <Title>질문별 통계</Title>
        <WhiteBox>
          <StatisticContainer>     
            <ContentsText>{hostNickname}이는 {animalData}상이야!</ContentsText>
            <AnswerContainer>            
            {animalData.map((item, index) => (
    <div key={index}>
      <TextBox>{item.name}</TextBox>
      <PercentageBarContainer>
        <PercentageBar width={item.percent} />
      </PercentageBarContainer>
      <PercentageTextBox>
        {item.percent}%
      </PercentageTextBox>
    </div>
  ))}
            </AnswerContainer>
          </StatisticContainer> 
          
        </WhiteBox>
        <InformationBox>
          <InformationText>
            *항목별 상위 2개의 통계가 표시됩니다
          </InformationText>
        </InformationBox>
      </Container> 
      <Footer />
    </Wrapper>
  );
};
export default HostStatisticsPage2;

const WhiteBox = styled.div`
  display: flex;
  width: 20rem;
  padding: 1.25rem 1rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 3rem;
  border-radius: 0.75rem;
  background: #fff;
  align-self: center;
  margin-bottom: 0;
`;

const StatisticContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
  align-self: stretch;
`;

const AnswerContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  align-self: stretch;
`;

const TextBox = styled.div`
  width: 3.75rem;
  flex-shrink: 0;

  color: var(--BLACK, #1c1c1c);
  font-family: Spoqa Han Sans Neo;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const PercentageBarContainer = styled.div`
  display: flex;
  padding: 0.375rem;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 0.625rem;
  flex: 1 0 0;
  border-radius: 0.625rem;
  background: var(--Light-Light-Gray, #e8e8e8);
`;

const PercentageBar = styled.div`
  height: 0.75rem;
  align-self: stretch;
  border-radius: 0.375rem;
  background: var(--Brown, #64422e);
  width: ${(props) => props.width}%;
`;

const PercentageTextBox = styled.div`
  display: flex;
  width: 2.6875rem;
  height: 1.25rem;
  padding: 0.0625rem 0rem;
  justify-content: center;
  align-items: center;
`;

const InformationBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;

const InformationText = styled.div`
  color: var(--Light-Gray, #a4a4a4);
  font-family: Spoqa Han Sans Neo;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
