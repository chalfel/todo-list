import React from 'react';
import GlobalStyle from './styles/global';
import Home from './pages/Home';
import { Container } from './styles';

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Home />
      </Container>
    </>
  );
}

export default App;
