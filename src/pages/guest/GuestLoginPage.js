import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import BigButton from '../../../src/components/layout/BigButton';
import StartButton from '../../../src/components/layout/StartButton';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { guestNicknameState, userIdState } from '../../atom';
import { getHostNickname, postGuestLogin } from '../../apis/guestLogin';
import { useLocation, useNavigate } from 'react-router-dom';
import { hostNicknameState } from '../../apis/guest';

const GuestLoginPage = () => {
  const imageUrl = process.env.PUBLIC_URL + '/images/BG.png';
  const [nickname, setNickname] = useState('');
  const hostId = useRecoilValue(userIdState);
  const setGuestNickname = useSetRecoilState(guestNicknameState);
  const setUserId = useSetRecoilState(userIdState);
  const setNicknameAtom = useSetRecoilState(hostNicknameState);
  const [hostNickname, setHostNickname] = useState('홍길동');

  const navigate = useNavigate();
  const location = useLocation();

  const handleNicknameChange = (event) => {
    setNickname(event.target.value);
  };

  //닉네임 post & 시작
  const handleStart = async ()=>{
    try{
      console.log(nickname);
      const newNickname = (nickname.replace(/\s/g, '+'));
      const data = await postGuestLogin(hostId, newNickname);
      console.log(data.status);
      if(data.status === 200){
        setGuestNickname(data.name);
        navigate("/guestface");
      }
      else if(data.status === 400){
        alert("동일한 닉네임이 존재합니다.");
      }
    }
    catch(error){
      alert("다시 시도해주세요");
    }
  }

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
  useEffect(()=>{
    const fetchData = async () =>{
      console.log(hostId);
      const urlParams = new URLSearchParams(location.search);
      const hostId = urlParams.get('hostId');
      setUserId(hostId);
      console.log(hostId); //여기까지 okay
      const data = await getHostNickname(hostId);
      console.log(data);
      if(data){
        setNicknameAtom(data.hostName);
        
        setHostNickname(data.hostName);
      }
      else{
        alert('해당 페이지가 존재하지 않습니다. 자신의 공간을 만들어보세요!');
        // navigate(`/guestLogin?hostId=${hostId}`);
        navigate('/');
      }
    };
    fetchData();
  }, [hostId, setNicknameAtom, location.search, navigate, setUserId])

  return (
    <BackGround>
      <Image bg={imageUrl}>
      
        <Contents>
          <Text>내가 생각하는{hostId}</Text>
          <Text>{set_prepositional_particle(hostNickname)}?</Text>
          <NicknameBox>

            <BigButton textBox={<NicknameInput placeholder="닉네임을 입력해주세요"
                value={nickname}
                onChange={handleNicknameChange}/>}></BigButton>
            <NicknameText style={{ paddingTop: "12px", paddingBottom: "32px" }}>한글 최대 15자</NicknameText>
          </NicknameBox>

          <div onClick={handleStart}>
          <StartButton />
          </div>
        </Contents>
      
      </Image>
    </BackGround>
  )
}

export default GuestLoginPage;

const BackGround = styled.div`
  display: flex;
  justify-content: center;
`

const Image = styled.div`
  background-image: url(${props => props.bg});

  display: flex;
  align-items: center;
  justify-content: center;

  background-size: cover;
  background-position: center;
  width: 375px;
  height: 812px;
  flex-shrink: 0;
`

const Contents = styled.div`
flex-direction: column;
align-items: center;

width: 280px;
display: flex;
`
const Text = styled.div`
color: var(--Brown, #64422E);
text-align: center;
font-family: Sandoll Hoyoyo2;
font-size: 30px;
font-style: normal;
font-weight: 900;
line-height: normal;
letter-spacing: 1.2px;
`
const NicknameBox = styled.div`
padding-top: 60px;
`
const NicknameInput = styled.input`
color: var(--Light-Gray, #A4A4A4);
text-align: center;
font-family: Spoqa Han Sans Neo;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
border: none;
outline: none; 
background: var(--White, #FAFAFA);
`

const NicknameText = styled.div`
color: var(--Light-Gray, #A4A4A4);
text-align: center;
font-family: Spoqa Han Sans Neo;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
`