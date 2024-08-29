import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaSignOutAlt } from 'react-icons/fa';
import Card from './Card';
import Modal from './Modal';
import { GlobalStyles } from './GlobalStyles';
import { escrituras } from './data';

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #1a1a1a, #800020); /* Negro a burdeos */
  overflow: hidden; /* Para asegurarse de que las burbujas no causen scroll */
  z-index: -1;
`;

const Bubble = styled(motion.div)`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  pointer-events: none;
`;

const AppContainer = styled.div`
  position: relative;
  min-height: 100vh;
  color: #ffffff;
  padding: 2rem;
`;

const Navbar = styled.nav`
  width: 100%;
  padding: 0.8rem 1.6rem; /* 20% más estrecho */
  background-color: #2a2a2a;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  @media (max-width: 768px) {
    padding: 0.4rem 0.8rem;
  }
`;

const NavTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  margin: 0;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;

  a {
    color: #fff;
    text-decoration: none;
    margin-right: 1rem; /* Reducido para ajustarse al nuevo tamaño */
    font-size: 0.85rem; /* Tamaño de fuente más pequeño */

    &:last-child {
      margin-right: 0;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }

  svg {
    color: #fff;
    font-size: 1.2rem; /* Tamaño de icono más pequeño */
    cursor: pointer;

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const BurgerMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    color: #fff;
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

const MobileMenu = styled.div`
  display: none;
  position: absolute;
  top: 100%; /* Asegurarse de que el menú esté pegado al Navbar */
  right: 0;
  background-color: #800020;
  padding: 1rem;
  border-radius: 8px;

  a {
    display: block;
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem; /* Espacio entre los elementos */
    font-size: 1rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  svg {
    color: #fff;
    font-size: 1.5rem;
    cursor: pointer;
    margin-top: 1rem;
  }

  @media (max-width: 768px) {
    display: ${({ open }) => (open ? 'block' : 'none')};
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 80px; /* Ajustado para el nuevo tamaño del navbar */
`;

const generateBubble = (size) => ({
  width: size,
  height: size,
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  opacity: Math.random() * 0.3 + 0.1,
});

function App() {
  const [selectedEscritura, setSelectedEscritura] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const bubbles = Array.from({ length: 10 }, () => generateBubble(Math.random() * 100 + 50));

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <GlobalStyles />
      <Navbar>
        <NavTitle>biblionube</NavTitle>
        <NavLinks>
          <a href="#inicio">Inicio</a>
          <a href="#contacto">Contacto</a>
          <FaSignOutAlt />
        </NavLinks>
        <BurgerMenu onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </BurgerMenu>
        <MobileMenu open={menuOpen}>
          <a href="#inicio" onClick={toggleMenu}>Inicio</a>
          <a href="#contacto" onClick={toggleMenu}>Contacto</a>
          <FaSignOutAlt onClick={toggleMenu} />
        </MobileMenu>
      </Navbar>
      <AppContainer>
        <Background>
          {bubbles.map((bubble, index) => (
            <Bubble
              key={index}
              style={bubble}
              animate={{
                y: ["0%", "-200%"],
                x: ["0%", "200%"],
              }}
              transition={{
                duration: Math.random() * 10 + 5,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </Background>
        <CardGrid>
          {escrituras.map((escritura) => (
            <Card
              key={escritura.id}
              escritura={escritura}
              onClick={() => setSelectedEscritura(escritura)}
            />
          ))}
        </CardGrid>
        {selectedEscritura && (
          <Modal
            escritura={selectedEscritura}
            onClose={() => setSelectedEscritura(null)}
          />
        )}
      </AppContainer>
    </>
  );
}

export default App;
