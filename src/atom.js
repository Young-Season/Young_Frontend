import { atom } from 'recoil';
export const animalImageState = atom({
    key: "animalImageState",
    default: "",
});

export const userIdState = atom({
    key: 'userIdState',
    default: null,
});