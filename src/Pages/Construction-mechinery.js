import React from "react";
import constructionimg from "../assests/images/bred_rent.jpg"
import missionimage from "../assests/images/rent-hydraulic.jpeg"
import Bannerbottom from "../Components/Core-component/banner-bottom"
const construct = () =>{
  return(
    <>
    <Bannerbottom
    bannerhead = "CONSTRUCTION MACHINERY ON RENT"
    />
    <div className="construction-wrp">
        <div className="container">
              <div className="construction-img">
                <img src={constructionimg}></img>
              </div>
              <div className="mission-wrp">
            <div className="mission-inside-wrp">
          <div className="row clearfix">
            <div className="col-md-4 col-sm-6">
                <div className="mission-image">
                <img src={ missionimage }></img>
                </div>
            </div>
            <div className="col-md-8 col-sm-6">
               <div className="mission-content-block">
               <h2 className="heading">Mission</h2>
               <ul>
                <li>To exercise wisdom and fairness in relationships with clients, employees and stakeholders.</li>
                <li>To exercise wisdom and fairness in relationships with clients, employees and stakeholders.</li>
                <li>To exercise wisdom and fairness in relationships with clients, employees and stakeholders.</li>
                <li>To exercise wisdom and fairness in relationships with clients, employees and stakeholders.</li>
                <li>To exercise wisdom and fairness in relationships with clients, employees and stakeholders.</li>
               </ul>
                </div>
            </div>
            </div>
            <div className="row clearfix">
            <div className="col-md-4 col-sm-6">
                <div className="mission-image">
                <img src={ missionimage }></img>
                </div>
            </div>
            <div className="col-md-8 col-sm-6">
               <div className="mission-content-block">
               <h2 className="heading">Mission</h2>
               <ul>
                <li>To exercise wisdom and fairness in relationships with clients, employees and stakeholders.</li>
                <li>To exercise wisdom and fairness in relationships with clients, employees and stakeholders.</li>
                <li>To exercise wisdom and fairness in relationships with clients, employees and stakeholders.</li>
                <li>To exercise wisdom and fairness in relationships with clients, employees and stakeholders.</li>
                <li>To exercise wisdom and fairness in relationships with clients, employees and stakeholders.</li>
               </ul>
                </div>
            </div>
            </div>
            <div className="row clearfix">
            <div className="col-md-4 col-sm-6">
                <div className="mission-image">
                <img src={ missionimage }></img>
                </div>
            </div>
            <div className="col-md-8 col-sm-6">
               <div className="mission-content-block">
               <h2 className="heading">Mission</h2>
               <ul>
                <li>To exercise wisdom and fairness in relationships with clients, employees and stakeholders.</li>
                <li>To exercise wisdom and fairness in relationships with clients, employees and stakeholders.</li>
                <li>To exercise wisdom and fairness in relationships with clients, employees and stakeholders.</li>
                <li>To exercise wisdom and fairness in relationships with clients, employees and stakeholders.</li>
                <li>To exercise wisdom and fairness in relationships with clients, employees and stakeholders.</li>
               </ul>
                </div>
            </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    </>
  )
}
export default construct;