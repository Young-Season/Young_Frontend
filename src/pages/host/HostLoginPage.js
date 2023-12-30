import styled from 'styled-components';
import { getLogin, postkakaoCallback } from '../../apis/login';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { userIdState } from '../../atom';


const HostLoginPage = () => {
  const imageUrl = process.env.PUBLIC_URL + '/images/BG.png';
  const navigate = useNavigate();
  const location = useLocation();
  const setUserId = useSetRecoilState(userIdState);
  
  
  const startKakao = async () => {
    //카카오 로그인 여기에 구현
    try{
      console.log('start');
      const data = await getLogin();
      console.log(data);

      console.log("방가방가");
      
    }
    catch(error){
      console.error('Login failed:', error);
      console.log("하이");
      // navigate('/hostLoading');
    }
  }
  
  useEffect(()=>{
    const fetchCode = async () => {
      const urlParams = new URLSearchParams(location.search);
      const code = urlParams.get('code');
      if (code) {
        console.log(code);
        const data = await postkakaoCallback(code);
        console.log(data);

        if (data && data.status === '200') {
          setUserId(data.id);
          // 나중에 hostUrlDeployPage로 변경
          navigate('/hostLoading');
        }
        else if(data && data.status === '404'){
          navigate('/hostLoading');
        }
        // else{
        //   navigate('/hostLoading');
        // }
      }
    };
    fetchCode();
  }, [location, setUserId]);

  return (
    <BackGround>
      <Image bg={imageUrl}>
      
        <Contents>
          <Text>친구들이 생각하는 나는?</Text>
          
          <NicknameBox onClick={startKakao}>
            {/* <BigButton textBox={<> */}
            <KakaoButton href="https://young-season.o-r.kr/oauth/kakao">
              <img src={process.env.PUBLIC_URL + '/images/message-circle.png'} alt="kakao" />
              <NicknameText>카카오로 시작하기</NicknameText>


            </KakaoButton>

            {/* </BigButton> */}
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
const KakaoButton = styled.a`
  display: flex;
  width: 260px;
  height: 48px;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.85);
  background: #FEE500;

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
c
olor: var(--Brown, #64422E);
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