import React from "react";
import { motion } from "framer-motion";
import styled from "@emotion/styled";

const ContenedorInicio = styled(motion.div)`
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  text-align: left;
  padding: 2rem 2rem;
`;

const ContenedorBienvenida = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 800px;
`;

const Bienvenida = styled.h4`
  font-size: 90px;
  font-weight: bold;
  color: #313c47;
  line-height: 1;
  margin-bottom: 1rem;

  @media (max-width: 1000px) {
    font-size: 70px;
  }

  @media (max-width: 800px) {
    font-size: 50px;
  }

  @media (max-width: 650px) {
    font-size: 30px;
  }
`;

const ParrafoBienvenida = styled.p`
  color: #4e6172;
  text-align: left;
  margin-bottom: 2rem;
`;

const CajaDailyVerse = styled.div`
  color: white;
  border-radius: 20px;
  max-width: 800px;
  height: auto;
  background-color: #6c63ff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border: 1px solid #6c63ff;
  padding: 2em 2em;
  text-align: center;
`;

const Inicio = () => {
  const versiculos = [
    {
      verse: "Proverbios 3:5-6",
      verseCont:
        "Confía en el Señor con todo tu corazón y no te apoyes en tu propio entendimiento. Reconócelo en todos tus caminos, y él enderezará tus sendas.",
    },
    {
      verse: "Filipenses 4:13",
      verseCont: "Todo lo puedo en Cristo que me fortalece.",
    },
    {
      verse: "Jeremías 29:11",
      verseCont:
        "Porque yo sé los planes que tengo para ti, declara el Señor, planes de bienestar y no de calamidad, para darte un futuro y una esperanza.",
    },
    {
      verse: "Isaías 41:10",
      verseCont:
        "No temas, porque yo estoy contigo; no te desanimes, porque yo soy tu Dios. Te fortaleceré, ciertamente te ayudaré, sí, te sostendré con la diestra de mi justicia.",
    },
    {
      verse: "Mateo 11:28",
      verseCont:
        "Venid a mí todos los que estáis cansados y cargados, y yo os haré descansar.",
    },
    {
      verse: "Salmos 23:1",
      verseCont: "El Señor es mi pastor; nada me faltará.",
    },
    {
      verse: "Romanos 8:28",
      verseCont:
        "Y sabemos que para los que aman a Dios, todas las cosas les ayudan a bien, esto es, a los que conforme a su propósito son llamados.",
    },
    {
      verse: "2 Timoteo 1:7",
      verseCont:
        "Porque no nos ha dado Dios espíritu de cobardía, sino de poder, de amor y de dominio propio.",
    },
    {
      verse: "Juan 16:33",
      verseCont:
        "Estas cosas os he hablado para que en mí tengáis paz. En el mundo tendréis aflicción, pero confiad, yo he vencido al mundo.",
    },
    {
      verse: "Efesios 2:10",
      verseCont:
        "Porque somos hechura suya, creados en Cristo Jesús para buenas obras, las cuales Dios preparó de antemano para que anduviéramos en ellas.",
    },
    {
      verse: "Mateo 28:20",
      verseCont:
        "Enseñándoles que guarden todas las cosas que os he mandado; y he aquí yo estoy con vosotros todos los días, hasta el fin del mundo. Amén.",
    },
    {
      verse: "1 Corintios 15:58",
      verseCont:
        "Así que, hermanos míos amados, estad firmes y constantes, creciendo en la obra del Señor siempre, sabiendo que vuestro trabajo en el Señor no es en vano.",
    },
    {
      verse: "Colosenses 3:23-24",
      verseCont:
        "Y todo lo que hagáis, hacedlo de corazón, como para el Señor y no para los hombres; sabiendo que del Señor recibiréis la recompensa de la herencia, porque a Cristo el Señor servís.",
    },
    {
      verse: "Isaías 40:31",
      verseCont:
        "Pero los que esperan a Jehová tendrán nuevas fuerzas; levantarán alas como las águilas; correrán, y no se cansarán; caminarán, y no se fatigarán.",
    },
    {
      verse: "1 Juan 4:4",
      verseCont:
        "Hijitos, vosotros sois de Dios y los habéis vencido, porque mayor es el que está en vosotros que el que está en el mundo.",
    },
    {
      verse: "Mateo 6:33",
      verseCont:
        "Mas buscad primeramente el reino de Dios y su justicia, y todas estas cosas os serán añadidas.",
    },
    {
      verse: "Hebreos 11:1",
      verseCont:
        "Es, pues, la fe la certeza de lo que se espera, la convicción de lo que no se ve.",
    },
    {
      verse: "Salmo 37:4",
      verseCont:
        "Deléitate asimismo en Jehová, y él te concederá las peticiones de tu corazón.",
    },
    {
      verse: "Romanos 15:13",
      verseCont:
        "Y el Dios de la esperanza os llene de todo gozo y paz en el creer, para que abundéis en esperanza por el poder del Espíritu Santo.",
    },
  ];

  // Función para obtener un versículo aleatorio
  const obtenerVersiculoAleatorio = () => {
    const indiceAleatorio = Math.floor(Math.random() * versiculos.length);
    return versiculos[indiceAleatorio];
  };

  // Versículo aleatorio
  const versiculoAleatorio = obtenerVersiculoAleatorio();

  const containerVariants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
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
      <ContenedorBienvenida>
        <Bienvenida>
          Bienvenidos a <br />
          <span style={{ color: "#6c63ff" }}>biblionube</span>
        </Bienvenida>
        <ParrafoBienvenida>
          Ya sea que estés buscando profundizar en tu fe, preparar tu próxima
          predicación o simplemente enriquecer tu conocimiento, BiblioNube es tu
          compañero ideal. Con una interfaz amigable y una gran biblioteca de
          recursos descargables, nuestra aplicación está diseñada para
          proporcionar una experiencia de aprendizaje enriquecedora y accesible.
          ¡Explora, descarga y sumérgete en el mundo de la sabiduría bíblica con
          BiblioNube!
        </ParrafoBienvenida>
      </ContenedorBienvenida>

      <CajaDailyVerse>
        <div>
          <p style={{ fontStyle: "italic" }}>
            "{versiculoAleatorio.verseCont}"
          </p>
          <br />
          <p style={{ fontWeight: "bold" }}>{versiculoAleatorio.verse}</p>
        </div>
      </CajaDailyVerse>
    </ContenedorInicio>
  );
};

export default Inicio;
