import React, { useRef } from "react";
import imgHero from "../Style/assets/imagem-hero.png";
import { Info, Content, ImgHero, Form } from "./Styled";
import { useForm } from "react-hook-form";
import { sendEmail } from "../email/sendEmail";

export default function Hero() {

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  
  const onSubmit = (data) => {
    console.log(data.email)
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data)) {
     
      sendEmail(data.email)
      
    }
  };


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
          torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail
          e assine nossa newsletter para saber das novidades da marca.
        </p>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            name="user_email"
            placeholder="digite seu email"
            {...register("email", {
              required: "Digite o e-mail",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Endereço de e-mail invalido",
              },
            })}
          />
          <input type="submit" name="" value="Assinar Newsletter" />
          <span>{" "}</span>
          {errors.email && errors.email.message}
        </Form>
      </Content>
    </Info>
  );
}
