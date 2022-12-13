import React from "react";
import Heading from "./Core-component/Heading";
// import tender from "../assests/images/new-tender.png";
import nwcontent from "./servicecontent";
import { Service } from "./serviceproductbottom";

export default function Servicepart(){
    return(
<>
<div className="servicepart-wrp">
    <div className="container">
        <div className="service-block-wrp row">
        {nwcontent.map(nwcontent =>(
                <Service
                key={nwcontent.id}
                image={nwcontent.image}
                heading={nwcontent.heading}
                subheading={nwcontent.subheading}
                content={nwcontent.content}
                nwcontent={nwcontent.nwcontent}
                />
            ))}
        </div>
    </div>

</div>
</>
    )
}
// const servicespart = () =>{
//     return(
        <>
        {/* <div className="servicepart-wrp">
            <div className="container">
                <div className="service-block-wrp row">
                    <div className="services-block col-md-4 sm-4">
                        <div className="service-image">
                            <img src= { tender } ></img>
                        </div>
                        <div className="service-heading Sercice-head">
                            <h4 className="heading">
                                Tender
                            </h4>
                            <h4 className="heading">
                                निविदा
                            </h4>
                            <p className="common-content">Check out the ongoing invitation of bids for large projects that must be submitted within a finite timeline</p>
                            <a href="#">
                                <p>BOUNDARY - B/26 / Tender Construction of Boundary Wall, Varanasi Uttar Pradesh ( UP)</p>
                            </a>
                            <a href="#">Read More <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                        </div>
                    </div>
                    <div className="services-block naukri-block col-md-4 sm-4">
                        <div className="service-image">
                            <img src= { tender } ></img>
                        </div>
                        <div className="service-heading Sercice-head">
                            <h4 className="heading">
                                Tender
                            </h4>
                            <h4 className="heading">
                                निविदा
                            </h4>
                            <p className="common-content">Check out the ongoing invitation of bids for large projects that must be submitted within a finite timeline</p>
                            <a href="#">
                                <p>BOUNDARY - B/26 / Tender Construction of Boundary Wall, Varanasi Uttar Pradesh ( UP)</p>
                            </a>
                            <a href="#">Read More <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                            </div>
                    </div>
                    <div className="services-block labour-block col-md-4 sm-4">
                        <div className="service-image">
                            <img src= { tender } ></img>
                        </div>
                        <div className="service-heading Sercice-head">
                            <h4 className="heading">
                                Tender
                            </h4>
                            <h4 className="heading">
                                निविदा
                            </h4>
                            <p className="common-content">Check out the ongoing invitation of bids for large projects that must be submitted within a finite timeline</p>
                            <a href="#">
                                <p>BOUNDARY - B/26 / Tender Construction of Boundary Wall, Varanasi Uttar Pradesh ( UP)</p>
                            </a>
                            <a href="#">Read More <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                            </div>
                    </div>
                </div>
            </div>
        </div> */}
        </>
//     );
// }
// export default servicespart