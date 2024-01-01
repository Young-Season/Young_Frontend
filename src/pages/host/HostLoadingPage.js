import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { postkakaoCallback } from '../../apis/login';
import { useSetRecoilState } from 'recoil';
import { nicknameAtom, tokenState, userIdState } from '../../atom';

const HostLoadingPage = () => {
  const imageUrl = process.env.PUBLIC_URL + '/images/BG_blur.png';

  const navigate = useNavigate();
  const location = useLocation();
  const setUserId = useSetRecoilState(userIdState);
  const setToken = useSetRecoilState(tokenState);
  const setHostNickname = useSetRecoilState(nicknameAtom);

  useEffect(() => {
    const fetchCode = async () => {
      const urlParams = new URLSearchParams(location.search);
      const code = urlParams.get('code');
      if (code) {
        console.log(code);
        try{
          const data = await postkakaoCallback(code);
          console.log(data.id);
          setUserId(data.id);
          if (data && data.status === '200') {
            // 기존 유저
            setToken(data.token);
            console.log("호스트");
            console.log(data.hostName);
            setHostNickname(data.hostName);
            navigate('/deploy');
          }
          else if(data && data.status === '404'){
            //신규 가입자
            // navigate('/hostLoading');
            const timer = setTimeout(() => {
              navigate('/hostNickname');
            }, 300); // 0.3초 후에 실행
            return () => clearTimeout(timer); // 컴포넌트가 언마운트 될 때 타이머를 제거
          }
        }
        catch(error){
          alert("계정 정보가 없습니다");
          console.error('Error occurred in postkakaoCallback:', error);
        }
      }
    };
    fetchCode();


  }, [location, setUserId, navigate, setToken]);

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