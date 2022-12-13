import React from "react";
import Accordion from "./accordian";
import { accordionData } from "./acccontent";
const Acc =() => {
      return (
        <>
        <div className="accordian-wrp container">
          <div className="accordion">
            {accordionData.map(({ title, content}) => (
                <Accordion title = { title } content = {content}/>
            ))}
          </div>
          </div>
        </>
      );
    };
    
    export default Acc;