import React from 'react';
import { Container } from './styles';

interface IInput {
  placeholder: string;
}


const Input = (props: IInput) => {
  const { placeholder } = props;
  return(
    <Container placeholder={placeholder} />
  );
};

export default Input;