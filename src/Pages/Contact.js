import React from "react";
import contactimage from "../assests/images/contact_us.jpg"
import Form from "../Components/form"
const cont = () =>{
    return(
        <>
         <div className="overlay-bg">
             <div className="container text-center">
                    <div class="mt-bnr-inr-entry">
                    <div class="banner-title-outer">
                    <div class="banner-title-name">
                    <h2 class="m-b0 Head">CONNECT WITH US</h2>
                    </div>
                    </div>
                    
                </div>
             </div>
         </div>
         <div className="container">
            <img src={ contactimage}></img>
            <div className="get-in-touch-wrp">
                <div className="row">
                    <div className="col-md-8 col-sm-6">
                    <div className='cmn-heading'>
                    <div class="mt-separator-outer separator-left">
                       <div class="mt-separator">
                        <h3 class="text-uppercase sep-line-one"><span>GET</span> IN TOUCH</h3>
                       </div>
                    </div>
                    </div>
                    <div className="form-wrp">
                    <Form />
                    </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                    <div className='cmn-heading'>
                    <div class="mt-separator-outer separator-left">
                       <div class="mt-separator">
                        <h3 class="text-uppercase sep-line-one"><span>Contact</span> Info</h3>
                       </div>
                    </div>
                    </div>
                        <div class="contact-block clearfix text-white">
                        <div class="mt-icon-box-wraper left p-b40">
                        <div class="icon-xs"><i class="fa fa-phone"></i></div>
                        <div class="icon-content">
                        <h5 class="m-t0 font-weight-500">Phone number</h5>
                        <p>+91 7314995740</p>
                        </div>
                        </div>
                        <div class="mt-icon-box-wraper left p-b40">
                        <div class="icon-xs"><i class="fa fa-envelope"></i></div>
                        <div class="icon-content">
                        <h5 class="m-t0 font-weight-500">Email address</h5>
                        <p>info@tiarainfrastructure.com</p>
                        </div>
                        </div>
                        <div class="mt-icon-box-wraper left p-b40">
                        <div class="icon-xs"><i class="fa fa-map-marker"></i></div>
                        <div class="icon-content">
                        <h5 class="m-t0 font-weight-500">Address info</h5>
                        <p>Tiara House, 782 Sai Kripa Colony Indore (M.P) - 452010</p>
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mapouter"><div class="gmap_canvas"><iframe class="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Tiara Infrastructure&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div></div>
         </div>
        </>
    );
}
export default cont;