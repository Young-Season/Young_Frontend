import styled from 'styled-components';
import SmallButton from "../../components/layout/SmallButton";
import { useRecoilState } from 'recoil';
import { animalImageState } from "../../atom";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { hostNicknameState } from '../../apis/guest';
function GuestFacePage(){
  const hostName = useRecoilValue(hostNicknameState);
  const animalImage = useRecoilValue(animalImageState)
  const [animalImage2, setAnimalImage2] = useRecoilState(animalImageState);
  const navigate = useNavigate(); // useNavigate 훅 호출
    const presentImpressions = ['밝은', '다정한', '웃긴', '어른스러운',
    '섬세한','시크한','투명한', '줏대있는'];
    const handleButtonClick = (index) => {
      let imageUrl = animalImage2;
      imageUrl = imageUrl.slice(0,-9) + (index+1)+imageUrl.slice(-8);
      setAnimalImage2(imageUrl);
      navigate('/guestface');
    };
    const getSubjectSuffix = (name)=>{
      const lastChar = name.charAt(name.length-1);
      const lastCharCode = lastChar.charCodeAt(0);
      if (lastCharCode < 44032 || lastCharCode > 55203){
        return "는"
      }
      return ((lastCharCode - 44032)% 28) === 0 ? "는" : "은"
    }
    const hostNickname = "백엔드에서 받은 이름";
    return (
        <FaceContainer>
            <FaceContainer2>
                <Image src={animalImage}></Image>
            </FaceContainer2>
            <FaceContainer3>
                <Text>지금 생각하는 {hostName}{getSubjectSuffix(hostName)}</Text>         
                <FaceContainer4>
                {presentImpressions.map((presentImpression, index) => 
                <StyledLink to="/guestface" key={index}>
                    <SmallButton 
                      onClick={() => handleButtonClick(index)}
                      contents={presentImpression} 
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