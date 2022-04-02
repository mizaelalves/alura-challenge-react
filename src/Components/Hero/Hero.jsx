import React, { Component } from "react";
import imgHero from "../Style/assets/imagem-hero.png";
import {Info,Content, ImgHero, Form} from "./Styled";



class Hero extends Component {
  render() {
    return (
      <Info>
        <ImgHero>
          <img className="imgHero" src={imgHero}></img>
        </ImgHero>
        <Content>
          <p className="first-title"> Sua casa com as </p>
          <strong>Melhores</strong>
          <br />
          <strong>Plantas</strong>
          <p>
            Encontre aqui uma vasta seleção de plantas para decorar a sua casa e
            torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu
            e-mail e assine nossa newsletter para saber das novidades da marca.
          </p>
          <Form>
            <input type="e-mail" name="" placeholder="Informe seu e-mail" />
            <input type="submit" name="" value="Assinar Newsletter" />
          </Form>
        </Content>
      </Info>
    );
  }
}

export default Hero;
