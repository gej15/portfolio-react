import React from "react";
import "./style.css";


function Li(props) {
    return(
        <div className="">
                <a href={props.link}><i className={props.class}></i></a>
        </div>
    )
}

export default Li;