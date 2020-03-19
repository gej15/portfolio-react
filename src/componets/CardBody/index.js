import React from "react";
import "./style.css";
import Card from "./card.js"

import outcache from "../../images/outcache.jpg"
import laterlist from "../../images/laterlist.jpg"
import musicapp from "../../images/musicapp.jpg"

import google from "../../images/googlebook.jpg"
import clicky from "../../images/clicky.jpg"
import scraper from "../../images/Scraper.jpg"
import burger from "../../images/burger.jpg"
import friendfinder from "../../images/friendfinder.jpg"
import rps from "../../images/rps.jpg"
import giphy from "../../images/giphy.jpg"
import trivia from "../../images/trivia.jpg"
import starwars from "../../images/rpg.jpg"
import hangman from "../../images/hangman.jpg"

function CardBody() {
    return(
        <div className="">
            <h1 className="center-align">Projects</h1>

            <Card 
                img={outcache}
                alt="Outcache"
                textColor="white"
                title="Outcache"
                p1="Peer 2 peer outdoor equipment rental site."
                p2="Written in MERN stack."
                hrefGithub="https://github.com/gej15/outcache"
                hrefHeroku="https://www.outcache.com"
            />
            <Card 
                img={laterlist}
                alt="LaterList"
                textColor="white"
                title="Later List"
                p1="Website to save a list of media to watch or listen to later."
                p2="Written in Javascript, Node.js, and using Mysql as a database."
                hrefGithub="https://github.com/gej15/Project2"
                hrefHeroku="https://infinite-gorge-82192.herokuapp.com/"
            />
            <Card 
                img={musicapp}
                alt="Music App"
                textColor="white" 
                title="Music App"
                p1="Bands In Town Clone."
                p2="Written in Javascript with jQuery."
                hrefGithub="https://github.com/gej15/musicApp"
                hrefHeroku="https://gej15.github.io/musicApp/"
            />
            <h2 className="center-align">Assignments</h2>
            <Card 
                img={google}
                alt="GoogleBook"
                textColor="black"
                title="Google Book Search"
                p1="CRUD app that uses google book api."
                p2="Written in MERN stack."
                hrefGithub="https://github.com/gej15/Google-Book-Search"
                hrefHeroku="https://dry-island-98036.herokuapp.com/"
            />
            <Card 
                img={clicky}
                alt="Clicky App"
                textColor="black"
                title="Clicky App"
                p1="Memory game where you can't click the same card twice."
                p2="Written in React."
                hrefGithub="https://github.com/gej15/Clicky"
                hrefHeroku="https://gej15.github.io/Clicky"
            />
            <Card 
                img={scraper}
                alt="Scraper"
                textColor="black"
                title="Scraper App"
                p1="Scraping info from another website and putting into my own."
                p2="Written in javascript, node.js and using mongoDB as a database."
                hrefGithub="https://github.com/gej15/scraper2"
                hrefHeroku="https://radiant-ocean-29619.herokuapp.com/"
            />
            <Card 
                img={burger}
                alt="Burger App"
                textColor="black"
                title="Burger App"
                p1="Crud app where you can create a burger and move it into another section."
                p2="Written in javascript, node.js and using Mysql as a database."
                hrefGithub="https://github.com/gej15/burger"
                hrefHeroku="https://murmuring-depths-69437.herokuapp.com/"
            />
            <Card 
                img={friendfinder}
                alt="Friend Finder"
                textColor="black"
                title="Friend Finder"
                p1="Match.com Clone."
                p2="Written in javascript, node.js and using Mysql as a database."
                hrefGithub="https://github.com/gej15/friendFinder"
                hrefHeroku="https://dry-gorge-63659.herokuapp.com/"
            />
            <Card 
                img={rps}
                alt="Rock Paper Scissors"
                textColor="black"
                title="Rock Paper Scissors"
                p1="Real time rock paper scissors game"
                p2="Written in javascript, node.js and using firebase as a real-time database."
                hrefGithub="https://github.com/gej15/RPS-Multiplayer"
                hrefHeroku="https://gej15.github.io/RPS-Multiplayer/"
            />
            <Card 
                img={giphy}
                alt="Giphy"
                textColor="black"
                title="Giphy Search"
                p1="Find the gif you are looking for with this site."
                p2="Written in javascript, pulling from the giphy API."
                hrefGithub="https://github.com/gej15/giphyAPI"
                hrefHeroku="https://gej15.github.io/giphyAPI/"
            />
            <Card 
                img={trivia}
                alt="Trivia"
                textColor="white"
                title="Trivia"
                p1="Coffee Trivia Game"
                p2="Written in javascript, using timers to push the player along."
                hrefGithub="https://github.com/gej15/triviaGame"
                hrefHeroku="https://gej15.github.io/triviaGame/"
            /> 
            <Card 
                img={starwars}
                alt="Star Wars RPG Game"
                textColor="black"
                title="Star Wars RPG Game"
                p1="Select a charecter and become the champion."
                p2="Written in javascript."
                hrefGithub="https://github.com/gej15/rpgGame"
                hrefHeroku="https://gej15.github.io/rpgGame/"
            />
            <Card 
                img={hangman}
                alt="Hangman"
                textColor="black"
                title="Hangman"
                p1="Guess the streets of Austin in my first work with javascript."
                p2="Written in javascript."
                hrefGithub="https://github.com/gej15/wordGuess"
                hrefHeroku="https://gej15.github.io/wordGuess/"
            />
        </div>
    )
}

export default CardBody;