import styled from 'styled-components';
import UrlButton from "../../components/layout/UrlButton";
import { useRecoilState } from 'recoil';
import { animalImageState } from '../../context/AnimalImageState';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const GuestFacePage = () => {
  const [animalImage, setAnimalImage] = useRecoilState(animalImageState);
  const navigate = useNavigate(); // useNavigate 훅 호출
    
    const handleButtonClick = (name2) => {
      setAnimalImage(name2);
      navigate('/guestemoji');
    };
    return (
        <FaceContainer>
            <Text>얼굴상</Text> 
            <FaceContainer2>
                <Image src={process.env.PUBLIC_URL + '/images/Ghost.png'}></Image>
                <FaceContainer3>
                <Text1>친구에게 공유하고 내 이미지를 알아보세요!</Text1>
                <UrlButton content={"URL 들어가는 공간"}></UrlButton>
                </FaceContainer3>
            </FaceContainer2>
            
        </FaceContainer>
    );
  }
  export default GuestFacePage;
const FaceContainer = styled.div`;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: 0px;
  padding-top: 100px;
  gap: 30px;
  background: #F6F9FF;
  @media (min-width: 480px) {
    width: 480px;
    height: auto;
  }
  @media (min-width: 576px) {
    width: 576px;
    height: auto;
  }
  @media (min-width: 768px) {
    width: 768px;
    height: auto;
  }
`
const FaceContainer2 = styled.div`;
height: 320px;
background: #FFFFFF;
border-radius: 20px;

`
const Image = styled.img`;
`
const FaceContainer3 = styled.div`;
display: flex;
flex-direction: column;
align-items: center;
padding: 0px;
gap: 12px;

`
const Text = styled.div`;
font-family: 'Spoqa Han Sans Neo';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 25px;
text-align: center;
color: #000000;
`
const Text1 = styled.div`;
font-family: 'Spoqa Han Sans Neo';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 20px;
/* identical to box height */

/* Brown */
color: #64422E;
`
