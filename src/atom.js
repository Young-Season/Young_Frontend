import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "localStorage", // 고유한 key 값
  storage: localStorage,
})


export const animalImageState = atom({
  key: "animalImageState",
  default: "https://young-season.o-r.kr/public/images/000.png",
  effects_UNSTABLE: [persistAtom]
});

export const arrayState = atom({
  key: "arrayState",
  default: ["0", "0", "0", "0", "0"],
  effects_UNSTABLE: [persistAtom]
});

//hostid
export const userIdState = atom({
  key: "userIdState",
  default: null,
  effects_UNSTABLE: [persistAtom]
});

export const nicknameAtom = atom({
  key: "nickname",
  default: "",
  effects_UNSTABLE: [persistAtom]
});

//token
export const tokenState = atom({
  key: "tokenState",
  default: "",
  effects_UNSTABLE: [persistAtom]
});

//guestNickname
export const guestNicknameState = atom({
  key: "guestNicknameState",
  default: "",
  effects_UNSTABLE: [persistAtom]
});

//guestNickname
export const hostTotal = atom({
  key: "hostTotalDatas",
  default: "",
  effects_UNSTABLE: [persistAtom]
});
