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
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const { state } = useLocation();
  const guest = state.guest;
  const token = useRecoilValue(tokenState);
  const hostNickname = useRecoilValue(nicknameAtom);
  const hostId = useRecoilValue(userIdState);
  console.log(guest);

  const [individualData, setIndividualData] = useState({});
  const guestId = guest.id;

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
        //조사 설정
        const set_prepositional_particle2 = (name)=>{
          if(name){
            //name의 마지막 음절의 유니코드(UTF-16) 
            const charCode = name.charCodeAt(name.length - 1);
                
            //유니코드의 한글 범위 내에서 해당 코드의 받침 확인
            const consonantCode = (charCode - 44032) % 28;
        
            if(consonantCode === 0){
                //0이면 받침 없음 -> 가
                return `${name}가`;
            }
            //1이상이면 받침 있음 -> 이
            return `${name}이`;
          }
        }

  useEffect(() => {
    console.log(token);
    console.log(guestId);
    console.log(hostId);
    getHostIndividualResult(token, hostId, guestId)
      .then((res) => {
        console.log(res);
        if (res.data.status === "200") {
          console.log(guest);
          console.log(res.data.data.animal);
          setIndividualData(res.data);
          setLoading(false);
        } else if (res.status === "400") {
          console.log(res.message);
          setLoading(false);
        } else if (res.status === "403") {
          console.log(res.message);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Wrapper>
      <Container>
        <ButtonContainer>
          <GoToBackButton src={backButton} onClick={() => navigate(-1)} />
        </ButtonContainer>
        <Title>
        {set_prepositional_particle2(guest.name)}이 생각하는 {hostNickname}{set_prepositional_particle(hostNickname)}?
        </Title>
        <WhiteBox>
          <ContentsContainer>
            <ContentsText>{hostNickname}이는 ㅇㅇ상이야!</ContentsText>
            <AnswerContainer>
              <RightArrow src={answerArrow} />
              <ContentsAnswer>{individualData.data.animal}</ContentsAnswer>
            </AnswerContainer>
          </ContentsContainer>

          <ContentsContainer>
            <ContentsText>{hostNickname}이가 이모지라면</ContentsText>
            <AnswerContainer>
              <RightArrow src={answerArrow} />
              <ContentsAnswer>{individualData.data.emoji}</ContentsAnswer>
            </AnswerContainer>
          </ContentsContainer>

          <ContentsContainer>
            <ContentsText>{hostNickname}이와 어울리는 색은</ContentsText>
            <AnswerContainer>
              <RightArrow src={answerArrow} />
              <ContentsAnswer>{individualData.data.color}</ContentsAnswer>
            </AnswerContainer>
          </ContentsContainer>

          <ContentsContainer>
            <ContentsText>{hostNickname}이를 처음 봤을 때...</ContentsText>
            <AnswerContainer>
              <RightArrow src={answerArrow} />
              <ContentsAnswer>{individualData.data.first}</ContentsAnswer>
            </AnswerContainer>
          </ContentsContainer>

          <ContentsContainer>
            <ContentsText>
              지금 내가 생각하는 {hostNickname}이는...
            </ContentsText>
            <AnswerContainer>
              <RightArrow src={answerArrow} />
              <ContentsAnswer>{individualData.data.now}</ContentsAnswer>
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
