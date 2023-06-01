import Section from "../Componentes/Section";
import Slide from "../Componentes/slide";
import "bootstrap/dist/css/bootstrap.css";
import Form from "../Componentes/Form.jsx";
import React, { useState } from "react";
//Inicio con articulos recientes
export default function Home() {

  return (
    <>
      <Section />
      <Slide />
      <Form />
    </>
  );
}
