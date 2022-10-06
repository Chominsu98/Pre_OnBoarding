import React from "react";
import useRouter from "../hooks/useRouter";

function About(){
    const {push}=useRouter();

    return(
        <>
            <h1>about</h1>
            <div className="card">
                <button onClick={()=>push('/')}>
                go main
                </button>
            </div>
        </>
    );

}
export default About