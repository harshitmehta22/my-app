import React from "react";
import Accordion from "./accordian";
import Form from "./form";
import Linehead from "./Core-component/line-headingleft"
import { accordionData } from "./acccontent";
import SolutionContent from "./solution-content"
const Solution =()=>{
return(
    <>
    <div className="solution-main-wrp container">
       <div className="row">
          <div className="col-md-6 col-sm-6">
            <Linehead
            prefixhead ="Our" 
            suffixhead ="Solutions"
            />
            <SolutionContent
            maincontent = "We believe our employees are our greatest assets. We place enormous value on the welfare and commitment of our employees as well as the superior level of service they provide for our customers. Our employees all benefit from extensive on the job training and our apprentice schemes are amongst the best in the industry. We pride ourselves on many of our staff remaining with us throughout their careers, often progressing from entry level in our depots to senior management positions."
            />
              <div className="accordian-wrp container">
          <div className="accordion">
            {accordionData.map(({ title, content}) => (
                <Accordion title = { title } content = {content}/>
            ))}
          </div>
          </div>
          </div>
          <div className="col-md-6 col-sm-6">
          <div className="main-heading">
            <Linehead 
            prefixhead = "Contractor"
            suffixhead = "Resignation"
            />
           </div>
                <div className="form-wrp">
                   <Form />
                </div>
          </div>
       </div>
    </div>
    </>
)
}
export default Solution;