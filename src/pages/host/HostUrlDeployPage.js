import styled from 'styled-components';
import { useEffect } from 'react';
import UrlButton from "../../components/layout/UrlButton";
import { useRecoilState } from 'recoil';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const {Kakao} = window;
const GuestFacePage = () => {
  const navigate = useNavigate(); // useNavigate 훅 호출
  const realUrl = "http://localhost:3000";
  //로컬주소
  const resultUrl = "http://localhost:3000";
  useEffect(()=>{
    Kakao.cleanup();
    Kakao.init("9769e69ba2b11621a50723827584b67e")
    console.log(Kakao.isInitialized);
  }, []) 
  const shareKaKao = () =>{
    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: '오늘의 디저트',
        description: '아메리카노, 빵, 케익',
        imageUrl:
          'https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg',
        link: {
          mobileWebUrl: realUrl,
        },
      },
      buttons: [
        {
          title: '웹으로 이동',
          link: {
            mobileWebUrl: realUrl,
          },
        },
        
      ],
    });
  } 
    return (
        <FaceContainer>
            <Text>얼굴상</Text> 
            <FaceContainer2>
                <Image src={process.env.PUBLIC_URL + '/images/Ghost.png'}></Image>
                <FaceContainer3>
                <Text1>친구에게 공유하고 내 이미지를 알아보세요!</Text1>
                <UrlButton onClick = {()=>shareKaKao} text={"URL 들어가는 공간"}></UrlButton>
                </FaceContainer3>
            </FaceContainer2>
            
        </FaceContainer>
    );
  }
  export default GuestFacePage;
  const FaceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: #F6F9FF;
  height: 100vh;
  @media (min-width: 480px) {
    width: 480px;
    margin: 0 auto; // 추가된 부분: 뷰포트가 480px보다 클 때 가운데 정렬
  }
`
const FaceContainer2 = styled.div`;
height: 320px;
background: #F6F9FF;
border-radius: 20px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 3.75rem;

`
const Image = styled.img`;
margin: 3.75rem;
`
const FaceContainer3 = styled.div`;
display: flex;
flex-direction: column;
align-items: center;
margin: 0px;

`
const Text = styled.div`;
font-family: 'Spoqa Han Sans Neo';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 25px;
text-align: center;
// color: #000000;
margin-top: 7.94rem;
margin-bottom: 3.75rem;
`
const Text1 = styled.div`;
font-family: 'Spoqa Han Sans Neo';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 20px;
margin-bottom: 3.75rem;
width: 100%;
text-align: center;
color: #64422E;
`
