import React, { useEffect } from "react";
import { useContext } from "react";
import { PathContext } from "./Router";

function Route({path,component}){
    const [now_path]=useContext(PathContext);

    if (now_path===path){
        return component
    }
    else{
        return null
    }


}
export default Route