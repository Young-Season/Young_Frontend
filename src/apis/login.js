import axios from "axios";

export const baseURL = "https://young-season.o-r.kr"

export const getLogin = async () => {
  try{
    const url = `${baseURL}/oauth/kakao`;
    const data = axios.get(url);
    console.log(data);
    return data;

  }
  catch(error){
    console.error(error);
  }
}

// export const postkakaoCallback = async (code) => {
//   try{
//     const url = `${baseURL}/oauth/kakao/callback?code=${code}`;
//     await axios.get(url)
//     .then((response) => {
//       console.log(response.data);  // 서버로부터 받은 응답을 출력
//       console.log("이 데이터 잘됨");
//       return response.data;
//     })
//     .catch((error) => {
//       console.error(error);  // 오류를 출력
//     });
//   }
//   catch(error){
//     console.error(error);
//   }
// }
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
