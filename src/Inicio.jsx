import React, { useEffect, useState } from "react";
import styled from "styled-components";
import versiculos from "./versiculos";
import IlustracionInicio from "./assets/ilustracionInicio.svg";

const Contenedor = styled.div`
  display: flex;
  height: 90%;
  width: 100%;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1400px) {
    flex-direction: row;
    height: auto;
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
  }
`;

const MensajeBienvenida = styled.h1`
  font-weight: bold;
  font-size: 40px;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 30px;
  }
`;

const Subtitulo = styled.h2`
  margin-top: 5px;
  font-weight: 100;
  font-size: 20px;
  text-align: center;

  @media (max-width: 500px) {
    font-size: 12px;
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
  transform: scale(0.7);
  margin-top: 20px;

  @media (max-width: 1400px) {
    padding: 50px;
  }

  @media (max-width: 500px) {
    padding: 30px;
  }
`;

const VersiculoTexto = styled.div`
  font-size: 1em;

  @media (max-width: 1400px) {
    font-size: 1.2em;
  }

  @media (max-width: 500px) {
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

  @media (max-width: 500px) {
    font-size: 0.8em;
  }
`;

const Ilustracion = styled.img`
  margin-top: 20px;
  max-width: 100%;
  height: 350px;

  @media (max-width: 1400px) {
    max-width: 80%;
  }

  @media (max-width: 500px) {
    max-width: 90%;
  }
`;

const Inicio = () => {
  const [versiculo, setVersiculo] = useState({ texto: "", cita: "" });

  useEffect(() => {
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
        <CajaVersiculo>
          <VersiculoTexto>{versiculo.texto}</VersiculoTexto>
          <VersiculoCita>{versiculo.cita}</VersiculoCita>
        </CajaVersiculo>
      </SeccionIzquierda>
    </Contenedor>
  );
};

export default Inicio;
