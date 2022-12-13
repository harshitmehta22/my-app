import React from "react";
import logo from './logo.png';
function header(){
    return(
    <div className="container-fluid">
    <div className='container clearfix new-heading'>
        {/* <div className="top-head clearfix"> */}
            <div className='top-header row left'>
              <div className='mail-block block'>
                <i class="fa fa-envelope" aria-hidden="true"></i>
                <a href='#'>info@tiarainfrastructure.com</a>
              </div>
              <div className='mail-block block'>
                <i class="fa fa-phone" aria-hidden="true"></i>
                <a href='#'>+91 7314995740</a>
              </div>
              <div className='mail-block block'>
                <i class="fa fa-clock" aria-hidden="true"></i>
                <a href='#'>Mon to Sat: 10:30am - 06:30pm</a>
              </div>
            </div>
            <div className="row right">
            {/* <div className='btn right'> */}
               <a href="#" className="site-btn right">ठेकेदार पंजीकरण</a>
            </div>
            {/* </div> */}
          {/* </div> */}
        </div>
     </div>
    );
}
export default header;