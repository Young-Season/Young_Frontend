import styled from "styled-components";
import { useEffect } from "react";
import UrlButton from "../../components/layout/UrlButton";
import { useRecoilState } from "recoil";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { nicknameAtom, userIdState } from "../../atom";

const HostUrlDeployPage = () => {
  const { Kakao } = window;
  const navigate = useNavigate();
  const realUrl = "http://localhost:3000";
  //로컬주소
  const resultUrl = "http://localhost:3000";
  const hostName = useRecoilValue(nicknameAtom);
  const hostId = useRecoilValue(userIdState);
  const urlImage = process.env.PUBLIC_URL + "/images/copyButton.png";
  const getSubjectSuffix = (name) => {
    const lastChar = name.charAt(name.length - 1);
    const lastCharCode = lastChar.charCodeAt(0);
    if (lastCharCode < 44032 || lastCharCode > 55203) {
      return "는";
    }
    return (lastCharCode - 44032) % 28 === 0 ? "는" : "은";
  };
  useEffect(() => {
    Kakao.cleanup();
    Kakao.init("9769e69ba2b11621a50723827584b67e");
    // console.log(Kakao.isInitialized);
  }, []);

  const shareKaKao = () => {
    // console.log(hostId);
    Kakao.Share.createCustomButton({
      container: "#kakaotalk-sharing-btn",
      templateId: 102394,
      templateArgs: {
        title: "제목 영역입니다.",
        description: "설명 영역입니다.",
        host_nickname: `${hostName}`,
        hostId: `${hostId}`,
        url: `https://youngchun.netlify.app/guestLogin?hostId=${hostId}`,
      },
    });
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

  return (
    <FaceContainer>
      <Text>
        친구들이 생각하는 {hostName}
        {getSubjectSuffix(hostName)}?
      </Text>
      <Image src={process.env.PUBLIC_URL + "/images/Ghost.png"}></Image>
      <FaceContainer3>
        <Text1>친구에게 공유하고 내 이미지를 알아보세요!</Text1>
        <UrlBtn
          id="kakaotalk-sharing-btn"
          onClick={() => {
            shareKaKao();
          }}
        >
          카카오톡으로 공유하기
          <UrlImage src={urlImage}></UrlImage>
        </UrlBtn>

        <UrlBtn
          id="kakaotalk-sharing-btn"
          onClick={() => {
            handleCopyClick();
          }}
        >
          URL 복사
          <UrlImage src={urlImage}></UrlImage>
        </UrlBtn>
      </FaceContainer3>
    </FaceContainer>
  );
};
export default HostUrlDeployPage;
const FaceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: #f6f9ff;
  @media (min-width: 480px) {
    width: 480px;
    margin: 0 auto; // 추가된 부분: 뷰포트가 480px보다 클 때 가운데 정렬
  }
`;
const FaceContainer2 = styled.div`
  height: 320px;
  background: #f6f9ff;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 700px;
`;

const Image = styled.img`
  margin: 3.75rem;
  border-radius: 20px;
`;
const FaceContainer3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
`;
const Text = styled.div`
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  text-align: center;
  // color: #000000;
  margin-top: 3rem;
  margin-bottom: 0.5rem;
`;
const Text1 = styled.div`
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 3.75rem;
  width: 100%;
  text-align: center;
  color: #64422e;
`;
const ButtonText = styled.div`
  color: #64422e;
  font-family: "Spoqa Han Sans Neo";
  font-size: 1rem;
  font-style: normal;
  font-weight: 550;
  line-height: normal;
`;
const UrlBtn = styled.button`
  display: flex;
  height: 3.25rem;
  padding: 0.5rem 1.25rem;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
  margin-bottom: 1.5rem;
  align-self: stretch;
  border-radius: 1rem;
  border: 1px solid var(--Brown, #64422e);
  background: var(--White, #fafafa);
  box-shadow: -1px -2px 7.3px 0px rgba(0, 0, 0, 0.25) inset;
  color: #1c1c1c;
  font-family: "Spoqa Han Sans Neo";
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  cursor: pointer;
`;

const UrlImage = styled.img`
  width: 1rem;
  height: 1rem;
  flex-shrink: 0;
`;
