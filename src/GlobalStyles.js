import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
  }

  body {
    background-color: #1a1a1a;
    color: #ffffff;
  }

  /* Estilos para personalizar el scrollbar */
  ::-webkit-scrollbar {
    width: 5px;  /* Ancho del scrollbar */
  }

  ::-webkit-scrollbar-thumb {
    background-color: #800020;  /* Color burdeos */
    border-radius: 10px;  /* Redondeado */
  }

  ::-webkit-scrollbar-track {
    background: #2a2a2a;  /* Color de fondo del track del scrollbar */
  }
  
  /* Para Firefox */
  scrollbar-width: thin;
  scrollbar-color: #800020 #2a2a2a;
`;
