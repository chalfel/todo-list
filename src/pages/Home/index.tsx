import React from 'react';
import { Container, AddTask } from './styles';

import Header from './Header';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Home = () => {
  return (
    <Container>
      <Header />
      <AddTask>
        <Input placeholder="Enter a task..." />
        <Button label="Add Task" />
      </AddTask>
    </Container>
  );
};

export default Home;
