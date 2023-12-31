import React from "react";
import styled from "styled-components";
import Footer from "../../components/layout/Footer";

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

const HostTotalResultPage = () => {
  const image = process.env.PUBLIC_URL + "/images/rabbit22.png";
  // const statistics = process.env.PUBLIC_URL + "/images/home.png";
  const download = process.env.PUBLIC_URL + "/images/download.png";
  const urlImage = process.env.PUBLIC_URL + "/images/copyButton.png";
  const fileImage = process.env.PUBLIC_URL + "/images/file.png";

  return (
    <Wrapper>
      <Container>
        <Title>친구들이 생각하는 루씨는?</Title>
        <WhiteBox style={{ padding: 0 }}>
          <Image src={image} />
        </WhiteBox>
        <DescriptionContainer>
          <DescriptionTitle>처음엔 귀엽지만 지금은 웃긴 친구!</DescriptionTitle>
          <Description>
            당신은 처음엔 수줍지만 귀여운 친구였어요.
            <br />
            마치 뭐랄까.. 왜 다들 수업에 갑자기 가버린걸까요?
            <br />
            흑흑 남겨지니 조금 슬프네요.
            <br />
            <br />
            하지만 이제는 웃기다는걸 알게 됐어요. <br />
            마치 나의 멋사 내의 웃음벨이랄까요? <br />
            당신 없는 멋사 상상할 수 없다 이말이야 ~ <br />
          </Description>
        </DescriptionContainer>
        <Button>
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

            <TableListContainer>
              <NicknameBox>
                <ListText>닉네임</ListText>
              </NicknameBox>
              <AnswerBox>
                <ListText>
                  <AnswerFileImage src={fileImage} />
                </ListText>
              </AnswerBox>
            </TableListContainer>

            <TableListContainer>
              <NicknameBox>
                <ListText>닉네임</ListText>
              </NicknameBox>
              <AnswerBox>
                <ListText>
                  <AnswerFileImage src={fileImage} />
                </ListText>
              </AnswerBox>
            </TableListContainer>

            <TableListContainer>
              <NicknameBox>
                <ListText>닉네임</ListText>
              </NicknameBox>
              <AnswerBox>
                <ListText>
                  <AnswerFileImage src={fileImage} />
                </ListText>
              </AnswerBox>
            </TableListContainer>

            <TableListContainer>
              <NicknameBox>
                <ListText>닉네임</ListText>
              </NicknameBox>
              <AnswerBox>
                <ListText>
                  <AnswerFileImage src={fileImage} />
                </ListText>
              </AnswerBox>
            </TableListContainer>

            <TableListContainer>
              <NicknameBox>
                <ListText>닉네임</ListText>
              </NicknameBox>
              <AnswerBox>
                <ListText>
                  <AnswerFileImage src={fileImage} />
                </ListText>
              </AnswerBox>
            </TableListContainer>

            <TableListContainer>
              <NicknameBox>
                <ListText>닉네임</ListText>
              </NicknameBox>
              <AnswerBox>
                <ListText>
                  <AnswerFileImage src={fileImage} />
                </ListText>
              </AnswerBox>
            </TableListContainer>
          </WhiteBox>
          <SharingText>친구에게 공유하고 내 이미지를 알아보세요!</SharingText>
          <Button>
            <ButtonContentsContainer>
              <ButtonText>URL 들어가는 공간</ButtonText>
              <UrlImage src={urlImage} />
            </ButtonContentsContainer>
          </Button>
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
