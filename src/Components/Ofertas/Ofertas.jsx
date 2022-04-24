import { React, useState, useEffect } from "react";
import { Container, Cards, CardsInfo, Media, Content } from "./Styled";
import axios from "axios";

export default function Containers() {
  const [infoCards, setInfoCards] = useState([]);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    getInfo();
  }, []);

  async function getInfo() {
      const response = await axios.get("http://localhost:3004/ofertas");
      setInfoCards(response.data);
      console.log(response.data);
  }

  const handleSubmit = (e) => {
    setPrice(e.target.value);
  };



  const filterByPrice = infoCards
    .filter((plant) => {
      return plant.preco > parseInt(price, 10);
    })
    .map((plant) => {
      return (
        <CardsInfo key={plant.id}>
          <Media>
            {" "}
            <img src={"./assets/" + plant.img + ".png"}></img>
          </Media>
          <Content>
            <strong className="title">{plant.name}</strong>
            <br />
            <span>{plant.preco}</span>
            <br />
            <a href="#">Comprar ⇾</a>
          </Content>
        </CardsInfo>
      );
    });

  return (
    <>
      <Container>
        <p>Conheça nossas</p>

        <strong>Plantas</strong>
        <div className="filter">
          <input type="range" onInput={handleSubmit} min="1" max="34" />
          <i> Preço {price}</i>
        </div>
        <Cards>{filterByPrice}</Cards>
      </Container>
    </>
  );
}
