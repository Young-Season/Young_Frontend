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
  align-items: flex-start;
  padding: 0px;
  gap: 36px;
  width: 320px;
  height: 689px;
  left: 28px;
  top: calc(50% - 689px/2 + 11.5px);
background: #F6F9FF;
`
const FaceContainer2 = styled.div`;
width: 320px;
height: 320px;

background: #FFFFFF;
border-radius: 20px;
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

/* Frame 19 */

/* Auto layout */



/* Inside auto layout */
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;


/* 선택 버튼 */

box-sizing: border-box;

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px 20px;
gap: 10px;

width: 152px;
height: 52px;

background: #FFFFFF;
/* Light Brown */
border: 1px solid #866B5B;
box-shadow: inset -1px -2px 6px rgba(0, 0, 0, 0.15);
border-radius: 20px;

/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* 버튼 내용 */

width: 112px;
height: 18px;

font-family: 'Spoqa Han Sans Neo';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 18px;
/* identical to box height */
text-align: center;

color: #000000;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 1;


/* 선택 버튼 */

box-sizing: border-box;

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px 20px;
gap: 10px;

width: 152px;
height: 52px;

background: #FFFFFF;
/* Light Brown */
border: 1px solid #866B5B;
box-shadow: inset -1px -2px 6px rgba(0, 0, 0, 0.15);
border-radius: 20px;

/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;


/* 버튼 내용 */

width: 112px;
height: 18px;

font-family: 'Spoqa Han Sans Neo';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 18px;
/* identical to box height */
text-align: center;

color: #000000;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 1;


/* 선택 버튼 */

box-sizing: border-box;

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px 20px;
gap: 10px;

width: 152px;
height: 52px;

background: #FFFFFF;
/* Light Brown */
border: 1px solid #866B5B;
box-shadow: inset -1px -2px 6px rgba(0, 0, 0, 0.15);
border-radius: 20px;

/* Inside auto layout */
flex: none;
order: 2;
flex-grow: 0;


/* 버튼 내용 */

width: 112px;
height: 18px;

font-family: 'Spoqa Han Sans Neo';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 18px;
/* identical to box height */
text-align: center;

color: #000000;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 1;


/* 선택 버튼 */

box-sizing: border-box;

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px 20px;
gap: 10px;

width: 152px;
height: 52px;

background: #FFFFFF;
/* Light Brown */
border: 1px solid #866B5B;
box-shadow: inset -1px -2px 6px rgba(0, 0, 0, 0.15);
border-radius: 20px;

/* Inside auto layout */
flex: none;
order: 3;
flex-grow: 0;


/* 버튼 내용 */

width: 112px;
height: 18px;

font-family: 'Spoqa Han Sans Neo';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 18px;
/* identical to box height */
text-align: center;

color: #000000;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 1;


/* 선택 버튼 */

box-sizing: border-box;

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px 20px;
gap: 10px;

width: 152px;
height: 52px;

background: #FFFFFF;
/* Light Brown */
border: 1px solid #866B5B;
box-shadow: inset -1px -2px 6px rgba(0, 0, 0, 0.15);
border-radius: 20px;

/* Inside auto layout */
flex: none;
order: 4;
flex-grow: 0;


/* 버튼 내용 */

width: 112px;
height: 18px;

font-family: 'Spoqa Han Sans Neo';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 18px;
/* identical to box height */
text-align: center;

color: #000000;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 1;


/* 선택 버튼 */

box-sizing: border-box;

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px 20px;
gap: 10px;

width: 152px;
height: 52px;

background: #FFFFFF;
/* Light Brown */
border: 1px solid #866B5B;
box-shadow: inset -1px -2px 6px rgba(0, 0, 0, 0.15);
border-radius: 20px;

/* Inside auto layout */
flex: none;
order: 5;
flex-grow: 0;


/* 버튼 내용 */

width: 112px;
height: 18px;

font-family: 'Spoqa Han Sans Neo';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 18px;
/* identical to box height */
text-align: center;

color: #000000;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 1;
