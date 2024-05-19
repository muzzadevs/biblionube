import styled, { createGlobalStyle, keyframes } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Montserrat', sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

const floatAnimation = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-100px); }
  100% { transform: translateY(0); }
`;

export const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: rgba(80, 0, 32, 1);
  overflow: hidden;
  position: relative;
`;

export const FloatingBubble = styled.div`
  position: absolute;
  background: rgba(128, 0, 32, 0.2);
  border-radius: 50%;
  filter: blur(10px);
  animation: ${floatAnimation} 1s ease-in-out infinite;
  &:nth-child(2) {
    width: 850px;
    height: 850px;
    left: 0%;
    top: 10%;
    animation-duration: 6s;
  }
  &:nth-child(3) {
    width: 250px;
    height: 250px;
    left: 70%;
    top: 50%;
    animation-duration: 8s;
  }
  &:nth-child(4) {
    width: 620px;
    height: 620px;
    left: 40%;
    top: 80%;
    animation-duration: 5s;
  }
  &:nth-child(5) {
    width: 580px;
    height: 580px;
    left: 60%;
    top: 20%;
    animation-duration: 7s;
  }
  &:nth-child(6) {
    width: 440px;
    height: 440px;
    left: 80%;
    top: 70%;
    animation-duration: 6s;
  }
  &:nth-child(7) {
    width: 160px;
    height: 160px;
    left: 10%;
    top: 60%;
    animation-duration: 8s;
  }
`;

export const LoginContainer = styled.div`
  border-radius: 15px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  max-width: 90%;
  width: 800px;
  height: auto;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1;

  @media (min-width: 768px) {
    flex-direction: row;
    height: 500px;
  }
`;

export const LoginImage = styled.div`
  width: 100%;
  background-color: #333;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

  @media (min-width: 768px) {
    width: 50%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.7;
  }

  h1 {
    position: absolute;
    font-weight: 900;
    font-size: 2.5em;
    z-index: 1;
    letter-spacing: -2px;

    @media (max-width: 768px) {
      font-size: 2em;
    }

    @media (max-width: 480px) {
      font-size: 1.5em;
    }
  }
`;

export const LoginForm = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ffffff;

  @media (min-width: 768px) {
    width: 50%;
    padding: 40px;
  }

  h2 {
    margin-bottom: 20px;
    color: #800020;
    font-size: 1.8em;

    @media (max-width: 768px) {
      font-size: 1.5em;
    }

    @media (max-width: 480px) {
      font-size: 1.2em;
    }
  }

  .form-group {
    margin-bottom: 20px;

    label {
      display: block;
      margin-bottom: 5px;
      color: #333;
      font-size: 1em;

      @media (max-width: 768px) {
        font-size: 0.9em;
      }

      @media (max-width: 480px) {
        font-size: 0.8em;
      }
    }

    input {
      width: 100%;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
  }

  button {
    padding: 10px 20px;
    background-color: #800020;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #a83232;
    }

    @media (max-width: 768px) {
      padding: 8px 16px;
      font-size: 0.9em;
    }

    @media (max-width: 480px) {
      padding: 6px 12px;
      font-size: 0.8em;
    }
  }
`;
