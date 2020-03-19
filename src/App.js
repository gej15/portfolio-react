import React, { Component} from 'react';
//Componets
import Header from "./componets/Header/"
import Info from "./componets/Info/"
import Parallax from "./componets/Paralax/"
import Body from "./componets/Body/index"
import CardBody from "./componets/CardBody/"
import Footer from "./componets/Footer/"
//Images
import coffee from "./images/coffee.jpg"
import basil from "./images/basil.jpg"

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Info />
        <Parallax 
          pic={coffee}
          alt="coffee"
        />
        <Body />
        <Parallax
          pic={basil}
          alt="basil"
        />
        <CardBody />
        <Footer />
      </div>
    )
  }
}

export default App;
