import styled from 'styled-components';
import SmallButton from "../../components/layout/SmallButton";
import { useRecoilState } from 'recoil';
import { animalImageState } from '../../context/AnimalImageState';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function GuestFacePage(){
  const [animalImage, setAnimalImage] = useRecoilState(animalImageState);
  const navigate = useNavigate(); // useNavigate 훅 호출
    const presentImpressions = [
      { name: '밝은', name2: "Dog" },
      { name: '다정한', name2: "Cat" },
      { name: '웃긴', name2: "Rabbit" },
      { name: '어른스러운', name2: "Fox" },
      { name: '섬세한', name2: "Bear" },
      { name: '시크한', name2: "Squirrel" },
      { name: '투명한', name2: "Squirrel" },
      { name: '줏대있는', name2: "Squirrel" },
    ];
    const handleButtonClick = (name2) => {
      setAnimalImage(name2);
      navigate('/guestemoji');
    };
    return (
        <FaceContainer>
            <FaceContainer2>
                <Image src={process.env.PUBLIC_URL + '/images/Ghost.png'}></Image>
            </FaceContainer2>
            <FaceContainer3>
                <Text>얼굴상</Text>         
                <FaceContainer4>
                {presentImpressions.map((presentImpression, index) => 
                <Link to="/guestemoji" key={index}>
                    <SmallButton 
                      onClick={() => handleButtonClick(presentImpression.name2)}
                      contents={presentImpression.name} 
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