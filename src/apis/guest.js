import React, { useEffect } from "react";
import axios from "axios";
import { atom, useRecoilState, useRecoilValue } from "recoil";
import { arrayState, userIdState } from "../atom";
export const baseUrl = "https://young-season.o-r.kr";
export const hostNicknameState = atom({
  key: "hostNicknameState",
  default: "",
});
//랜딩페이지 HOST 이름 반환
export const GetGuestName = async () => {
  const [hostNickname, setHostNickname] = useRecoilState(hostNickname);
  const hostid = useRecoilValue(userIdState);
  try {
    const response = await axios.get("/names", {
      params: {
        hostId: hostid,
      },
    });
    setHostNickname(response.data.data.hostName);
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
};
//guest의 response post
export const usePostResponses = async () => {
  const array = useRecoilValue(arrayState);
  const hostId = useRecoilValue(userIdState);
  const postResponses = async () => {
    let data = {
      hostId: hostId, // string
      guestName: "...", // string
      animal: array[0], // int
      emoji: array[1], // int
      color: array[2], // int
      first: array[3], // int
      now: array[4], // int
    };
    try {
      const response = await axios.post("/responses", data);
      console.log(response);
      return response;
    } catch (error) {
      console.error(error);
    }
  };
  return postResponses;
};

//게스트가 호스트의 다른 게스트들 결과 열람하는 api
export const getOtherGuestsResult = (hostId) => {
  const url = `${baseUrl}/results?hostId=${hostId}`;
  return axios.get(url);
};
