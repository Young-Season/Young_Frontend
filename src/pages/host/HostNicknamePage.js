import React, { useState } from "react";
import styled from "styled-components";
import BigButton from "../../../src/components/layout/BigButton";
import StartButton from "../../../src/components/layout/StartButton";
import { nicknameAtom, tokenState, userIdState } from "../../atom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { postNickname } from "../../apis/login";
import { useNavigate } from "react-router-dom";

const HostNicknamePage = () => {
  const [nickname, setNickname] = useRecoilState(nicknameAtom);
  const userId = useRecoilValue(userIdState);
  const setToken = useSetRecoilState(tokenState);
  const setUserId = useSetRecoilState(userIdState);
  const navigate = useNavigate();
  const [red, setRed] = useState(false);

  const handleNicknameChange = (event) => {
    setNickname(event.target.value);
    // console.log(nickname);
  };

  //닉네임 post & 시작
  const handleStart = async () => {
    // console.log(userId);
    if (nickname > 15) setRed(true);
    else {
      const result = await postNickname(userId, nickname);
      if (result.status === "409") {
        console.log("동일 user");
        alert("동일한 유저가 이미 존재합니다.");
        setUserId(null);
        navigate("/hostLogin");
      } else if (result.status === "201") {
        setToken(result.data.token);
        navigate("/deploy");
      } else {
        alert("오류 발생");
        navigate("/hostLogin");
      }
    }
  };

  //조사 설정
  const set_prepositional_particle = (name) => {
    //name의 마지막 음절의 유니코드(UTF-16)
    const charCode = name.charCodeAt(name.length - 1);

    //유니코드의 한글 범위 내에서 해당 코드의 받침 확인
    const consonantCode = (charCode - 44032) % 28;

    if (consonantCode === 0) {
      //0이면 받침 없음 -> 를
      return `${name}는`;
    }
    //1이상이면 받침 있음 -> 을
    return `${name}이는`;
  };

  return (
    <BackGround>
      <Image>
        <Contents>
          <NicknameBox>
            <BigButton
              textBox={
                <NicknameInput
                  placeholder="닉네임을 입력해주세요"
                  value={nickname}
                  onChange={handleNicknameChange}
                />
              }
            ></BigButton>
            <NicknameText
              red={red}
              style={{ paddingTop: "12px", paddingBottom: "32px" }}
            >
              한글 최대 15자
            </NicknameText>
          </NicknameBox>

          <Start onClick={handleStart}>
            <StartButton />
          </Start>
        </Contents>
      </Image>
    </BackGround>
  );
};

export default HostNicknamePage;

const BackGround = styled.div`
  display: flex;
  justify-content: center;
`;

const Image = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background: var(--BG, #f6f9ff);
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
  font-family: Sandoll Hoyoyo2;
  font-size: 30px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  letter-spacing: 1.2px;
`;
const NicknameBox = styled.div`
  padding-top: 60px;
`;
const NicknameInput = styled.input`
  color: var(--Light-Gray, #a4a4a4);
  text-align: center;
  font-family: Spoqa Han Sans Neo;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border: none;
  outline: none;
  background: var(--White, #fafafa);
`;

const NicknameText = styled.div`
  color: ${(props) => (props.red ? "red" : "var(--Light-Gray, #A4A4A4)")};
  text-align: center;
  font-family: Spoqa Han Sans Neo;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const Start = styled.div`
  cursor: pointer;
`;
