import axios from "axios";
import { atom, useRecoilState, useRecoilValue } from "recoil";
import { tokenState } from "../atom";

export const baseUrl = "https://young-season.o-r.kr";

// 호스트가 게스트들에게 받은 총 결과 열람
export const getHostTotalResult = async (token, hostId) => {
  const url = `${baseUrl}/data/${hostId}`;
  console.log(url);
  console.log(token);
  console.log(hostId);
  try {
    const data = await axios.get(url, {
      headers: {
        // Authorization: `Bearer ${token}`
        token: token,
      },
    });
    console.log(data);
    return data.data;
  } catch (error) {
    console.error(error);
  }
};

// 호스트가 각자 게스트의 결과 열람
export const getHostIndividualResult = async (token, hostId, guestId) => {
  const url = `${baseUrl}/data/${hostId}/${guestId}`;
  try {
    const response = await axios.get(url, {
      headers: {
        token: token,
      },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};

// 호스트가 질문별 통계 열람
export const getHostStats = async (token, hostId) => {
  const url = `${baseUrl}/stats/${hostId}`;
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const refreshToken = async (token, setTokenState) => {};
