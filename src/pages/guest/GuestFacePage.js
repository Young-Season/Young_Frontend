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