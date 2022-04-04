import React, { Component } from "react";

import Logo from "../Style/assets/logo.svg";
import {Container, Button} from "./Styled"

const links = [
  "Como fazer",
  "Ofertas",
  "Depoimentos",
  "Videos"
]


class Navbar extends Component {
  render() {
    return (
      <Container >
        <div>
          <img src={Logo} className="logoImg" ></img>
        </div>
        <div>

          <Button as="a" href="#"> Como fazer </Button>
          <span> / </span>
          <Button as="a" href="#"> Ofertas </Button>
          <span> / </span>
          <Button as="a" href="#"> Depoimentos </Button>
          <span> / </span>
          <Button as="a" href="#"> Videos </Button>
          <span> / </span>
          <Button as="a" href="#"> Meu Carrinho </Button>


        </div>
      </Container>
    );
  }
}

export default Navbar;
