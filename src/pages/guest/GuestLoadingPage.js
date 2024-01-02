import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import {
  arrayState,
  guestNicknameState,
  nicknameAtom,
  userIdState,
} from "../../atom";
import { hostNicknameState } from "../../apis/guest";

const GuestLoadingPage = () => {
  const imageUrl = process.env.PUBLIC_URL + "/images/BG_blur.png";

  const navigate = useNavigate();
  const guestName = useRecoilValue(guestNicknameState);
  const hostName = useRecoilValue(hostNicknameState);
  const hostId = useRecoilValue(userIdState);

  const data = useRecoilValue(arrayState);

  const [myResultData, setMyResultData] = useState({}); // post 요청으로 받아온 데이터를 저장


  //게스트가 배열에 저장한 호스트의 이미지 결과 post
  const postMyResult = async () => {
    const baseUrl = "https://young-season.o-r.kr";
    const url = `${baseUrl}/responses`;
    const postData = {
      "hostId": hostId,
      "guestName": guestName,
      "animal": data[0],
      "emoji": data[1],
      "color": data[2],
      "first": data[3],
      "now": data[4], 
    };
    try {
      const response = await axios.post(url, postData);
      
      return response;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const navigateAfterPost = async () => {
      try{
        const response = await postMyResult();
        console.log(response.data);
        if(response.data.status === 201 || response.data.status === 400 || response.data.status === 404){
          console.log(response.data.message);
        }
        else{
          setMyResultData(response.data.data);
          navigate("/guestResult", {
            state: { myResultData: response.data.data },
        });
        }
        const timer = setTimeout(() => {
        }, 30000); 
        return () => clearTimeout(timer);
      }
      catch(error){
        console.error(error);
      }
    };
    navigateAfterPost();
  }, []);

  //조사 설정
  const set_prepositional_particle = (name) => {
    //name의 마지막 음절의 유니코드(UTF-16)
    const charCode = name.charCodeAt(name.length - 1);

    //유니코드의 한글 범위 내에서 해당 코드의 받침 확인
    const consonantCode = (charCode - 44032) % 28;

    if (consonantCode === 0) {
      //0이면 받침 없음 -> 를
      return `${name}가`;
    }
    //1이상이면 받침 있음 -> 을
    return `${name}이가`;
  };

  return (
    <BackGround>
      <Image bg={imageUrl}>
        <Contents>
          <Text>{set_prepositional_particle(guestName)}</Text>
          <Text>생각하는</Text>
          <Text>{hostName}</Text>
          <Text>만드는 중</Text>
        </Contents>
      </Image>
    </BackGround>
  );
};

export default GuestLoadingPage;

const BackGround = styled.div`
  display: flex;
  justify-content: center;
`;

const Image = styled.div`
  background-image: url(${(props) => props.bg});

  display: flex;
  align-items: center;
  justify-content: center;

  background-size: cover;
  background-position: center;
  width: 375px;
  height: 812px;
  flex-shrink: 0;
`;

const Contents = styled.div`
  flex-direction: column;
  align-items: center;

  width: 280px;
  display: flex;
`;
const Text = styled.div`
  color: var(--Brown, #64422e);
  text-align: center;
  font-family: Spoqa Han Sans Neo;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
