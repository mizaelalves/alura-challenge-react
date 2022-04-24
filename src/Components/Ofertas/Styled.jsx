import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 150px;
  margin-right: 150px;

  p {
    opacity: 1;
    font-size: 14px;

    margin-bottom: 5px;
  }
  strong {
    font-family: "Elsie Swash Caps", cursive;
    font-size: 60px;
    margin: 0;
  }
`;
export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
 
`;

export const CardsInfo = styled.div`
  display: flex;
  width: 340px;
  height: 200px;
  box-shadow: 10px 10px 30px rgba(5, 5, 5, 0.09);
  font-size: 10px;
  margin-bottom: 20px;

  span {
    font-size: 16px;
  }
  strong {
    font-size: 30px;
  }
`;

export const Media = styled.div`
  display: flex;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  margin-top: 25px;
  margin-left: 190px;
  width: 150px;
  font-family: 'Montserrat';

font-style: normal;
  span {
    opacity: 0.5;
  }
  a {
    text-decoration: none;
    font-size: 16px;
    color: #ffcb47;
  }
`;
