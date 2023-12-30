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

// // 문서 내용 불러오기
// export const getDocsContent = async (title : string) => {
//     try{
//         const response = await axios.get(`${baseURL}/recent/docs/${title}/`);
//         console.log(response);
//         if(response.status === 200){
//             return response.data;
//         }
//         else{
//             console.log('Error occurred while fetching backlinks');
//         }
//     }
//     catch(error){
//         console.error(error);
//     }
// };