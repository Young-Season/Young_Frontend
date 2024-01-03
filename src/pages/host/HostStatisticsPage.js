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

const HostStatisticsPage = () => {
  const backButton = process.env.PUBLIC_URL + "/images/goToBackButton.png";
  const navigate = useNavigate();
  const { state } = useLocation();
  const token = state.token;
  const hostId = state.hostId;
  const hostNickname = useRecoilValue(nicknameAtom);
  const animals = ["강아지", "고양이", "토끼", "여우", "곰", "다람쥐"];
  const colors = [
    "빨간색",
    "노란색",
    "초록색",
    "파란색",
    "보라색",
    "분홍색",
    "흰색",
    "검은색",
  ];
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
  const [animalValues, setAnimalValues] = useState([]);
  const [percentValues, setPercentValues] = useState([]);
  const [emojiValues, setEmojiValues] = useState([]);
  const [percentEmojiValues, setPercentEmojiValues] = useState([]);
  const [colorValues, setColorValues] = useState([]);
  const [percentColorValues, setPercentColorValues] = useState([]);
  const [firstImpressionValues, setFirstImpressionValues] = useState([]);
  const [percentFirstImpression, setPercentFirstImpression] = useState([]);
  const [nowImpressionValues, setNowImpressionValues] = useState([]);
  const [percentNowImpression, setPercentNowImpression] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    //   console.log(token);
    // console.log(hostId);
    getHostStats(token, hostId)
      .then((res) => {
        // console.log(res);
        // console.log("res.data.data:", res.data.data);
        // console.log("res.data.data.animal:", res.data.data.animal);
        // console.log("res.data.data.animal:", res.data.data.animal[0]);
        // console.log("res.data.data.animal:", res.data.data.animal[0].animal);
        if (res.status === 200) {
          const resAnimal = res.data.data.animal;
          const animalValues = resAnimal.map((item) => item.animal);
          const percentValues = resAnimal.map((item) => item.percent);
          setAnimalValues(animalValues);
          setPercentValues(percentValues);
          // console.log(animalValues);
          // console.log(percentValues);
          const resEmoji = res.data.data.emoji;
          const emojiValues = resEmoji.map((item) => item.emoji);
          const percentEmojiValues = resEmoji.map((item) => item.percent);
          setEmojiValues(emojiValues);
          setPercentEmojiValues(percentEmojiValues);
          // console.log(emojiValues);
          // console.log(percentEmojiValues);
          const resColor = res.data.data.color;
          const colorValues = resColor.map((item) => item.color);
          const percentColorValues = resColor.map((item) => item.percent);
          setColorValues(colorValues);
          setPercentColorValues(percentColorValues);
          // console.log(colorValues);
          // console.log(percentColorValues);
          const resFirst = res.data.data.first;
          const firstImpressionValues = resFirst.map((item) => item.first);
          const percentFirstImpression = resFirst.map((item) => item.percent);
          setFirstImpressionValues(firstImpressionValues);
          setPercentFirstImpression(percentFirstImpression);
          // console.log(firstImpressionValues);
          // console.log(percentFirstImpression);
          const resNow = res.data.data.now;
          const nowImpressionValues = resNow.map((item) => item.now);
          const percentNowImpression = resNow.map((item) => item.percent);
          setNowImpressionValues(nowImpressionValues);
          setPercentNowImpression(percentNowImpression);
          // console.log(nowImpressionValues);
          // console.log(percentNowImpression);
        } else if (res.status === "204") {
          // console.log(res.status);
          setLoading(false);
        } else if (res.status === "400") {
          // console.log(res.status);
          setLoading(false);
        } else if (res.status === "403") {
          // console.log(res.status);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const set_prepositional_particle = (idx, name) => {
    if (name) {
      const charCode = name.charCodeAt(name.length - 1);
      const consonantCode = (charCode - 44032) % 28;

      if (consonantCode === 0) {
        if (idx === 1) return `${name}는`;
        if (idx === 2) return `${name}가`;
        if (idx === 3) return `${name}와`;
        if (idx === 4) return `${name}를`;
        if (idx === 5) return `${name}는`;
      }
      if (idx === 1) return `${name}은`;
      if (idx === 2) return `${name}이`;
      if (idx === 3) return `${name}과`;
      if (idx === 4) return `${name}을`;
      if (idx === 5) return `${name}은`;
    }
  };

  return (
    <Wrapper>
      <Container>
        <ButtonContainer>
          <GoToBackButton src={backButton} onClick={() => navigate(-1)} />
        </ButtonContainer>
        <Title>질문별 통계</Title>
        <WhiteBox>
          <StatisticContainer>
            <ContentsText>
              {set_prepositional_particle(1, hostNickname)} OO상이야!
            </ContentsText>
            {animalValues.map((animalValue, index) =>
              percentValues[index] !== 0 ? (
                <AnswerContainer key={index}>
                  <TextBox>{animals[animalValue - 1]}</TextBox>
                  <PercentageBarContainer>
                    <PercentageBar width={percentValues[index]} />
                  </PercentageBarContainer>
                  <PercentageTextBox>{percentValues[index]}%</PercentageTextBox>
                </AnswerContainer>
              ) : null
            )}
          </StatisticContainer>
          <StatisticContainer>
            <ContentsText>
              {set_prepositional_particle(2, hostNickname)} 이모지라면
            </ContentsText>
            {emojiValues.map((emojiValue, index) =>
              percentEmojiValues[index] !== 0 ? (
                <AnswerContainer key={index}>
                  <ImgBox
                    src={
                      process.env.PUBLIC_URL + `/images/emoji${emojiValue}.png`
                    }
                  ></ImgBox>
                  <PercentageBarContainer>
                    <PercentageBar width={percentEmojiValues[index]} />
                  </PercentageBarContainer>
                  <PercentageTextBox>
                    {percentEmojiValues[index]}%
                  </PercentageTextBox>
                </AnswerContainer>
              ) : null
            )}
          </StatisticContainer>
          <StatisticContainer>
            <ContentsText>
              {set_prepositional_particle(3, hostNickname)} 어울리는 색은
            </ContentsText>
            {colorValues.map((colorValue, index) =>
              percentColorValues[index] !== 0 ? (
                <AnswerContainer key={index}>
                  <TextBox>{colors[colorValue - 1]}</TextBox>
                  <PercentageBarContainer>
                    <PercentageBar width={percentColorValues[index]} />
                  </PercentageBarContainer>
                  <PercentageTextBox>
                    {percentColorValues[index]}%
                  </PercentageTextBox>
                </AnswerContainer>
              ) : null
            )}
          </StatisticContainer>
          <StatisticContainer>
            <ContentsText>
              {set_prepositional_particle(4, hostNickname)} 처음 봤을 때...
            </ContentsText>
            {firstImpressionValues.map((firstValue, index) =>
              percentFirstImpression[index] !== 0 ? (
                <AnswerContainer key={index}>
                  <TextBox>{firstImpressions[firstValue - 1]}</TextBox>
                  <PercentageBarContainer>
                    <PercentageBar width={percentFirstImpression[index]} />
                  </PercentageBarContainer>
                  <PercentageTextBox>
                    {percentFirstImpression[index]}%
                  </PercentageTextBox>
                </AnswerContainer>
              ) : null
            )}
          </StatisticContainer>
          <StatisticContainer>
            <ContentsText>
              지금 내가 생각하는 {set_prepositional_particle(5, hostNickname)}
              ...
            </ContentsText>
            {nowImpressionValues.map((nowValue, index) =>
              percentNowImpression[index] !== 0 ? (
                <AnswerContainer key={index}>
                  <TextBox>{presentImpressions[nowValue - 1]}</TextBox>
                  <PercentageBarContainer>
                    <PercentageBar width={percentNowImpression[index]} />
                  </PercentageBarContainer>
                  <PercentageTextBox>
                    {percentNowImpression[index]}%
                  </PercentageTextBox>
                </AnswerContainer>
              ) : null
            )}
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
export default HostStatisticsPage;

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
  gap: 1rem;
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
const ImgBox = styled.img`
  width: 1.65rem;
  padding: 0.1rem 0.5rem;
  flex-shrink: 0;
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
