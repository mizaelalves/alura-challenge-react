import React from "react";
import { Container, Box, Media, Content } from "./Styled";
import ImgHero from "../assets/image-3.png";

export default function Myplant() {
  return (
    <Container>
      <Box>
        <Media>
          <img src={ImgHero}></img>
        </Media>
        <Content>
          <p>Como conseguir</p>
          <strong>minha planta</strong>
          <br />

          <p>
           <span className="dot"></span>
            Escolha sua planta
          </p>

          <p>
           <span className="dot"></span>
            Faça seu pedido
          </p>

          <p>
           <span className="dot"></span>
            Aguarde na sua casa
          </p>
        </Content>
      </Box>
    </Container>
  );
}
