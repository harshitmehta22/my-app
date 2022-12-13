import React from "react";
function linehead(props){
    return(
        <>
          <div className='cmn-heading'>
                    <div class="mt-separator-outer separator-left">
                       <div class="mt-separator">
                        <h3 class="text-uppercase sep-line-one"><span>{props.prefixhead}</span> { props.suffixhead}</h3>
                       </div>
                    </div>
           </div>
        </>
    );
}
export default linehead;