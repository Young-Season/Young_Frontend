import axios from "axios";


export const baseURL = "https://young-season.o-r.kr"

export const postGuestLogin = async (hostId, nickname) => {
  try{
    // 3248357222
    // const url = `${baseURL}/guestnames?hostId=${hostId}&name=${nickname}`;
    const url = `${baseURL}/guestnames?hostId=3248357222&name=${nickname}`;
    const data = axios.get(url);
    console.log(data);
    return data;
  }
  catch(error){
    console.log("에러 발생발생");
    console.error(error);
  }
}