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

  const [statsData, setStatsData] = useState();

  useEffect(() => {
    getHostStats(token, hostId)
      .then((res) => {
        if (res.status === "200") {
          console.log(res.message);
          setStatsData(res.data.data);
        } else if (res.status === "204") {
          console.log(res.message);
        } else if (res.status === "400") {
          console.log(res.message);
        } else if (res.status === "403") {
          console.log(res.message);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [hostId]);

  return (
    <Wrapper>
      <Container>
        <ButtonContainer>
          <GoToBackButton src={backButton} onClick={() => navigate(-1)} />
        </ButtonContainer>
        <Title>질문별 통계</Title>
        <WhiteBox>
          <StatisticContainer>
            <ContentsText>{hostNickname}이는 ㅇㅇ상이야!</ContentsText>
            <AnswerContainer>
              <TextBox>{statsData.animal[0].animal}</TextBox>
              <PercentageBarContainer>
                <PercentageBar width={statsData.animal[0].percent} />
              </PercentageBarContainer>
              <PercentageTextBox>
                {statsData.animal[0].percent}%
              </PercentageTextBox>
            </AnswerContainer>
            {statsData.animal[1].animal !== 0 && (
              <AnswerContainer>
                <TextBox>{statsData.animal[1].animal}</TextBox>
                <PercentageBarContainer>
                  <PercentageBar width={statsData.animal[1].percent} />
                </PercentageBarContainer>
                <PercentageTextBox>
                  {statsData.animal[1].percent}%
                </PercentageTextBox>
              </AnswerContainer>
            )}
          </StatisticContainer>

          <StatisticContainer>
            <ContentsText>{hostNickname}이가 이모지라면</ContentsText>
            <AnswerContainer>
              <TextBox>{statsData.emoji[0].emoji}</TextBox>
              <PercentageBarContainer>
                <PercentageBar width={statsData.emoji[0].percent} />
              </PercentageBarContainer>
              <PercentageTextBox>
                {statsData.emoji[0].percent}%
              </PercentageTextBox>
            </AnswerContainer>
            {statsData.emoji[1].emoji !== 0 && (
              <AnswerContainer>
                <TextBox>{statsData.animal[1].animal}</TextBox>
                <PercentageBarContainer>
                  <PercentageBar width={statsData.emoji[1].percent} />
                </PercentageBarContainer>
                <PercentageTextBox>
                  {statsData.emoji[1].percent}%
                </PercentageTextBox>
              </AnswerContainer>
            )}
          </StatisticContainer>

          <StatisticContainer>
            <ContentsText>{hostNickname}이와 어울리는 색은...</ContentsText>
            <AnswerContainer>
              <TextBox>{statsData.color[0].color}</TextBox>
              <PercentageBarContainer>
                <PercentageBar width={statsData.color[0].percent} />
              </PercentageBarContainer>
              <PercentageTextBox>
                {statsData.color[0].percent}%
              </PercentageTextBox>
            </AnswerContainer>
            {statsData.color[1].color !== 0 && (
              <AnswerContainer>
                <TextBox>{statsData.color[1].color}</TextBox>
                <PercentageBarContainer>
                  <PercentageBar width={statsData.color[1].percent} />
                </PercentageBarContainer>
                <PercentageTextBox>
                  {statsData.color[1].percent}%
                </PercentageTextBox>
              </AnswerContainer>
            )}
          </StatisticContainer>

          <StatisticContainer>
            <ContentsText>{hostNickname}이를 처음 봤을 때...</ContentsText>
            <AnswerContainer>
              <TextBox>{statsData.first[0].first}</TextBox>
              <PercentageBarContainer>
                <PercentageBar width={statsData.first[0].percent} />
              </PercentageBarContainer>
              <PercentageTextBox>
                {statsData.first[0].percent}%
              </PercentageTextBox>
            </AnswerContainer>
            {statsData.first[1].first !== 0 && (
              <AnswerContainer>
                <TextBox>{statsData.first[1].first}</TextBox>
                <PercentageBarContainer>
                  <PercentageBar width={statsData.first[1].percent} />
                </PercentageBarContainer>
                <PercentageTextBox>
                  {statsData.first[1].percent}%
                </PercentageTextBox>
              </AnswerContainer>
            )}
          </StatisticContainer>

          <StatisticContainer>
            <ContentsText>
              지금 내가 생각하는 {hostNickname}이는...
            </ContentsText>
            <AnswerContainer>
              <TextBox>{statsData.now[0].now}</TextBox>
              <PercentageBarContainer>
                <PercentageBar width={statsData.now[0].percent} />
              </PercentageBarContainer>
              <PercentageTextBox>{statsData.now[0].percent}%</PercentageTextBox>
            </AnswerContainer>
            {statsData.now[1].now !== 0 && (
              <AnswerContainer>
                <TextBox>{statsData.now[1].now}</TextBox>
                <PercentageBarContainer>
                  <PercentageBar width={statsData.now[1].percent} />
                </PercentageBarContainer>
                <PercentageTextBox>{statsData.now[1].now}%</PercentageTextBox>
              </AnswerContainer>
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
