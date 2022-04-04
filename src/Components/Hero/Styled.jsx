import styled from "styled-components";
import mail from '../Style/assets/mail.png'

export const Info= styled.div`
display: flex;

position: absolute;
margin-left: 200px;
margin-right: 200px;
width: 881px;
`

export const Content = styled.div`
position: absolute;
width: 430px;
height: 462px;
margin-top: 100px;

p{
  opacity: 1;
  font-size: 14px;
  margin-top: 0;
  margin-bottom: 20px;
}
strong{
  font-family: 'Elsie Swash Caps', cursive;
  font-size: 70px;
  margin: 0;
}
`

export const Form = styled.form`
width: 446px;
height: 60px;


input[type=text]{
  background-image: url('${mail}');
  background-repeat: no-repeat;
  border: none;
  background-position: 15px 24px; 
  padding: 22.5px 20px 22.5px 60px;
  transition: 1s;
  outline: none;
  box-shadow: 10px 5px 10px rgba(0, 0, 0, 0.2);
}

input[type=submit]{
  color: white;
  background-color: #FFCB47;
  box-shadow: 10px 5px 10px rgba(0, 0, 0, 0.2);
  border: none;

  padding: 22.5px 42.9px 22.5px 42.9px;
cursor: pointer;

}
input[type=submit]:active{
  background-color: #8DCE97
  ;
`

export const ImgHero = styled.div`
img{width: 68%;
position: absolute;  
right: 0;}
`