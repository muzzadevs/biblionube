// src/Inicio.jsx
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import versiculos from "./versiculos"; // Asumiendo que el archivo se llama versiculos.js
import IlustracionInicio from "./assets/ilustracionInicio.svg";

const Contenedor = styled.div`
  display: flex;
  height: 90%;
  width: 100%;

  @media (max-width: 1400px) {
    flex-direction: column;
    height: auto;
    justify-content: center;
    align-items: center;
  }
`;

const SeccionIzquierda = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;

  @media (max-width: 1400px) {
    padding: 10px;
    align-items: center;
  }
`;

const SeccionDerecha = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;

  @media (max-width: 1400px) {
    padding: 10px;
    align-items: center;
  }
`;

const MensajeBienvenida = styled.h1`
  font-weight: bold;
  font-size: 50px;

  @media (max-width: 1400px) {
    font-size: 40px;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 30px;
  }
`;

const Subtitulo = styled.h2`
  margin-top: 5px;
  font-weight: 100;

  @media (max-width: 1400px) {
    font-size: 20px;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const CajaVersiculo = styled.div`
  background-color: #800020;
  padding: 30px;
  border-radius: 10px;
  color: white;
  font-style: italic;
  text-align: center;
  font-size: 30px;

  @media (max-width: 1400px) {
    padding: 50px;
    margin-top: 20px;
  }

  @media (max-width: 480px) {
    padding: 30px;
  }
`;

const VersiculoTexto = styled.div`
  font-size: 1em;

  @media (max-width: 1400px) {
    font-size: 1.2em;
  }

  @media (max-width: 480px) {
    font-size: 1em;
  }
`;

const VersiculoCita = styled.div`
  font-size: 1em;
  font-weight: bold;
  margin-top: 10px;

  @media (max-width: 1400px) {
    font-size: 1em;
  }

  @media (max-width: 480px) {
    font-size: 0.8em;
  }
`;

const Ilustracion = styled.img`
  margin-top: 20px;
  max-width: 100%;
  height: auto;
  transform: scale(0.7);
  @media (max-width: 1400px) {
    max-width: 80%;
  }

  @media (max-width: 480px) {
    max-width: 100%;
  }
`;

const Inicio = () => {
  const [versiculo, setVersiculo] = useState({ texto: "", cita: "" });

  useEffect(() => {
    // Selecciona un versículo aleatorio al cargar la página
    const versiculoAleatorio =
      versiculos[Math.floor(Math.random() * versiculos.length)];
    setVersiculo(versiculoAleatorio);
  }, []);

  return (
    <Contenedor>
      <SeccionIzquierda>
        <MensajeBienvenida>
          Bienvenido a <span style={{ color: "#800020" }}>biblionube</span>
        </MensajeBienvenida>
        <Subtitulo>Dios, tu biblia, tu espacio, no sé, piénsalo.</Subtitulo>
        <Ilustracion src={IlustracionInicio} alt="Ilustración de inicio" />
      </SeccionIzquierda>
      <SeccionDerecha>
        <CajaVersiculo>
          <VersiculoTexto>{versiculo.texto}</VersiculoTexto>
          <VersiculoCita>{versiculo.cita}</VersiculoCita>
        </CajaVersiculo>
      </SeccionDerecha>
    </Contenedor>
  );
};

export default Inicio;
