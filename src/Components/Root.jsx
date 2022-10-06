import React from "react";
import useRouter from "../hooks/useRouter";

function Root(){
    const {push}=useRouter();

    return(
        <>
            <h1>Root</h1>
            <div className="card">
                <button onClick={()=>push("/about")}>
                about
                </button>
            </div>
        </>
    );
}
export default Root