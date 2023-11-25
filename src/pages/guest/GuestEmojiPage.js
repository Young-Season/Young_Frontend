import styled from 'styled-components';
import SmallButton from "../../components/layout/SmallButton";
import Ghost from "../../image/Ghost.png";
import Emoji1 from "../../image/emoji1.png";
import Emoji2 from "../../image/emoji2.png";
import Emoji3 from "../../image/emoji3.png";
import Emoji4 from "../../image/emoji4.png";
import Emoji5 from "../../image/emoji5.png";
import Emoji6 from "../../image/emoji6.png";
import Emoji7 from "../../image/emoji7.png";
import Emoji8 from "../../image/emoji8.png";
import { useContext } from 'react';
import { AnimalImageContext } from '../../context/AnimalImageContext';
function GuestEmojiPage(){
  const { animalImage } = useContext(AnimalImageContext);
  const emojis = [Emoji1, Emoji2, Emoji3, Emoji4, Emoji5, Emoji6, Emoji7, Emoji8];
    return (
        <FaceContainer>
            <FaceContainer2>
            <StyledImage src={animalImage} />
            </FaceContainer2>
            <FaceContainer3>
                <Text>얼굴상</Text>
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