import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Footer from "../../components/layout/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { hostTotal, nicknameAtom, tokenState } from "../../atom";
import { saveAs } from "file-saver";
import html2canvas from "html2canvas";

import {
  Wrapper,
  Container,
  Title,
  WhiteBox,
} from "./HostIndividualResultPage";
import {
  DescriptionContainer,
  DescriptionTitle,
  Description,
  Button,
} from "../guest/GuestOthersResultPage";
import { useRecoilValue } from "recoil";
import { userIdState } from "../../atom";
import { getHostTotalResult } from "../../apis/host";

const HostTotalResultPage = () => {
  const { Kakao } = window;
  const download = process.env.PUBLIC_URL + "/images/download.png";
  const urlImage = process.env.PUBLIC_URL + "/images/copyButton.png";
  const fileImage = process.env.PUBLIC_URL + "/images/file.png";

  const navigate = useNavigate();

  const token = useRecoilValue(tokenState); // 백엔드에서 받아온 토큰
  const totalData = useRecoilValue(hostTotal); // 백엔드에서 받아온 토큰

  const hostNickname = useRecoilValue(nicknameAtom);
  const hostId = useRecoilValue(userIdState);

  const [visibleGuests, setVisibleGuests] = useState(6);
  const seeMore = () => {
    setVisibleGuests(visibleGuests + 6);
  };

  // pc 잘되는 코드
  // const handleDownload = () => {
  //   const sectionToCapture = document.getElementById("section-to-capture");

  //   html2canvas(sectionToCapture, { useCORS: true })
  //     .then((canvas) => {
  //       const image = canvas.toDataURL("image/png");
  //       const link = document.createElement("a");
  //       link.href = image;
  //       link.download = `${hostNickname}.png`;
  //       link.click();
  //     })
  //     .catch((err) => {
  //       console.error("oops, something went wrong!", err);
  //     });
  // };

  const handleDownload = () => {
    const sectionToCapture = document.getElementById("section-to-capture");
  
    html2canvas(sectionToCapture, { useCORS: true })
      .then((canvas) => {
        canvas.toBlob((blob) => {
          const url = URL.createObjectURL(blob);
  
          // 모바일 환경에 따라 적절한 방법 선택
          const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
          if (isMobile) {
            window.open(url, '_blank');
          } else {
            const link = document.createElement("a");
            link.href = url;
            link.download = `${hostNickname}.png`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }
        }, "image/png");
      })
      .catch((err) => {
        console.error("oops, something went wrong!", err);
      });
  };
  
  const convertToImageSource = (imageState) => {
    if (imageState) {
      // console.log(imageState);
      return `https://young-season.o-r.kr/public/images/${imageState}.png`;
    } else {
      // imageState가 유효한 값이 아닌 경우에 대한 처리
      console.log("imageState에 값이 없음");
      return;
    }
  };

  

  //조사 설정
  const set_prepositional_particle = (name) => {
    if (name) {
      //name의 마지막 음절의 유니코드(UTF-16)
      const charCode = name.charCodeAt(name.length - 1);

      //유니코드의 한글 범위 내에서 해당 코드의 받침 확인
      const consonantCode = (charCode - 44032) % 28;

      if (consonantCode === 0) {
        //0이면 받침 없음 -> 는
        return `${name}는`;
      }
      //1이상이면 받침 있음 -> 은
      return `${name}은`;
    }
  };

  const handleCopyClick = () => {
    navigator.clipboard
      .writeText(`https://youngchun.netlify.app/?hostId=${hostId}`)
      .then(() => {
        alert("URL이 복사되었습니다.");
      })
      .catch((error) => {
        console.error("복사 실패:", error);
      });
  };

  useEffect(() => {
    Kakao.cleanup();
    Kakao.init("9769e69ba2b11621a50723827584b67e");
    // console.log(Kakao.isInitialized);
  }, [visibleGuests]);

  const shareKaKao = () => {
    // console.log(hostId);
    Kakao.Share.createCustomButton({
      container: "#kakaotalk-sharing-btn",
      templateId: 102394,
      templateArgs: {
        title: "제목 영역입니다.",
        description: "설명 영역입니다.",
        host_nickname: `${hostNickname}`,
        hostId: `${hostId}`,
        url: `https://youngchun.netlify.app/guestLogin?hostId=${hostId}`,
      },
    });
  };
  return (
    <Wrapper>
      <Container style={{ alignItems: "center" }}>
        <CaptureDiv id="section-to-capture">
          <Title>
            친구들이 생각하는 {set_prepositional_particle(hostNickname)}?
          </Title>
          <WhiteBox style={{ padding: 0, marginBottom: "0.5rem" }}>
            <Image src={convertToImageSource(totalData.image)} />
          </WhiteBox>
          <DescriptionContainer>
            <DescriptionTitle>{totalData.title}</DescriptionTitle>
            <Description>
              {totalData.first}
              <br />
              <br />
              {totalData.now}
            </Description>
          </DescriptionContainer>
        </CaptureDiv>

        <Button onClick={handleDownload}>
          <ButtonText>
            이미지 다운로드 <DownloadImage src={download} />
          </ButtonText>
        </Button>
        <Description>결과확인은 사파리, 크롬 등의 웹 브라우저로</Description>
            <Description>접속해주세요!</Description>

        <Button
          onClick={() =>
            navigate("/hostStatistics", {
              state: { hostId: hostId, token: token },
            })
          }
        >
          <ButtonText>질문별 통계 보러가기 </ButtonText>
        </Button>

        <VisitorContainer>
          <VisiorListTitle>방문자 목록</VisiorListTitle>
          <WhiteBox style={{ padding: "0.75rem 0.75rem 1.25rem 0.75rem" }}>
            <TableHeaderContainer>
              <NicknameBox>
                <HeaderText>닉네임</HeaderText>
              </NicknameBox>
              <AnswerBox>
                <HeaderText>답변</HeaderText>
              </AnswerBox>
            </TableHeaderContainer>
            {totalData.guests.slice(0, visibleGuests).map((guest) => (
              <TableListContainer>
                <NicknameBox>
                  <ListText>{guest.name}</ListText>
                </NicknameBox>
                <AnswerBox>
                  <ListText>
                    <AnswerFileImage
                      src={fileImage}
                      onClick={() =>
                        navigate("/hostResult", { state: { guest: guest } })
                      }
                    ></AnswerFileImage>
                  </ListText>
                </AnswerBox>
              </TableListContainer>
            ))}
            {visibleGuests < totalData.guests.length && (
              <SeeMoreButton onClick={seeMore}>더보기</SeeMoreButton>
            )}
          </WhiteBox>
          <SharingText>친구에게 공유하고 내 이미지를 알아보세요!</SharingText>
          <UrlButton
            id="kakaotalk-sharing-btn"
            onClick={() => {
              shareKaKao();
            }}
          >
            카카오톡으로 공유하기
            <UrlImage src={urlImage}></UrlImage>
          </UrlButton>

          <UrlButton
            id="kakaotalk-sharing-btn"
            onClick={() => {
              handleCopyClick();
            }}
          >
            URL 복사
            <UrlImage src={urlImage}></UrlImage>
          </UrlButton>
        </VisitorContainer>
      </Container>
      <Footer />
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
  margin-top: 7rem;
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
  color: #64422e;
  font-family: Spoqa Han Sans Neo;
  font-size: 1rem;
  font-style: normal;
  font-weight: 550;
  line-height: normal;
`;

const UrlImage = styled.img`
  width: 1rem;
  height: 1rem;
  flex-shrink: 0;
`;

const BigButtonContainer = styled.button`
  display: flex;
  width: 17.5rem;
  height: 3.75rem;
  padding: 0.625rem 1.25rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 1rem;
  border: 1px solid var(--Brown, #64422e);
  background: var(--White, #fafafa);
  box-shadow: -1px -2px 7.3px 0px rgba(0, 0, 0, 0.25) inset;
  color: #64422e;
  font-family: Spoqa Han Sans Neo;
  font-size: 1rem;
  font-style: normal;
  font-weight: 550;
  line-height: normal;
`;

const Image2 = styled.img`
  margin-left: 0.5rem 0 0 0.5rem;
`;

const UrlButton = styled.button`
  display: flex;
  height: 3.25rem;
  padding: 0.5rem 1.25rem;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
  align-self: stretch;
  border-radius: 1rem;
  border: 1px solid var(--Brown, #64422e);
  background: var(--White, #fafafa);
  box-shadow: -1px -2px 7.3px 0px rgba(0, 0, 0, 0.25) inset;
  color: #1c1c1c;
  font-family: Spoqa Han Sans Neo;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  cursor: pointer;
`;

const CaptureDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
`;
const Image = styled.img`
  margin: 3.75rem;
  border-radius: 20px;
`;
const DescriptionTwo = styled.div`
color: var(--Gray, #555);
text-align: center;
font-family: Spoqa Han Sans Neo;
font-size: 0.875rem;
font-style: normal;
font-weight: 700;
line-height: 150%; /* 1.3125rem */
`;