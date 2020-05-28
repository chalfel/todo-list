import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
  align-items: center;
  justify-content: flex-start;
  width: 90vw;
  height: 90vh;
  margin: 0 auto;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  background: #fefffe;

  table {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  tr {
    display: flex;
    flex-direction: row;
    padding-left: 10px;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    margin: 20px 20px 0 20px;
    height: 50px;
    border: none;
    background: white;
  }

  tr + tr {
    margin: 20px;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
  }

  th,
  td {
    width: 100px;
    cursor: pointer;
    text-align: left;
  }
`;

export const Header = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 10px;
`;

export const Button = styled.button`
  border: none;
  margin-top: 20px;
  border-radius: 15px;
  width: 150px;
  height: 40px;
  background-color: #4059ad;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  color: white;
`;
