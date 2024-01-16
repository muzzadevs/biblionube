import React from "react";
import { motion } from "framer-motion";
import mySvg from "../assets/fotoInicio.svg";
import styled from "@emotion/styled";

const ContenedorInicio = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  & img {
    max-height: 300px;
  }
`;

const ContenedorBienvenida = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 4rem;
  justify-content: center;
`;

const Bienvenida = styled.h4`
  font-size: 90px;
  font-weight: bold;
  text-align: left;
  color: #313c47;
  line-height: 1;
  margin-bottom: 1rem;
`;

const ParrafoBienvenida = styled.p`
  color: white;
  text-align: left;
  max-width: 600px;
`;

const Inicio = () => {
  const containerVariants = {
    hidden: {
      opacity: 0,
      x: -20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        delay: 0.2,
      },
    },
  };

  return (
    <ContenedorInicio
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <img src={mySvg} alt="Inicio" />
      <ContenedorBienvenida>
        {" "}
        <Bienvenida>
          Bienvenidos a <br />
          <span style={{ color: "#6c63ff" }}>biblionube</span>
        </Bienvenida>
        <ParrafoBienvenida>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          ultrices ultrices quam ac congue. Sed vel ligula quis diam tempus
          eleifend. Aliquam eleifend fermentum molestie. Pellentesque nec ex
          eget lectus commodo auctor. Nulla iaculis nulla id diam blandit
          dignissim. Donec vel elementum nisi. Nullam ut mauris dui.
        </ParrafoBienvenida>
      </ContenedorBienvenida>
    </ContenedorInicio>
  );
};

export default Inicio;
