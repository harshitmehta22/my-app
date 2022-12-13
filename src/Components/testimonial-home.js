import React from "react";
import OwlCarousel from 'react-owl-carousel';
// import image1 from '../../src/bungalow.jpg';
import userimg from '../assests/images/usernew.jpg';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Heading from "./Core-component/Heading";
const Options = {
  margin: 30,
  responsiveClass: true,
  dots: false,
  autoplay: true,
  smartSpeed: 1000,
  responsive: {
      0: {
          items: 1,
      },
      400: {
          items: 1,
      },
      600: {
          items: 1,
      },
      768: {
          items: 1,
      },
      1024: {
          items: 2,
      }
  },
};

const Testi = () =>{
  return(
    <>
    <div className="testimonial-wrp">
    <div className="container services-wrp">
    <Heading
            prefixhead = "Client"
            suffixhead = "Testimonial" 
    />
      <OwlCarousel items={2} className='owl-theme' loop autoplay margin={10} nav { ...Options }>
        <div class='item'>
            <div class="testimonial-2 m-a30  hover-animation-1">
            <div class=" block-shadow bg-white p-a30">
            <div class="testimonial-detail clearfix text-left">
            <div class="testimonial-pic radius shadow scale-in-center left"><img src={ userimg }></img></div>
            <div className="testmonial-name-block left">
            <h4 class="testimonial-name m-b5">Abhishek Chauhan</h4>
            <span class="testimonial-position">Contractor</span>
            </div>
            </div>
            <div class="testimonial-text text-left">
            <span class="fa fa-quote-right"></span>
            <p>The template itself is very ext ended. excellent customer support! simply dummy text of the printing and industry. the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
            </div>
            </div>
            </div>
        </div>
        <div class='item'>
        <div class="testimonial-2 m-a30  hover-animation-1">
            <div class=" block-shadow bg-white p-a30">
            <div class="testimonial-detail clearfix text-left">
            <div class="testimonial-pic radius shadow scale-in-center left"><img src={ userimg }></img></div>
            <div className="testmonial-name-block left">
            <h4 class="testimonial-name m-b5">Abhishek Chauhan</h4>
            <span class="testimonial-position">Contractor</span>
            </div>
            </div>
            <div class="testimonial-text text-left">
            <span class="fa fa-quote-right"></span>
            <p>The template itself is very ext ended. excellent customer support! simply dummy text of the printing and industry. the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
            </div>
            </div>
            </div>
        </div>
        </OwlCarousel>
    </div>
    </div>
    </>
  )
}
export default Testi;