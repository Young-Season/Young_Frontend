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