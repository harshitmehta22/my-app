import React from 'react';
import Linehead from "./Core-component/line-headingleft"
const team = ()=>{
return(
    <>
    <div className='team-wrp container'>
      <Linehead
      prefixhead="Our"
      suffixhead="Team"
      />
        <div class="section-content">
        <div class="row">
        <div class="col-md-4 col-sm-6 col-xs-6 col-xs-100pc m-b30 text-center">
        <div class="our-team-1 hover-animation-1">
        <div class="profile-image scale-in-center"><img src="images/our-team4/pic1.png" alt=""></img></div>
        <div class="figcaption">
        <h4>Avie Beaton </h4>
        <h5>Ceo &amp; Architect</h5>
        <p>Which is worse, that everyone has his price, or that the price is always so low.</p>
        <div class="icons">
        <a href="#"><i class="fa fa-facebook"></i></a>
        <a href="#"> <i class="fa fa-twitter"></i></a>
        <a href="#"> <i class="fa fa-linkedin"></i></a>
        <a href="#"> <i class="fa fa-instagram"></i></a>
        </div>
        </div>
        </div>
        </div>
        <div class="col-md-4 col-sm-6 col-xs-6 col-xs-100pc m-b30 text-center">
        <div class="our-team-1 hover-animation-1">
        <div class="profile-image scale-in-center"><img src="images/our-team4/pic2.png" alt=""></img></div>
        <div class="figcaption">
        <h4>Ben Jonson </h4>
        <h5>Architect </h5>
        <p>Which is worse, that everyone has his price, or that the price is always so low.</p>
        <div class="icons">
        <a href="#"><i class="fa fa-facebook"></i></a>
        <a href="#"> <i class="fa fa-twitter"></i></a>
        <a href="#"> <i class="fa fa-linkedin"></i></a>
        <a href="#"> <i class="fa fa-instagram"></i></a>
        </div>
        </div>
        </div>
        </div>
        <div class="col-md-4 col-sm-6 col-xs-6 col-xs-100pc m-b30 text-center">
        <div class="our-team-1 hover-animation-1">
        <div class="profile-image scale-in-center"><img src="images/our-team4/pic3.png" alt=""></img></div>
        <div class="figcaption">
        <h4>Ashley Fletcher </h4>
        <h5>Finances</h5>
        <p>Which is worse, that everyone has his price, or that the price is always so low.</p>
        <div class="icons">
        <a href="#"><i class="fa fa-facebook"></i></a>
        <a href="#"> <i class="fa fa-twitter"></i></a>
        <a href="#"> <i class="fa fa-linkedin"></i></a>
        <a href="#"> <i class="fa fa-instagram"></i></a>
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
export default team;