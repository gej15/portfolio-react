import React from "react";
import "./style.css";
import Img from "./img.js"
import js from "../../images/js.jpg"
import node from "../../images/nodejslogo.jpg"
import react from '../../images/react.svg'
import utaustin from "../../images/utaustin.jpg"

function Body() {
    return(
        <div className="containe align-self-center nameSection">
            <h2>About Me</h2>
            <div className="container aboutMeInfo">
                <p>Full-Stack Web Developer with a background in hospitality and problem solving. I have earned a certificate in Full Stack Development from the UT Coding Bootcamp. Through the program I attained knowledge of JavaScript, CSS, Mysql, Node.js and React. Through the many jobs I had in the hospitality industry, the highest of which was a GM of a restaurant, I have the skills to think on my feet and solve the daily problems that arise in the everyday work environment. Now changing careers I am developing a passion for coding and problem solving. Now I’m ready to start my career in web development and discover more web development tools to put in my web development toolbox. </p>
                <div className="logoImgDiv"> 
                <Img class="logo" src={js} alt="Js" />
                <Img class="logo" src={node} alt="Node" />
                <Img class="logo" src={react} alt="React" />
                <Img class="logo" src={utaustin} alt="UtAustin" />
                </div>
                <p>Originally from the suburbs of Chicago I moved to Austin in the summer of 2013. I have been working in the restaurant industry since high school and have a degree in culinary degree. I have held many positions from line cook to general manager but my favorite was bartending on sixth street. Deciding that I needed a career change I’m moving on to computer science. I have been married for 2 years to my lovely wife Lauren. We have 2 dogs, Lando an Australian Shepherd, and Eva a Husky mix. They are our fur babies.</p>
            </div>
        </div>
    )
}

export default Body;