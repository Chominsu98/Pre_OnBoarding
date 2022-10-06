import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

// 현재경로를 실시간으로 저장해줄 컨텍스트를 하나 만들어줌
export const PathContext=createContext();

function Router({children}){
    const [now_path,change_now_path]=useState(window.location.pathname);
    // 현재의 경로를 디폴트로 상태를 둔다

    useEffect(()=>{
        const handleOnPopState=(e)=>{
            change_now_path(e.state?e.state.data:"/");
            // 전에 저장해둔 경로를 stack에서 빼내 다시 경로변경
        }
        window.addEventListener("popstate",handleOnPopState);

        return()=>{
            window.removeEventListener("popstate",handleOnPopState)
        }
    },[])
    return(
        <>
            <PathContext.Provider value={[now_path,change_now_path]}>
                {children}
            </PathContext.Provider>
        </>
    );
}

export default Router