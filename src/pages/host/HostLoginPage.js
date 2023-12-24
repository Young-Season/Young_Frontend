
import styled from 'styled-components';
import BigButton from '../../../src/components/layout/BigButton';

const HostLoginPage = () => {
  const imageUrl = process.env.PUBLIC_URL + '/images/BG.png';


  const startKakao = () => {
    //카카오 로그인 여기에 구현
    console.log('start');
  }

  return (
    <BackGround>
      <Image bg={imageUrl}>
      
        <Contents>
          <Text>친구들이 생각하는 나는?</Text>
          
          <NicknameBox onClick={startKakao}>
            <BigButton textBox={<><img src={process.env.PUBLIC_URL + '/images/message-circle.png'} alt="kakao" /> <NicknameText>카카오로 시작하기</NicknameText></>}></BigButton>
          </NicknameBox>
        </Contents>
      
      </Image>
    </BackGround>
  )
}

export default HostLoginPage;

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
  width: 23.4375rem;
  height: 50.75rem;
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
padding-top: 48px;
cursor: pointer;
`

const NicknameText = styled.div`
color: var(--Brown, #64422E);
font-family: Spoqa Han Sans Neo;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
`