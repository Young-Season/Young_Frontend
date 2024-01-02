import styled from "styled-components";
import SmallButton2 from "../../components/layout/SmallButton2";
import { useRecoilState } from "recoil";
import { animalImageState, arrayState } from "../../atom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { hostNicknameState } from "../../apis/guest";
function GuestColorPage() {
  const hostName = useRecoilValue(hostNicknameState);
  const animalImage = useRecoilValue(animalImageState);
  const [animalImage2, setAnimalImage2] = useRecoilState(animalImageState);
  const navigate = useNavigate(); // useNavigate 훅 호출
  const [postArray, setPostArray] = useRecoilState(arrayState);
  const colors = [
    "빨간색",
    "노란색",
    "초록색",
    "파란색",
    "보라색",
    "분홍색",
    "흰색",
    "검은색",
  ];
  const handleButtonClick = async (index) => {
    let imageUrl = animalImage2;
    imageUrl = imageUrl.slice(0, -7) + (index + 1) + imageUrl.slice(-6);
    setAnimalImage2(imageUrl);
    await new Promise((resolve) => {
      setPostArray((prevArray) => {
        let newArray = [...prevArray];
        newArray[2] = index + 1;
        console.log("index:", index);
        console.log(`array: ${postArray}`);
        return newArray;
      });
      resolve();
    });
    navigate("/firstimpression");
  };
  const getSubjectSuffix = (name) => {
    const lastChar = name.charAt(name.length - 1);
    const lastCharCode = lastChar.charCodeAt(0);
    if (lastCharCode < 44032 || lastCharCode > 55203) {
      return "와"; // 한글이 아닌 경우에는 '이'를 반환
    }
    return (lastCharCode - 44032) % 28 === 0 ? "와" : "과";
  };
  return (
    <FaceContainer>
      <FaceContainer2>
        <Image src={animalImage}></Image>
      </FaceContainer2>
      <FaceContainer3>
        <Text>
          {hostName}
          {getSubjectSuffix(hostName)}
          <br />
          어울리는 색은...{" "}
        </Text>
        <FaceContainer4>
          {colors.map((color, index) => (
            <StyledLink to="/firstimpression" key={index}>
              <SmallButton2
                onClick={() => handleButtonClick(index)}
                contents={color}
                index={index}
              />
            </StyledLink>
          ))}
        </FaceContainer4>
      </FaceContainer3>
    </FaceContainer>
  );
}
export default GuestColorPage;
const FaceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: 0px;
  padding-top: 100px;
  gap: 30px;
  background: #f6f9ff;

  width: 25rem;
  height: 50.75rem;
  @media (max-width: 400px) {
    width: 23rem;
  }
  @media (max-width: 370px) {
    width: 21rem;
  }
`;
const FaceContainer2 = styled.div`
  height: 320px;
  background: #ffffff;
  border-radius: 20px;
`;
const Image = styled.img`
  width: 320px;
  height: 320px;
`;

const FaceContainer3 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 40px;
`;
const Text = styled.div`
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  text-align: center;
  color: #000000;
`;
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
