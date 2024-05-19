// src/Login.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  GlobalStyle,
  Body,
  FloatingBubble,
  LoginContainer,
  LoginImage,
  LoginForm,
} from "./LoginStyles";

const whitelist = [
  {
    nombre: "David",
    username: "dmuza",
    password: "12345",
  },
  {
    nombre: "Echu",
    username: "echu",
    password: "12345",
  },
];

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    const user = whitelist.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      navigate("/menu-principal/inicio");
    } else {
      alert("Inicio de sesión fallido, revise sus datos.");
    }
  };

  return (
    <>
      <GlobalStyle />
      <Body>
        <FloatingBubble />
        <FloatingBubble />
        <FloatingBubble />
        <FloatingBubble />
        <FloatingBubble />
        <FloatingBubble />
        <FloatingBubble />
        <LoginContainer>
          <LoginImage>
            <img
              src="https://i.pinimg.com/originals/37/80/79/378079136550b793b5b1c3d316d98d22.jpg"
              alt="Imagen de login"
            />
            <h1>biblionube</h1>
          </LoginImage>
          <LoginForm>
            <h2>Iniciar Sesión</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="username">Usuario</label>
                <input type="text" id="username" name="username" required />
              </div>
              <div className="form-group">
                <label htmlFor="password">Contraseña</label>
                <input type="password" id="password" name="password" required />
              </div>
              <button type="submit">Iniciar Sesión</button>
            </form>
          </LoginForm>
        </LoginContainer>
      </Body>
    </>
  );
}

export default Login;
