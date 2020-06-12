import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

export const LeftBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  #date {
    font-size: 18px;
    font-weight: bold;
  }
  #tasks {
    font-size: 12px;
    color: #1c8cbc;
  }

`; 

export const RightBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 45%;
  font-size: 18px;

`;