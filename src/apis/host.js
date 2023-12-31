import axios from "axios";
import { atom, useRecoilState, useRecoilValue } from "recoil";

export const baseUrl = "https://young-season.o-r.kr";

export const getHostTotalResult = (hostId) => {
  const url = `${baseUrl}/data/${hostId}`;
  return axios.get(url);
};
