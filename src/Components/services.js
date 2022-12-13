import React from "react";
import industrial from "../assests/images/industrial.png";
import construction from "../assests/images/rental.png";
import Heading from "../Components/Core-component/Heading";
import content from './content';
import imagenew from '../assests/images/industrial.png'
import tender from "../assests/images/new-tender.png";
import { Product } from "./serviceproduct";
const services = ()=>{
return(
        <>
        <div className="services-wrp">
            <Heading
            prefixhead = "All"
            suffixhead = "Services" 
            />
        <div className="services-block-wrp container">
            <div className="row">
            {content.map(content =>(
                <Product
                key={content.id}
                image={content.image}
                name={content.name}
                read={content.read}
                />
            ))}
            </div>
        </div>
        </div>
        </>
    )
}
export default services;
