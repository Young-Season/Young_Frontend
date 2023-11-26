import styled from 'styled-components';
import BigButton from '../../../src/components/layout/BigButton';

const HostLoadingPage = () => {
  const imageUrl = process.env.PUBLIC_URL + '/images/BG_blur.png';


  const startKakao = () => {
    //카카오 로그인 여기에 구현
    console.log('start');
  }

  return (
    <BackGround>

      <Image bg={imageUrl}>
        <Contents>
          <Text>내 공간 생성 완료!</Text>
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
font-family: Spoqa Han Sans Neo;
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: normal;
`