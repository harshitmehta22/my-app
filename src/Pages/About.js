import React from "react";
import experience from "../assests/images/pic5.jpg"
import Aboutteam from "../Components/Aboutteam"
import Aboutsummary from "../Components/aboutsummary"
import Aboutquality from "../Components/qualityhead"
import Aboutaccordian from "../Components/qualityacc"
import Experinceblock from "../Components/experienceblock"
import Bannerbottom from "../Components/Core-component/banner-bottom"
const about = ()=>{
    return(
        <>
        <Bannerbottom 
          bannerhead ="ABOUT THE COMPANY"
        />
         <Experinceblock
           date="22"
           year="Years of Experience"
           head="Building Construction/piling and pile foundation in Indore Madhya pradesh India. We"
           subhead="is One Of The Fastest Growing Construction service Provider Company in Indore (M.P) India. We are one of the best civil contractor in India. Since Commencement of Business in 2001 the Company has"
           name="AK Singh"
           founder="Founder"
           getintouch="GET IN TOUCH"
           />
         <Aboutteam />
         <Aboutsummary />
         <Aboutquality />
         <Aboutaccordian />
        </>
    )
}
export default about;