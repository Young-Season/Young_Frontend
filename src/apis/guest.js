import React, {useEffect} from "react";
import axios from "axios";
import {atom, useRecoilState} from "recoil";
export const baseUrl = 'https://young-season.o-r.kr';
export const hostNicknameState = atom({
    key: "hostNicknameState",
    default: "",
});
//랜딩페이지 HOST 이름 반환
export default function Guest(){
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