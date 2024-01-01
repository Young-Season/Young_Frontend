import axios from "axios";
import { atom, useRecoilState, useRecoilValue } from "recoil";
import { tokenState } from "../atom";

export const baseUrl = "https://young-season.o-r.kr";

export const getHostTotalResult = async (token, hostId) => {
  const url = `${baseUrl}/data/:${hostId}`;
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

export const getHostIndividualResult = async (token, hostId, guestId) => {
  const url = `${baseUrl}/data/:${hostId}/:${guestId}`;
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

export const getHostStats = async (token, hostId) => {
  const url = `${baseUrl}/stats/:${hostId}`;
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
