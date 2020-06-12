import React from 'react';
import { Container } from './styles';

interface IButton {
  label?: string;
  handleOnClick?: ((event: React.MouseEvent<HTMLButtonElement>) => void);
}

const Button = (props: IButton) => {
  const { label, handleOnClick } = props;
  return(
    <Container onClick={handleOnClick}>
      {label}
    </Container>
  );
};

export default Button;