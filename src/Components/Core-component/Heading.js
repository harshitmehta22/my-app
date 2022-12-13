import React from "react";
function Heading(props){
        return (
                <>
           <h3 className="common-heading"><span>{props.prefixhead}</span> {props.suffixhead}</h3>
                </>
        );  
}
export default Heading;