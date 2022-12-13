import React from "react";
import Mission from "./aboutmission"
import Linehead from "./Core-component/line-headingleft";
const summary = ()=>{
    return(
        <>
        <div className="aboutsummary-wrp">
            <div className="container">
            <Linehead
            prefixhead="About"
            suffixhead="Summary " 
            />
            </div>
            <Mission />
        </div>
        </>
    )
}
export default summary;