import { atom } from 'recoil';
export const animalImageState = atom({
    key: "animalImageState",
    default: "https://young-season.o-r.kr/public/images/000.png",
});

export const userIdState = atom({
    key: 'userIdState',
    default: null,
});

export const arrayState = atom({
    key: "arrayState",
    default: ["0", "0", "0", "0", "0"],
})
