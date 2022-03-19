import React from "react";

function HeroSection(props){

    return(
        <div className="hero-section text" style={{backgroundImage:`url(${url.backgroundImage})`}}>
            {props.children}
        </div>

    )
}

export default HeroSection