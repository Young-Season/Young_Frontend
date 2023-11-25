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


  const FaceContainer = styled.div`;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto 0;
  padding: 0px;
  width: 320px;
  height: 689px;
background: #F6F9FF;

`
const FaceContainer2 = styled.div`;
width: 320px;
height: 320px;

background: #FFFFFF;
border-radius: 20px;

`
const StyledImage = styled.img`;
  background: url(${Ghost});

`

const FaceContainer3 = styled.div`;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0px;
gap: 24px;

width: 320px;
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
const FaceContainer4 = styled.div`;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-between;
align-items: flex-start;
align-content: flex-start;
padding: 0px;
gap: 16px;

width: 320px;
height: 188px;
`

