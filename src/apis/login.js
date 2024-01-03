import axios from "axios";


export const baseURL = "https://young-season.o-r.kr"

export const getLogin = async () => {
  try{
    const url = `${baseURL}/oauth/kakao`;
    const data = axios.get(url);
    // console.log(data);
    return data;

  }
  catch(error){
    console.error(error);
  }
}

export const postkakaoCallback = async (code) => {
  try{
    const url = `${baseURL}/oauth/kakao/callback?code=${code}`;
    const response = await axios.get(url);
    console.log(response.data);  // 서버로부터 받은 응답을 출력
    return response.data;
  }
  catch(error){
    console.error(error);  // 오류를 출력
  }
}

export const postNickname = async(userId, nickname) => {
  try {
    const url = `${baseURL}/signup`;
    const response = await axios.post(url, {
      "id": userId,
      "name": nickname
    });

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

