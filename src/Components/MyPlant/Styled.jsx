import styled from "styled-components";

export const Container = styled.div`
display:flex;
justify-content: center;
align-itens:center;
margin-left: 200px;
margin-right: 200px;
` 

export const Box = styled.div`
display:flex;
width: 710px;
height: 300px;
box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
p {
  display: flex;

  align-items:center;
  opacity: 1;
  font-size: 14px;
  margin-bottom: 5px;

  span{
    margin-right:10px
  }
}
strong {
  font-family: "Elsie Swash Caps", cursive;
  font-size: 30px;
  margin: 0;
}
`

export const Media = styled.div`
  display: flex;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
font-style: normal;
padding-left: 30px;
  span {
    opacity: 0.5;
  }
  a {
    text-decoration: none;
    font-size: 16px;
    color: #ffcb47;
    
  }
  .dot {
    opacity: 1;
    backgroud-color: black;
    height: 31px;
    width: 31px;
    background-color: #FFCB47;
    border-radius: 50%;
    display: inline-block;
  }
`;
