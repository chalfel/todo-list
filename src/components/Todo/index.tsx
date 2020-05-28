import React, { useState, useEffect } from 'react';

import { ITodo } from '../../types/Todo';

interface TodoProps {
  key: string;
  data: ITodo;
  handleOnDone: Function;
}

const Todo = ({ data, key, handleOnDone }: TodoProps) => {
  const [todoData, setTodoData] = useState<ITodo>(data);

  const setDone = () => {
    const newTodoData = {
      ...todoData,
      done: !todoData.done,
    };
    setTodoData(newTodoData);

    handleOnDone(newTodoData);
  };

  return (
    <tr>
      <td>
        <input type="checkbox" checked={todoData.done} onClick={setDone} />
      </td>
      <td>{todoData.title}</td>
      <td>{todoData.owner}</td>
      <td>{todoData.priority}</td>
      <td>{todoData.description}</td>
    </tr>
  );
};

export default Todo;
