import { atom } from "recoil";
export const animalImageState = atom({
  key: "animalImageState",
  default: "https://young-season.o-r.kr/public/images/000.png",
});

export const arrayState = atom({
  key: "arrayState",
  default: ["0", "0", "0", "0", "0"],
});

//hostid
export const userIdState = atom({
  key: "userIdState",
  default: null,
});

export const nicknameAtom = atom({
  key: "nickname",
  default: ``,
});

//token
export const tokenState = atom({
  key: "tokenState",
  default: '',
});

//guestNickname
export const guestNicknameState = atom({
  key: "guestNicknameState",
  default: '',
});