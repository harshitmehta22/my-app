import React from "react";
function banner(props){
    return(
        <>
        <div className="overlay-bg">
             <div className="container text-center">
                    <div class="mt-bnr-inr-entry">
                    <div class="banner-title-outer">
                    <div class="banner-title-name">
                    <h2 class="m-b0 Head">{props.bannerhead}</h2>
                    </div>
                    </div>
                    <div>
                    </div>
                    </div>
             </div>
         </div>
        </>
    );
}
export default banner;
