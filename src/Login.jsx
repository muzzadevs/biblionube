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

const whitelist = {
  nombre: "David",
  mail: "dmuza@biblionube.com",
  password: "12345",
};

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    if (email === whitelist.mail && password === whitelist.password) {
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
                <label htmlFor="email">Correo Electrónico</label>
                <input type="email" id="email" name="email" required />
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
