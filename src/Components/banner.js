import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import image1 from '../../src/bungalow.jpg';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const bannernw = () =>{
    return(
       <>
        <OwlCarousel items={1} className='owl-theme' loop margin={10} nav>
        <div class='item'>
        <img src={ image1 }></img>
        </div>
        <div class='item'>
        <img src={ image1 }></img>
        </div>
        </OwlCarousel>
       </>
       
    )
}
export default bannernw