// src/MenuPrincipal.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar";
import Inicio from "./Inicio";
import Documentos from "./Documentos";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
`;

function MenuPrincipal() {
  return (
    <Container>
      <Navbar />
      <Content>
        <Routes>
          <Route path="inicio" element={<Inicio />} />
          <Route path="documentos" element={<Documentos />} />
          <Route path="*" element={<Navigate to="inicio" />} />
        </Routes>
      </Content>
    </Container>
  );
}

export default MenuPrincipal;
