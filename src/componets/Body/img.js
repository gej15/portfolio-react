import React from "react";
import "./style.css";

function Img(props) {
    return(
        <div  >
            <img className={props.class} src={props.src} alt={props.alt} />
        </div>
    )
}

export default Img;