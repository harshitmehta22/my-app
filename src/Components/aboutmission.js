import React from "react";
import missionimage from "../assests/images/pic4.jpg"
import missioncontent from "./missioncontent"
import { Mission } from "./missionproduct";
const mission = ()=>{
    return(
        <>
        <div className="container mission-wrp">
            <div className="mission-inside-wrp">
            {missioncontent.map(missioncontent =>(
                <Mission
                key={missioncontent.id}
                imagenew={missioncontent.imagenew}
                Namehead={missioncontent.Namehead}
                />
            ))}
            </div>
            </div>
        </>
    )
}
export default mission;