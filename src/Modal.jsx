import React from 'react';
import styled from 'styled-components';
import { FaDownload } from 'react-icons/fa';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: #2a2a2a;
  border-radius: 8px;
  padding: 2rem;
  width: 90%;
  height: 90%;
  overflow-y: auto;
`;

const ModalTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

const ModalAuthor = styled.p`
  font-size: 1rem;
  font-style: italic;
  color: #bbbbbb;
  margin-bottom: 2rem;
`;

const ModalText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const Tag = styled.span`
  background-color: #3a3a3a;
  color: #ffffff;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.875rem;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: #ffffff;
  font-size: 1.5rem;
  cursor: pointer;
`;

const DownloadButton = styled.a`
  display: inline-flex;
  align-items: center;
  background-color: #800020; /* Color burdeos */
  color: #ffffff;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-size: 1rem;
  text-decoration: none;
  margin-top: 2em;
  cursor: pointer;

  &:hover {
    background-color: #a00028; /* Un tono más claro de burdeos para el hover */
  }

  svg {
    margin-right: 0.5rem;
  }
`;

function Modal({ escritura, onClose }) {
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <ModalTitle>{escritura.titulo}</ModalTitle>
        <ModalAuthor>{escritura.autor}</ModalAuthor>
        <ModalText>{escritura.texto}</ModalText>
        <TagContainer>
          {escritura.etiquetas.map((etiqueta, index) => (
            <Tag key={index}>{etiqueta}</Tag>
          ))}
        </TagContainer>
        <DownloadButton href={escritura.link} target="_blank" rel="noopener noreferrer">
          <FaDownload /> Descargar
        </DownloadButton>
      </ModalContent>
    </ModalOverlay>
  );
}

export default Modal;
