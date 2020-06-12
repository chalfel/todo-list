import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`  
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:regular,bold,italic&subset=latin,latin-ext');
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');

  * {
    margin: 0px;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    font: 14px 'Inter', sans-serif;
    background-color: #1EB4f5;
    color: #FAFAFA;
    -webkit-font-smoothing: antialiased !important;
  }

  ul {
    list-style: none;
  }
`;

export default GlobalStyle;
