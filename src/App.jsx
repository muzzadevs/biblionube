import React, { useState } from 'react';
import styled from 'styled-components';
import Card from './Card';
import Modal from './Modal';
import { GlobalStyles } from './GlobalStyles';
import { escrituras } from './data';

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #1a1a1a;
  color: #ffffff;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
`;

function App() {
  const [selectedEscritura, setSelectedEscritura] = useState(null);

  return (
    <>
      <GlobalStyles />
      <AppContainer>
        <Title>biblionube</Title>
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