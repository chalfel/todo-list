/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, InputHTMLAttributes } from 'react';

import { Container } from './styles';
import { ITodo } from '../../types/Todo';

interface INewTodoModalProps {
  hide: boolean;
  setTodos: Function;
  closeModal: Function;
}

const NewTodoModal = ({ hide, setTodos, closeModal }: INewTodoModalProps) => {
  const [ newTodo, setNewTodo ] = useState<ITodo>({
    id: `${Math.random()}`,
    description: '',
    done: false,
    owner: '',
    priority: '',
    title: '',
  });

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTodos((prev: ITodo[]) => [...prev, newTodo]);
    closeModal();
  };
  const setTitle = (e: React.FormEvent<HTMLInputElement>) => {
    e.persist();
    const value = e.currentTarget.value || '';
    setNewTodo((prev: ITodo) => (
      {
        ...prev,
        title: value
      }
    ));
  };
  const setOwner = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value || '';

    setNewTodo((prev: ITodo) => (
      {
        ...prev,
        owner: value
      }
    ));
  };
  const setPriority = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value || '';

    setNewTodo((prev: ITodo) => (
      {
        ...prev,
        priority: value,
      }
    ));
  };
  const setDescription = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value || '';

    setNewTodo((prev: ITodo) => (
      {
        ...prev,
        description: value
      }
    ));
  };
  return(
    <Container hide={hide}>
      <div className="modal-content">
        <div className="modal-header">
          <h1> Create a New Task</h1>
        </div>
        <form className="modal-body">
          <label htmlFor="taskName">Task Name</label>
          <input 
            id="taskName" 
            type="text" 
            value={newTodo.title}
            onChange={setTitle}
          />
          <label htmlFor="Owner">Owner</label>
          <input 
            id="owner" 
            type="text"
            value={newTodo.owner}
            onChange={setOwner}
          />
          <label id="priority">Priority</label>
          <input 
            id="priority" 
            type="text"
            value={newTodo.priority}
            onChange={setPriority}  
          />
          <label id="description">Description</label>
          <input 
            id="description" 
            type="text" 
            value={newTodo.description}
            onChange={setDescription}
          />
          <button type="submit" onClick={handleOnSubmit}> 
            Create
          </button>
        </form>
      </div>
    </Container>
  );
};  

export default NewTodoModal;