import React, { useEffect } from "react";
import styled from "styled-components";
import Footer from "../../components/layout/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { hostTotal, nicknameAtom, tokenState } from "../../atom";

import {
  Wrapper,
  Container,
  Title,
  WhiteBox,
} from "./HostIndividualResultPage";
import {
  Image,
  DescriptionContainer,
  DescriptionTitle,
  Description,
  Button,
} from "../guest/GuestOthersResultPage";
import { useRecoilValue } from "recoil";
import { userIdState } from "../../atom";
import { getHostTotalResult } from "../../apis/host";

const HostTotalResultPage = () => {
  // const image = process.env.PUBLIC_URL + "/images/rabbit22.png";
  // const statistics = process.env.PUBLIC_URL + "/images/home.png";
  const download = process.env.PUBLIC_URL + "/images/download.png";
  const urlImage = process.env.PUBLIC_URL + "/images/copyButton.png";
  const fileImage = process.env.PUBLIC_URL + "/images/file.png";

  const navigate = useNavigate();

  const token = useRecoilValue(tokenState); // 백엔드에서 받아온 토큰
  const totalData = useRecoilValue(hostTotal); // 백엔드에서 받아온 토큰

  const hostNickname = useRecoilValue(nicknameAtom);
  const hostId = useRecoilValue(userIdState);
  // const { totalData } = useLocation();

  // useEffect(() => {
  // 	const fetchData = async () => {
  // 		try {
  // 			const response = await getHostTotalResult(hostId);
  // 			setTotalData(response.data);
  // 			console.log(response.data);
  // 		} catch(error) {
  // 			console.error(error);
  // 		}
  // 	}
  // 	fetchData;
  // }, [hostId])

  const [visibleGuests, setVisibleGuests] = useState(6);
  const seeMore = () => {
    setVisibleGuests((prevVisibleGuests) => prevVisibleGuests + 6);
  };

  useEffect(() => {
    // getHostTotalResult(token, hostId)
    //   .then((res) => {
    //     if (res.data.status === "200") {
    //       console.log(res.data.message);
    //       setTotalData(res.data.data);
    //     } else if (res.data.status === "204") {
    //       console.log(res.data.message);
    //     } else if (res.data.status === "400") {
    //       console.log(res.data.message);
    //     } else if (res.data.status === "403") {
    //       console.log(res.data.message);
    //     }
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
    console.log("토탈토탈");
    console.log(totalData);
    console.log(totalData.title);

  }, []);

  return (
    <Wrapper>
      <Container>
        <Title>친구들이 생각하는 {hostNickname}는?</Title>
        <WhiteBox style={{padding: 0}}>
          <Image src={totalData.image}/>
        </WhiteBox>
        <DescriptionContainer>
          <DescriptionTitle>{totalData.title}</DescriptionTitle>
          <Description>
            {totalData.first}
            <br/>
            <br/>
            {totalData.now}
          </Description>
        </DescriptionContainer>
        <Button onClick={()=>navigate("/hostStatistics", {
          state: {hostId: hostId, token: token},
        })}>
          <ButtonText>질문별 통계 보러가기 </ButtonText>
        </Button>
        <Button>
           <ButtonText>
             이미지 다운로드 <DownloadImage src={download} />
           </ButtonText>
        </Button>

        <VisitorContainer>
          <VisiorListTitle>방문자 목록</VisiorListTitle>
          <WhiteBox>
            <TableHeaderContainer>
              <NicknameBox>
                <HeaderText>닉네임</HeaderText>
              </NicknameBox>
              <AnswerBox>
                <HeaderText>답변</HeaderText>
              </AnswerBox>
            </TableHeaderContainer>
            {totalData.guests.map(guest=>(
              <TableListContainer>
                <NicknameBox>
                  <ListText>{guest.name}</ListText>
                </NicknameBox>
                <AnswerBox>
                  <ListText>
                    <AnswerFileImage src={fileImage} onClick={()=>navigate("/hostResult", {state: {guest: guest}})}></AnswerFileImage>
                  </ListText>
                </AnswerBox>
              </TableListContainer>
            ))
            }
            {visibleGuests < totalData.guests.length && (
              <SeeMoreButton onClick={seeMore}>더보기</SeeMoreButton>
            )}
          </WhiteBox>
          <SharingText>친구에게 공유하고 내 이미지를 알아보세요!</SharingText>
          <Button>
            <ButtonContentsContainer>
              <ButtonText>URL 들어가는 공간</ButtonText>
              <UrlImage src={urlImage}/>
            </ButtonContentsContainer>
          </Button>
        </VisitorContainer>
      </Container>
    </Wrapper>

  );
};

export default HostTotalResultPage;

const DownloadImage = styled.img`
  width: 1.25rem;
  height: 1.25rem;
`;

const VisitorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  padding: 0px;
`;

const VisiorListTitle = styled.div`
  color: var(--Brown, #64422e);
  font-family: Spoqa Han Sans Neo;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const TableHeaderContainer = styled.div`
  display: flex;
  padding: 0.625rem 0rem;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  border-bottom: 1px solid #000;
  width: 100%;
  height: 2.5rem;
`;

const NicknameBox = styled.div`
  display: flex;
  padding-left: 1.25rem;
  align-items: center;
  gap: 0.625rem;
  flex: 1 0 0;
`;

const AnswerBox = styled.div`
  display: flex;
  padding: 0rem 1.875rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
`;

const HeaderText = styled.div`
  color: #000;
  font-family: Spoqa Han Sans Neo;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const TableListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  width: 100%;
  height: 1.125rem;
  gap: 1rem;
`;

const ListText = styled.div`
  color: var(--BLACK, #1c1c1c);
  font-family: Spoqa Han Sans Neo;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const AnswerFileImage = styled.img`
  width: 1.25rem;
  height: 1.25rem;
  cursor: pointer;
`;

const SeeMoreButton = styled.div`
  width: 5rem;
  color: var(--Light-Gray, #a4a4a4);
  text-align: center;
  font-family: Spoqa Han Sans Neo;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  align-self: center;
  cursor: pointer;
`;

const SharingText = styled.div`
  color: #1c1c1c;
  font-family: Spoqa Han Sans Neo;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  align-self: center;
`;

const ButtonContentsContainer = styled.div`
  display: flex;
  width: 15rem;
  justify-content: space-between;
  align-items: center;
`;

const ButtonText = styled.div`
  color: #1c1c1c;
  font-family: Spoqa Han Sans Neo;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const UrlImage = styled.img`
  width: 1rem;
  height: 1rem;
  flex-shrink: 0;
`;
