import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const HostLoadingPage = () => {
  const imageUrl = process.env.PUBLIC_URL + '/images/BG_blur.png';

  let navigate = useNavigate();
  const [guestName, setGuestName] = useState('영은');
  const [hostName, setHostName] = useState('수연');

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       navigate('/hostNickname');
//     }, 300); // 0.3초 후에 실행

//     return () => clearTimeout(timer); // 컴포넌트가 언마운트 될 때 타이머를 제거
//   }, [navigate]);

  //조사 설정
  const set_prepositional_particle = (name)=>{
    //name의 마지막 음절의 유니코드(UTF-16) 
    const charCode = name.charCodeAt(name.length - 1);
        
    //유니코드의 한글 범위 내에서 해당 코드의 받침 확인
    const consonantCode = (charCode - 44032) % 28;

    if(consonantCode === 0){
        //0이면 받침 없음 -> 를
        return `${name}가`;
    }
    //1이상이면 받침 있음 -> 을
    return `${name}이가`;
  }

  return (
    <BackGround>

      <Image bg={imageUrl}>
        <Contents>
          <Text>{set_prepositional_particle(guestName)}</Text>
          <Text>생각하는</Text>
          <Text>{hostName}</Text>
          <Text>만드는 중</Text>
        </Contents>      
      </Image>
    </BackGround>
  )
}

export default HostLoadingPage;

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
font-family: Spoqa Han Sans Neo;
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: normal;
`