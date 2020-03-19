import React, { useEffect } from "react";
import M from "materialize-css"
import "./style.css";


function Parallax(props) {
    useEffect(() => {
        let elements = document.querySelectorAll(".parallax")
        M.Parallax.init(elements)
    }, [])
    
    return(
        <div className="parallax-container">
            <div className="parallax">
                <img src={props.pic} alt={props.alt} />
            </div>
        </div>
    )
}

export default Parallax;