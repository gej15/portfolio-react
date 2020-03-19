import React from "react";
import "./style.css";
import GrantImage from "../../images/grant.jpg"
import Li from "./li"

function Info() {
    return(
        <div className="center">
            <img  className="circle grantPic" src={GrantImage} alt="grantPic" />
            <h1 className="center">Grant Jackson</h1>
            <p className="grey-text text-darken-3">Coffee, Food, Coding</p>
            <ul className="center">
                <li>
                    <Li 
                        link="https://github.com/gej15"
                        class="fab fa-github icon"
                        />
                </li>
                <li>
                    <Li 
                        link="https://www.linkedin.com/in/grant-e-jackson/"
                        class="fab fa-linkedin icon"
                        />
                </li>
                <li> 
                    <Li 
                        link="mailto:grant@grantjackson.dev?Subject=Hire%20Grant"
                        class="fas fa-envelope icon"
                        />
                </li>
            </ul>
        </div>
    )
}

export default Info;