import React from "react";
import { useContext } from "react";
import {PathContext} from "../Components/Router"

function useRouter(){
    const [now_path,change_now_path]=useContext(PathContext);

    const push=(url)=>{
        console.log(url)
        window.history.pushState({data:url==="/about"?"/about":"/"},"",url);
        change_now_path(url);
        // 바뀐 경로를 상태에다가도 업데이트 해줌
    }
    return {push}
}
export default useRouter