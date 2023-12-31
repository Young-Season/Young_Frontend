import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../../components/layout/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { nicknameAtom, tokenState, userIdState } from "../../atom";
import { getHostIndividualResult } from "../../apis/host";

const HostIndividualResultPage = () => {
  const backButton = process.env.PUBLIC_URL + "/images/goToBackButton.png";
  const answerArrow = process.env.PUBLIC_URL + "/images/arrow-right.png";
  const navigate = useNavigate();

  const { state } = useLocation();
  const guest = state.guest;
  const token = useRecoilValue(tokenState);
  const hostNickname = useRecoilValue(nicknameAtom);
  const hostId = useRecoilValue(userIdState);
  // console.log(guest);

  const [individualData, setIndividualData] = useState({});
  const guestId = guest.id;

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
  //조사 설정
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

  useEffect(() => {
    // console.log(token);
    // console.log(guestId);
    // console.log(hostId);
    getHostIndividualResult(token, hostId, guestId)
      .then((res) => {
        // console.log(res);
        if (res.data.status === "200") {
          // console.log(guest);
          // console.log(res.data.data.animal);
          setIndividualData(res.data.data);
          // setLoading(false);
        } else if (res.status === "400") {
          console.log(res.message);
          // setLoading(false);
        } else if (res.status === "403") {
          console.log(res.message);
          // setLoading(false);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const convertFace = (int) => {
    if (int === 1) return "강아지";
    else if (int === 2) return "고양이";
    else if (int === 3) return "토끼";
    else if (int === 4) return "여우";
    else if (int === 5) return "곰";
    else if (int === 6) return "다람쥐";
  };

  const convertEmoji = (int) => {
    if (int === 1) return "🥹";
    else if (int === 2) return "🤩";
    else if (int === 3) return "😎";
    else if (int === 4) return "😏";
    else if (int === 5) return "🤪";
    else if (int === 6) return "🫠";
    else if (int === 7) return "🤭";
    else if (int === 8) return "😐";
  };

  const convertColor = (int) => {
    if (int === 1) return "빨간색";
    else if (int === 2) return "노란색";
    else if (int === 3) return "초록색";
    else if (int === 4) return "파란색";
    else if (int === 5) return "보라색";
    else if (int === 6) return "분홍색";
    else if (int === 7) return "흰색";
    else if (int === 8) return "검은색";
  };

  const convertFirst = (int) => {
    if (int === 1) return "밝았어";
    else if (int === 2) return "다정했어";
    else if (int === 3) return "웃겼어";
    else if (int === 4) return "어른스러웠어";
    else if (int === 5) return "섬세했어";
    else if (int === 6) return "시크했어";
    else if (int === 7) return "투명했어";
    else if (int === 8) return "줏대있었어";
  };

  const convertNow = (int) => {
    if (int === 1) return "밝아";
    else if (int === 2) return "다정해";
    else if (int === 3) return "웃겨";
    else if (int === 4) return "어른스러워";
    else if (int === 5) return "섬세해";
    else if (int === 6) return "시크해";
    else if (int === 7) return "투명해";
    else if (int === 8) return "줏대있어";
  };

  return (
    <Wrapper>
      <Container>
        <ButtonContainer>
          <GoToBackButton src={backButton} onClick={() => navigate(-1)} />
        </ButtonContainer>
        <Title>
          {set_prepositional_particle2(guest.name)} 생각하는{" "}
          {set_prepositional_particle(1, hostNickname)}?
        </Title>
        <WhiteBox>
          <ContentsContainer>
            <ContentsText>
              {set_prepositional_particle(1, hostNickname)} ㅇㅇ상이야!
            </ContentsText>
            <AnswerContainer>
              <RightArrow src={answerArrow} />
              <ContentsAnswer>
                {convertFace(individualData.animal)}
              </ContentsAnswer>
            </AnswerContainer>
          </ContentsContainer>

          <ContentsContainer>
            <ContentsText>
              {set_prepositional_particle(2, hostNickname)} 이모지라면
            </ContentsText>
            <AnswerContainer>
              <RightArrow src={answerArrow} />
              <ContentsAnswer>
                {convertEmoji(individualData.emoji)}
              </ContentsAnswer>
            </AnswerContainer>
          </ContentsContainer>

          <ContentsContainer>
            <ContentsText>
              {set_prepositional_particle(3, hostNickname)} 어울리는 색은
            </ContentsText>
            <AnswerContainer>
              <RightArrow src={answerArrow} />
              <ContentsAnswer>
                {convertColor(individualData.color)}
              </ContentsAnswer>
            </AnswerContainer>
          </ContentsContainer>

          <ContentsContainer>
            <ContentsText>
              {set_prepositional_particle(4, hostNickname)} 처음 봤을 때...
            </ContentsText>
            <AnswerContainer>
              <RightArrow src={answerArrow} />
              <ContentsAnswer>
                {convertFirst(individualData.first)}
              </ContentsAnswer>
            </AnswerContainer>
          </ContentsContainer>

          <ContentsContainer>
            <ContentsText>
              지금 내가 생각하는 {set_prepositional_particle(5, hostNickname)}
              ...
            </ContentsText>
            <AnswerContainer>
              <RightArrow src={answerArrow} />
              <ContentsAnswer>{convertNow(individualData.now)}</ContentsAnswer>
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
  padding: 3.25rem 0rem 7.5rem 0rem;
  flex-direction: column;
  height: 100%;
  align-items: flex-start;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const GoToBackButton = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
`;

export const Title = styled.div`
  color: #64422e;
  font-family: "Spoqa Han Sans Neo";
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  display: flex;
  align-self: center;
  justify-content: center;
  padding: 3rem 0 3rem 0;
`;

export const WhiteBox = styled.div`
  display: flex;
  width: 20rem;
  padding: 1.25rem 1rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;
  border-radius: 1.25rem;
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
  font-family: "Spoqa Han Sans Neo";
  font-size: 1.05rem;
  font-style: normal;
  font-weight: 800;
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
  font-family: "Spoqa Han Sans Neo";
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const RightArrow = styled.img`
  width: 1rem;
  height: 1rem;
`;
