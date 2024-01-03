import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SmallButton from "../../components/layout/SmallButton";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";

import { hostNicknameState, usePostResponses } from "../../apis/guest";
import { useRecoilState } from "recoil";
import { animalImageState, arrayState } from "../../atom";

function GuestFacePage() {
  const hostName = useRecoilValue(hostNicknameState);
  const [animalImage, setAnimalImage] = useRecoilState(animalImageState);
  const [postArray, setPostArray] = useRecoilState(arrayState);
  const [animalName, setAnimalName] = useState("");
  const navigate = useNavigate(); // useNavigate 훅 호출
  const postResponses = usePostResponses();
  const animals = ["강아지", "고양이", "토끼", "여우", "곰", "다람쥐"];
  const handleButtonClick = async (index) => {
    // console.log(`index: ${index}`);
    let imageUrl = animalImage;
    imageUrl = imageUrl.slice(0, -5) + (index + 1) + imageUrl.slice(-4);
    // console.log(imageUrl);
    setAnimalImage(imageUrl);
    // console.log(animalImage);

    // Wrap setArray in a Promise
    await new Promise((resolve) => {
      setPostArray((prevArray) => {
        let newArray = [...prevArray];
        newArray[0] = index + 1;
        // console.log("index:", index);
        // console.log(`array: ${postArray}`);
        return newArray;
      });

      resolve();
    });
    navigate("/guestemoji", { replace: true });
  };

  const getSubjectSuffix = (name) => {
    const lastChar = name.charAt(name.length - 1);
    const lastCharCode = lastChar.charCodeAt(0);
    if (lastCharCode < 44032 || lastCharCode > 55203) {
      return "는"; // 한글이 아닌 경우에는 '이'를 반환
    }
    return (lastCharCode - 44032) % 28 === 0 ? "는" : "은";
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
          00상이야!{" "}
        </Text>
        <FaceContainer4>
          {animals.map((animal, index) => (
            <SmallButton
              onClick={() => handleButtonClick(index)}
              contents={animal}
              key={index}
            ></SmallButton>
          ))}
        </FaceContainer4>
      </FaceContainer3>
    </FaceContainer>
  );
}
export default GuestFacePage;
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
