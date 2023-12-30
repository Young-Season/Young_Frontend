import React, {useEffect} from "react";
import axios from "axios";
import {atom, useRecoilState} from "recoil";
import { arrayState } from './atom';
export const baseUrl = 'https://young-season.o-r.kr';
export const hostNicknameState = atom({
    key: "hostNicknameState",
    default: "",
});
//랜딩페이지 HOST 이름 반환
export const GetGuestName = ()=>{
    const [hostNickname, setHostNickname] = useRecoilState(hostNickname);
    const hostId = "your-host-id";
    useEffect(()=>{
        axios.get(`${baseUrl}/names/${hostId}`)
        .then((response)=>{
            if(response.data.status === "200"){
                setHostNickname(response.data.data["host-name"]);
            }
        })
        .catch((error)=>{
            console.error("Error fetching data: ", error);
        })
    }, [hostId]);

}
export const postResponses = async()=>{
    const array = useRecoilValue(arrayState);
    let data = {
        "hostId": "...",	// string
        "guestName": "...", // string
        "animal": array[0], // int
        "emoji": array[1], // int
        "color": array[2], // int
        "first": array[3], // int
        "now": array[4] // int
      }
    try{
        const response = await axios.post("/responses", data);
        console.log(response);
    } catch (error){
        console.error(error);
    }
}