import React from "react";
import experience from "../assests/images/pic5.jpg"
function Hero(props){
    return(
        <>
        <div className="experience-wrp">
            <div className="container clearfix">
                <div className="experience-image left">
                    <img src= { experience }></img>
                </div>
                <div className="experience-content left">
                    <div className="experince-block">
                        <h5 className="big-head color">{props.date}</h5>
                        <h3>{props.year}</h3>
                    </div>
                    <div className="experince-inner-content">
                        <h3 className="common-head-new">{props.head}</h3>
                        <p className="common-content">{props.subhead}</p>
                    </div>
                    <div className="experience-inner-btm">
                        <h5 className="common-head-new">{props.name}<br></br><strong>{props.founder}</strong></h5>
                        <a  href="#" className="get-in-btn">{props.getintouch}</a>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
export default Hero;