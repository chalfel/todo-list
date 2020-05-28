import React from 'react';
import GlobalStyle from './styles/global';
import TodoList from './pages/TodoList';
import Header from './components/Header';
import { Container } from './styles';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Container>
        <TodoList />
      </Container>
    </>
  );
}

export default App;
