import React from "react";
import styled from "styled-components";
import Footer from "../../components/layout/Footer";
import { useNavigate } from "react-router-dom";
import { getHostTotalResult } from "../../apis/host";

const HostIndividualResultPage = ({ guestName, hostName }) => {
  const backButton = process.env.PUBLIC_URL + "/images/goToBackButton.png";
  const answerArrow = process.env.PUBLIC_URL + "/images/arrow-right.png";

  const navigate = useNavigate();

  return (
    <Wrapper>
      <Container>
        <ButtonContainer>
          <GoToBackButton src={backButton} onClick={() => navigate(-1)} />
        </ButtonContainer>
        <Title>친구들이 생각하는 루씨는?</Title>
        <WhiteBox>
          <ContentsContainer>
            <ContentsText>HostNickname이는 땡땡상이야!</ContentsText>
            <AnswerContainer>
              <RightArrow src={answerArrow} />
              <ContentsAnswer>강아지상</ContentsAnswer>
            </AnswerContainer>
          </ContentsContainer>

          <ContentsContainer>
            <ContentsText>HostNickname이가 이모지라면</ContentsText>
            <AnswerContainer>
              <RightArrow src={answerArrow} />
              <ContentsAnswer>강아지상</ContentsAnswer>
            </AnswerContainer>
          </ContentsContainer>

          <ContentsContainer>
            <ContentsText>HostNickname이와 어울리는 색은</ContentsText>
            <AnswerContainer>
              <RightArrow src={answerArrow} />
              <ContentsAnswer>강아지상</ContentsAnswer>
            </AnswerContainer>
          </ContentsContainer>

          <ContentsContainer>
            <ContentsText>HostNickname이를 처음 봤을 때...</ContentsText>
            <AnswerContainer>
              <RightArrow src={answerArrow} />
              <ContentsAnswer>강아지상</ContentsAnswer>
            </AnswerContainer>
          </ContentsContainer>

          <ContentsContainer>
            <ContentsText>지금 내가 생각하는 HostNickname이는...</ContentsText>
            <AnswerContainer>
              <RightArrow src={answerArrow} />
              <ContentsAnswer>강아지상</ContentsAnswer>
            </AnswerContainer>
          </ContentsContainer>
        </WhiteBox>
      </Container>
      <Footer />
    </Wrapper>
  );
};

export default HostIndividualResultPage;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  background: #f6f9ff;
  width: 25rem;
  @media (max-width: 400px) {
    width: 23rem;
  }
  @media (max-width: 370px) {
    width: 21rem;
  }
`;

export const Container = styled.div`
  display: flex;
  padding: 6.25rem 0rem 7.5rem 0rem;
  flex-direction: column;
  height: 100%;
  align-items: flex-start;
  gap: 2.25rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0px;
  margin: 0px;
`;

export const GoToBackButton = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
`;

export const Title = styled.div`
  color: #64422e;
  font-family: Spoqa Han Sans Neo;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  display: flex;
  align-self: center;
`;

export const WhiteBox = styled.div`
  display: flex;
  width: 20rem;
  padding: 1.25rem 1rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;
  border-radius: 0.75rem;
  background: #fff;
  align-self: center;
`;

const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
  align-self: stretch;
`;

export const ContentsText = styled.div`
  color: var(--BLACK, #1c1c1c);
  font-family: Spoqa Han Sans Neo;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const AnswerContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 0.5rem;
  align-items: flex-start;
  gap: 0.5rem;
`;

const ContentsAnswer = styled.div`
  color: var(--Brown, #64422e);
  font-family: Spoqa Han Sans Neo;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const RightArrow = styled.img`
  width: 1rem;
  height: 1rem;
`;
