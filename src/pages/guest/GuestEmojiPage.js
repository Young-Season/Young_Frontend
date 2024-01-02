import styled from "styled-components";
import SmallButton from "../../components/layout/SmallButton";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { animalImageState, arrayState } from "../../atom";
import { hostNicknameState } from "../../apis/guest";
function GuestEmojiPage() {
  const navigate = useNavigate();
  const hostName = useRecoilValue(hostNicknameState);
  const animalImage = useRecoilValue(animalImageState);
  console.log("animalImage: ", animalImage);
  const [animalImage2, setAnimalImage2] = useRecoilState(animalImageState);
  const emojis = [
    "emoji1",
    "emoji2",
    "emoji3",
    "emoji4",
    "emoji5",
    "emoji6",
    "emoji7",
    "emoji8",
  ];
  const [postArray, setPostArray] = useRecoilState(arrayState);
  const handleButtonClick = async (index) => {
    let imageUrl = animalImage2;
    let emojiIndexString = (index + 1).toString();
    imageUrl = imageUrl.slice(0, -6) + emojiIndexString + imageUrl.slice(-5);
    setAnimalImage2(imageUrl);
    await new Promise((resolve) => {
      setPostArray((prevArray) => {
        let newArray = [...prevArray];
        newArray[1] = index + 1;
        console.log("index:", index);
        console.log(`array: ${postArray}`);
        return newArray;
      });
      resolve();
    });
    navigate("/guestcolor");
  };
  const getSubjectSuffix = (name) => {
    const lastChar = name.charAt(name.length - 1);
    const lastCharCode = lastChar.charCodeAt(0);
    if (lastCharCode < 44032 || lastCharCode > 55203) {
      return "가";
    }
    return (lastCharCode - 44032) % 28 === 0 ? "가" : "이가";
  };
  return (
    <FaceContainer>
      <FaceContainer2>
        <Image src={animalImage} />
      </FaceContainer2>
      <FaceContainer3>
        <Text>
          {hostName}
          {getSubjectSuffix(hostName)} 이모지라면
        </Text>
        <FaceContainer4>
          {emojis.map((emoji, index) => (
            <StyledLink to="/guestcolor" key={index}>
              <SmallButton
                onClick={() => handleButtonClick(index)}
                contents={
                  <img src={process.env.PUBLIC_URL + `/images/${emoji}.png`} />
                }
              />
            </StyledLink>
          ))}
        </FaceContainer4>
      </FaceContainer3>
    </FaceContainer>
  );
}
export default GuestEmojiPage;

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
