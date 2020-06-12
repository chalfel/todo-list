import React from 'react';
import { Container, LeftBlock, RightBlock } from './styles';

const Header = () => {
  return (
    <Container>
      <LeftBlock>
        <span id="date"> Saturday, June 1</span>
        <span id="tasks"> 3 Active Tasks</span>
      </LeftBlock>
      <RightBlock>
        <span> Incomplete Tasks</span>
        <span> Completed Tasks</span>
      </RightBlock>
    </Container>
  );
};

export default Header;
