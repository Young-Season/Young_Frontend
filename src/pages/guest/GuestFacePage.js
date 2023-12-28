import React from 'react';
import styled from 'styled-components';
import SmallButton from "../../components/layout/SmallButton";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { hostNicknameState } from '../../apis/guest';
import { useRecoilState } from 'recoil';
import { animalImageState } from '../../atom';
function GuestFacePage(){
  const hostName = useRecoilValue(hostNicknameState);
  const [animalImage, setAnimalImage] = useRecoilState(animalImageState);
  const navigate = useNavigate(); // useNavigate 훅 호출
    const animals = [
      { name: '강아지', name2: "Dog" },
      { name: '고양이', name2: "Cat" },
      { name: '토끼', name2: "Rabbit" },
      { name: '여우', name2: "Fox" },
      { name: '곰', name2: "Bear" },
      { name: '다람쥐', name2: "Squirrel" },
    ];
    const handleButtonClick = (animalName) => {
      let imageUrl;
      switch (animalName){
        case "Dog":
          imageUrl = 'https://example.com/images/001.jpg';
          break;
        case "Cat":
          imageUrl = 'https://example.com/images/002.jpg';
          break;
        case "Rabbit":
          imageUrl = 'https://example.com/images/003.jpg';
          break;
        case "Fox":
          imageUrl = 'https://example.com/images/004.jpg';
          break;
        case "Bear":
            imageUrl = 'https://example.com/images/005.jpg';
            break;
        case "Squirrel":
          imageUrl = 'https://example.com/images/006.jpg';
          break;
        default:
          imageUrl = "";  
        }
        setAnimalImage(imageUrl);
      }
      navigate('/guestemoji');
    
    const getSubjectSuffix = (name) => {
      const lastChar = name.charAt(name.length - 1);
      const lastCharCode = lastChar.charCodeAt(0);
    
      if (lastCharCode < 44032 || lastCharCode > 55203) {
        return '는'; // 한글이 아닌 경우에는 '이'를 반환
      }
    
      return ((lastCharCode - 44032) % 28) === 0 ? '는' : '은';
    }
    return (
        <FaceContainer>
            <FaceContainer2>
              <Image src={process.env.PUBLIC_URL + '/images/Ghost.png'}></Image>
            </FaceContainer2>
            <FaceContainer3>
            <Text>{hostName}{getSubjectSuffix(hostName)} 00상이야! </Text>          
                <FaceContainer4>
                {animals.map((animal, index) => 
                <StyledLink to="/guestemoji" key={index}>
                    <SmallButton 
                      onClick={() => handleButtonClick(animal.name2)}
                      contents={animal.name} 
                    />
                    </StyledLink>
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
  margin: auto;
  padding: 0px;
  padding-top: 100px;
  gap: 30px;
  background: #F6F9FF;

  width: 25rem;
  height: 50.75rem;
  @media (max-width: 400px) {
    width: 23rem;
  }
  @media (max-width: 370px) {
    width: 21rem;
  }
`
const FaceContainer2 = styled.div`;
height: 320px;
background: #FFFFFF;
border-radius: 20px;

`
const Image = styled.img`
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





