import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IoMdExit, IoMdMenu, IoMdClose } from "react-icons/io";

const Nav = styled.nav`
  height: 10%;
  background-color: #800020;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  color: white;
  position: relative;
`;

const Logo = styled.div`
  font-weight: 900;
  font-size: 2.5em;
  letter-spacing: -2px;

  @media (max-width: 768px) {
    font-size: 2em;
  }

  @media (max-width: 480px) {
    font-size: 1.5em;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;

  a {
    color: white;
    text-decoration: none;
    font-size: 1.2em;
    margin-right: 1em;
  }

  @media (max-width: 500px) {
    display: none;
  }
`;

const MobileMenu = styled.div`
  display: none;

  @media (max-width: 500px) {
    flex-direction: column;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background-color: #800020;
    z-index: 1;
    padding: 20px;
    gap: 10px;
    height: 100vh;
    justify-content: center;
    align-items: center;
    text-align: center;

    &.active {
      display: flex;
    }

    .logo {
      margin-bottom: 1em;
    }

    .menu-items {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;

      a {
        color: white;
        text-decoration: none;
        font-size: 1.2em;
      }
    }

    .close-icon {
      margin-top: 1em;
    }
  }
`;

const ExitIcon = styled(IoMdExit)`
  cursor: pointer;
  font-size: 1.5em;
  color: white;
  margin-left: 1em;

  @media (max-width: 500px) {
    font-size: 1.2em;
    margin-left: 0;
  }
`;

const HamburgerMenu = styled.div`
  display: none;

  @media (max-width: 500px) {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
`;

const CloseIconStyled = styled(IoMdClose)`
  cursor: pointer;
  font-size: 1.5em;
  color: white;

  @media (max-width: 500px) {
    font-size: 1.2em;
  }
`;

function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    navigate("/");
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  return (
    <Nav>
      <Logo>biblionube</Logo>
      <NavLinks>
        <Link to="/menu-principal/inicio">Inicio</Link>
        <Link to="/menu-principal/documentos">Documentos</Link>
        <ExitIcon onClick={handleLogout} />
      </NavLinks>
      <HamburgerMenu onClick={toggleMenu}>
        {menuOpen ? (
          <CloseIconStyled size={24} color="white" />
        ) : (
          <IoMdMenu size={24} color="white" />
        )}
      </HamburgerMenu>
      <MobileMenu className={menuOpen ? "active" : ""}>
        <Logo className="logo">biblionube</Logo>
        <div className="menu-items">
          <Link to="/menu-principal/inicio" onClick={toggleMenu}>
            Inicio
          </Link>
          <Link to="/menu-principal/documentos" onClick={toggleMenu}>
            Documentos
          </Link>
          <ExitIcon
            onClick={() => {
              handleLogout();
              setMenuOpen(false);
            }}
          />
          <CloseIconStyled className="close-icon" onClick={toggleMenu} />
        </div>
      </MobileMenu>
    </Nav>
  );
}

export default Navbar;
