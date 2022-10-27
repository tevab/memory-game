import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    height: 100vh;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    background-color: #f1b3c6;
    font-family: 'Lora', Times, serif;
  }
`;
 
export default GlobalStyle;