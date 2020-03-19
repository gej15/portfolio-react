import React from "react";
import "./style.css";


function Card(props) {
    return(
        <div className="row">
            <div className="col s12 m8 l6 xl6 offset-xl3 offset-l3 offset-m2">
            <div className="card">
                <div className="card-image">
                    <img src={props.img} alt={props.alt}/>
                    <span className={"card-title " + props.textColor + "-text" }>{props.title}</span>
                </div>
                <div className="divider"></div>
                <div className="card-content">
                    <p>{props.p1}</p>
                    <p>{props.p2}</p>
                </div>
                <div className="card-action">
                    <a href={props.hrefGithub}><i className="fab fa-github"></i></a>
                    <a href={props.hrefHeroku}><i className="fas fa-desktop"></i></a>
                </div>
            </div>
        </div> 
        </div>
    )
}

export default Card;