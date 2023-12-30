import axios from "axios";

export const baseURL = "https://young-season.o-r.kr"

export const getLogin = async () => {
  try{
    const url = `${baseURL}/auth/kakao`;
    return axios.get(url);

  }
  catch(error){
    console.error(error);
  }
}
export const postkakaoCallback = async (code) => {
  try{
    const url = `${baseURL}/oauth/kakao/callback`;
    axios.get('/oauth/kakao/callback')
    .then((response) => {
      console.log(response.data);  // 서버로부터 받은 응답을 출력
      return response.data;
    })
    .catch((error) => {
      console.error(error);  // 오류를 출력
    });
  }
  catch(error){
    console.error(error);
  }
}