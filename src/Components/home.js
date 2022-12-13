import React from "react";
import Appservices from './services';
import Appbanner from './banner';
import Appservicepart from './servicespart';
import Experinceblock from './experienceblock';
import Solutions from './solutions';
import Testimonial from './testimonial-home';
import Contactus from './contactus';
import ScrollButton from "./scrollbutton";
const home = () =>{
    return(
        <>
        <main>
        <Appbanner/>
        <Appservices/>
        <Appservicepart/>
        <Experinceblock
           date="22"
           year="Years of Experience"
           head="Building Construction/piling and pile foundation in Indore Madhya pradesh India. We"
           subhead="is One Of The Fastest Growing Construction service Provider Company in Indore (M.P) India. We are one of the best civil contractor in India. Since Commencement of Business in 2001 the Company has"
           name="AK Singh"
           founder="Founder"
           getintouch="GET IN TOUCH"
           />
           <Solutions />
           <Testimonial/>
           <Contactus />
           <ScrollButton />
        </main>
        </>
    );
}
export default home;