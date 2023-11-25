import styled from 'styled-components';
import SmallButton from "../../components/layout/SmallButton";
import Ghost from "../../image/Ghost.png";
import Dog from "../../image/Dog.png";
import Bear from "../../image/Bear.png";
import Cat from "../../image/Cat.png";
import Fox from "../../image/Fox.png";
import Rabbit from "../../image/Rabbit.png";
import Squirrel from "../../image/Squirrel.png";
import { useContext } from 'react';
import { AnimalImageContext } from '../../context/AnimalImageContext';
import { Link } from 'react-router-dom';
function GuestFacePage(){
  const { setAnimalImage } = useContext(AnimalImageContext);
    const animals = [
      { name: '강아지', image: Dog },
      { name: '고양이', image: Cat },
      { name: '토끼', image: Rabbit },
      { name: '여우', image: Fox },
      { name: '곰', image: Bear },
      { name: '다람쥐', image: Squirrel },
    ];
    return (
        <FaceContainer>
            <FaceContainer2>
                <Image></Image>
            </FaceContainer2>
            <FaceContainer3>
                <Text>얼굴상</Text>
                <FaceContainer4>
                {animals.map((animal, index) => 
                <Link to="/guestemoji" key={index}>
                <SmallButton 
                  onClick={() => setAnimalImage(animal.image)}
                  contents={animal.name} 
                />
              </Link>
        )}
                </FaceContainer4>
            </FaceContainer3>
        </FaceContainer>
    );
  }
  export default GuestFacePage;
  const FaceContainer = styled.div`;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto 0;
  padding: 0px;
  height: 689px;
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
const Image = styled.div`;
background: url(${Ghost});

`

const FaceContainer3 = styled.div`;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0px;
gap: 24px;

height: 329px;
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
  gap: 16px;
`;



