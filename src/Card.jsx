import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  background-color: #2e2e2e;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 1s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 1rem;
`;

const CardTitle = styled.h2`
  font-size: 1.25rem;
  color: #cccccc; /* Título más apagado */
  margin-bottom: 5px; /* Espacio entre título y autor */
`;

const CardAuthor = styled.p`
  font-size: 0.875rem;
  font-style: italic;
  color: #aaaaaa; /* Autor más apagado */
  margin-bottom: 1rem;
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Tag = styled.span`
  background-color: #1e1e1e;
  color: #ffffff;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.875rem;
`;

function Card({ escritura, onClick }) {
  return (
    <CardContainer onClick={onClick}>
      <CardImage src={escritura.imagen} alt={escritura.titulo} />
      <CardContent>
        <CardTitle>{escritura.titulo}</CardTitle>
        <CardAuthor>{escritura.autor}</CardAuthor>
        <TagContainer>
          {escritura.etiquetas.map((etiqueta, index) => (
            <Tag key={index}>{etiqueta}</Tag>
          ))}
        </TagContainer>
      </CardContent>
    </CardContainer>
  );
}

export default Card;