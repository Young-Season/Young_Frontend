import styled from 'styled-components';
import SmallButton from "../../components/layout/SmallButton";
import Ghost from "../../image/Ghost.png";
import Dog from "../../image/Dog.png";
import Bear from "../../image/Bear.png";
import Cat from "../../image/Cat.png";
import Fox from "../../image/Fox.png";
import Rabbit from "../../image/Rabbit.png";
import Squirrel from "../../image/Squirrel.png";
import Emoji1 from "../../image/emoji1.png";
import Emoji2 from "../../image/emoji2.png";
import Emoji3 from "../../image/emoji3.png";
import Emoji4 from "../../image/emoji4.png";
import Emoji5 from "../../image/emoji5.png";
import Emoji6 from "../../image/emoji6.png";
import Emoji7 from "../../image/emoji7.png";
import Emoji8 from "../../image/emoji8.png";
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { animalImageState } from '../../context/AnimalImageState';
function GuestEmojiPage(){
  const animalImage = useRecoilValue(animalImageState);
  const emojis = [Emoji1, Emoji2, Emoji3, Emoji4, Emoji5, Emoji6, Emoji7, Emoji8];
  const image = animalImage ? require(`../../image/${animalImage}.png`).default : Ghost;
  // const image = require(`../../image/${animalImage}.png`).default;
  return (
        <FaceContainer>
            <FaceContainer2>
              <StyledImage src={image} /> 
            </FaceContainer2>
            <FaceContainer3>
                <Text>얼굴상</Text>
                <Text>{animalImage}</Text>
                <FaceContainer4>
                {emojis.map((emoji, index) => 
                  <SmallButton 
                    contents={<img src={emoji}/>} 
                    key={index}
                  />
                 )}

                </FaceContainer4>
            </FaceContainer3>
        </FaceContainer>
    );
  }
  export default GuestEmojiPage;

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
const StyledImage = styled.img`;
width: 320px;
height: 320px;

`

const FaceContainer3 = styled.div`;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0px;
gap: 40px;
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
const FaceContainer4 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; // 한 줄에 두 개의 열 생성
  justify-items: center; // 각 항목을 그리드 셀의 중앙에 배치
  align-items: center;
  padding: 0px;
  gap: 20px;
  padding-bottom: 100px;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
`;



