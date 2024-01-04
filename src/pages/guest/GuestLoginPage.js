import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BigButton from "../../../src/components/layout/BigButton";
import StartButton from "../../../src/components/layout/StartButton";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { guestNicknameState, userIdState } from "../../atom";
import { getHostNickname, postGuestLogin } from "../../apis/guestLogin";
import { useLocation, useNavigate } from "react-router-dom";
import { hostNicknameState } from "../../apis/guest";
import "../../../src/index.css";
import { getLogin, postkakaoCallback } from "../../apis/login";
import { NicknameBox, KakaoButton, NicknameText } from "../host/HostLoginPage";
const GuestLoginPage = () => {
  const imageUrl = process.env.PUBLIC_URL + "/images/BG.png";
  const [nickname, setNickname] = useState("");
  const hostId = useRecoilValue(userIdState);
  const setGuestNickname = useSetRecoilState(guestNicknameState);
  const setUserId = useSetRecoilState(userIdState);
  const setNicknameAtom = useSetRecoilState(hostNicknameState);
  const [hostNickname, setHostNickname] = useState("홍길동");
  const [red, setRed] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleNicknameChange = (event) => {
    setNickname(event.target.value);
  };
  const startKakao = async () => {
    try {
      const data = await getLogin();
      navigate("/hostLoading");
      // console.log(data);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };
  //닉네임 post & 시작
  const handleStart = async () => {
    try {
      if (nickname.length > 15 || nickname.length === 0) {
        setRed(true);
      } else {
        const data = await postGuestLogin(hostId, nickname);
        if (data.status === 200) {
          console.log(nickname);
          setGuestNickname(nickname);
          // console.log(newNickname);
          //  setGuestNickname(newNickname);
          navigate("/guestface");
        } else if (data.status === 409) {
          alert("동일한 닉네임이 존재합니다.");
        }
      }
    } catch (error) {
      alert("다시 시도해주세요");
    }
  };

  const isNicknameBlank = () => {
    if (nickname.length === 0) return true;
    return false;
  };

  //조사 설정
  const set_prepositional_particle = (name) => {
    if (name) {
      //name의 마지막 음절의 유니코드(UTF-16)
      const charCode = name.charCodeAt(name.length - 1);

      //유니코드의 한글 범위 내에서 해당 코드의 받침 확인
      const consonantCode = (charCode - 44032) % 28;

      if (consonantCode === 0) {
        //0이면 받침 없음 -> 를
        return `${name}는`;
      }
      //1이상이면 받침 있음 -> 을
      return `${name}은`;
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      const urlParams = new URLSearchParams(location.search);
      const hostId = urlParams.get("hostId");
      setUserId(hostId);
      // console.log(hostId); //여기까지 okay
      if (hostId == null || hostId === undefined) {
        navigate("/hostLogin");
      }
      const data = await getHostNickname(hostId);
      // console.log(data);
      if (data) {
        setNicknameAtom(data.hostName);
        setHostNickname(data.hostName);
      } else {
        alert("해당 페이지가 존재하지 않습니다. 자신의 공간을 만들어보세요!");
        // navigate(`/guestLogin?hostId=${hostId}`);
        navigate("/hostLogin");
      }
    };
    fetchData();
  }, [hostId, setNicknameAtom, location.search, navigate, setUserId]);

  return (
    <BackGround>
      <Image bg={imageUrl}>
        <Contents>
          <Text>내가 생각하는 </Text>
          <Text>{set_prepositional_particle(hostNickname)}?</Text>
          <NicknameBox2>
            <BigButtonNickname onChange={handleNicknameChange}>
              <NicknameInput
                black={isNicknameBlank()}
                placeholder="닉네임을 입력해주세요"
                value={nickname}
                onChange={handleNicknameChange}
              />
              <Image2
                src={process.env.PUBLIC_URL + "/images/guestLoginButton.png"}
                alt="kakao"
                onClick={handleStart}
              ></Image2>
            </BigButtonNickname>
            <NicknameText2
              red={red}
              style={{ paddingTop: "12px", paddingBottom: "32px" }}
            >
              한글 최대 15자
            </NicknameText2>
          </NicknameBox2>
          <Container3>
            <Line1></Line1>
            <Text1>이미 공간을 만들었다면?</Text1>
            <Line1></Line1>
          </Container3>
          {/* <br></br>   */}
          <NicknameBox3 onClick={startKakao}>
            {/* <BigButton textBox={<> */}
            <KakaoButton href="https://young-season.o-r.kr/oauth/kakao">
              <img
                src={process.env.PUBLIC_URL + "/images/message-circle.png"}
                alt="kakao"
              />
              <NicknameText>카카오 로그인</NicknameText>
            </KakaoButton>
            {/* <Description>결과확인은 사파리, 크롬 등의 웹 브라우저로</Description>
            <Description>접속해주세요!</Description> */}

            {/* </BigButton> */}
          </NicknameBox3>
        </Contents>
      </Image>
    </BackGround>
  );
};

export default GuestLoginPage;

const BackGround = styled.div`
  display: flex;
  justify-content: center;
`;

const Image = styled.div`
  background-image: url(${(props) => props.bg});

  display: flex;
  align-items: center;
  justify-content: center;

  background-size: cover;
  background-position: center;
  width: 375px;
  height: 812px;
  flex-shrink: 0;
`;

const Contents = styled.div`
  flex-direction: column;
  align-items: center;

  width: 280px;
  display: flex;
`;
const Text = styled.div`
  color: var(--Brown, #64422e);
  text-align: center;
  font-family: "PartialSansKR-Regular";
  color: var(--Brown, #64422e);
  text-align: center;
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.2rem;
  line-height: 1.5;
`;
const NicknameBox2 = styled.div`
  margin-top: 60px;
`;
const NicknameInput = styled.input`
  color: ${(props) => (props.blank ? "var(--Light-Gray, #a4a4a4)" : "black")};

  text-align: center;
  font-family: "Spoqa Han Sans Neo";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border: none;
  outline: none;
  background: var(--White, #fafafa);
  width: 17.5rem;
`;

const NicknameText2 = styled.div`
  color: ${(props) => (props.red ? "red" : "var(--Light-Gray, #A4A4A4)")};
  text-align: center;
  font-family: "Spoqa Han Sans Neo";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const BigButtonNickname = styled.div`
  display: flex;
  width: 17.5rem;
  height: 3.75rem;
  justify-content: center;
  align-items: center;
  // gap: 0.62rem;
  color: var(--Light-Gray, #a4a4a4);
  text-align: center;
  font-family: "Spoqa Han Sans Neo";
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding-right: 0.5rem;
  border-radius: 20px;
  border: 1px solid var(--Brown, #64422e);
  background: var(--White, #fafafa);
  box-shadow: -1px -2px 7.3px 0px rgba(0, 0, 0, 0.25) inset;
`;
const Container3 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
  gap: 10px;

  width: 21rem;
`;
const Line1 = styled.div`
  width: 5rem;
  height: 0px;
  border: 1px solid #000000;
`;
const Text1 = styled.div`
  height: 18px;

  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 130%;
  text-align: center;
  color: #866b5b;
`;
const NicknameBox3 = styled.div`
  padding-top: 40px;
  cursor: pointer;
`;

const Image2 = styled.img`
  width: 1.7rem;
  height: 1.7rem;
  padding-right: 0.2rem;
  cursor: pointer;
`;
