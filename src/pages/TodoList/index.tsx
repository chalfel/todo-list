import React, { useEffect, useState } from 'react';

import Todo from '../../components/Todo';
import NewTodoModal from '../../components/NewTodoModal';
import { ITodo } from '../../types/Todo';

import { Container, Header, Button } from './styles';

const TodoList = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [isHide, setIsHide] = useState<boolean>(true);

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem('todoList') || '[]'));
  }, []);

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todos));
  }, [todos]);

  const closeModal = () => {
    setIsHide((prev) => !prev);
  };

  const handleOnClick = (e: React.FormEvent) => {
    e.preventDefault();
    closeModal();
  };

  const handleOnDone = (todo: ITodo) => {
    const newTodos = todos.map((t) => {
      if (t.id === todo.id) {
        return todo;
      }
      return t;
    });
    console.log(newTodos);
    setTodos(newTodos);
  };
  return (
    <Container>
      <NewTodoModal hide={isHide} setTodos={setTodos} closeModal={closeModal} />
      <Header>
        <Button onClick={handleOnClick}>Add Task</Button>
      </Header>
      <table>
        <tr>
          <th> Done </th>
          <th> Task Name </th>
          <th> Owner</th>
          <th> Priority </th>
          <th> Description </th>
        </tr>
        {todos &&
          todos.map((todo) => (
            <Todo key={todo.id} data={todo} handleOnDone={handleOnDone} />
          ))}
      </table>
    </Container>
  );
};

export default TodoList;
