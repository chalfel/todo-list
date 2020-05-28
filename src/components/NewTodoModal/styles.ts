import styled from 'styled-components';

export const Container = styled.div<{hide: boolean}>`
  position: absolute;
  display: ${props => props.hide ? 'none' : 'flex'};
  background-color: rgba(0,0,0,0.4);
  flex-direction: column;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  justify-content: center;
  height: 100%;
  width: 100%;
  

  .modal-content {
    width: 40vw;
    height: auto;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background: #ffff;
    border-radius: 5px;
    border: none;
    box-shadow: 0 0 5px 0 rgba(0,0,0,0.4);
  }

  .modal-body {
    margin: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: left;
    justify-content: center;
  }

  .modal-body label {
    padding-left: 12px;
  }
  .modal-body input {
    border: none;
    border-bottom: 1px solid black;
    background-color: transparent;
    margin: 10px;
    width: 200px;
    padding-left: 10px;
    padding-bottom: 5px;
  }
  
  .modal-body button {
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
  }

  .modal-header {
    background-color: #7F2982;
    width: 100%;
    color: white;
    height: 60px;
    display: flex;
    align-items: center;
  }

  .modal-header h1 {
    margin: 40px 20px;
  }
`;
