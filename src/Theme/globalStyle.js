import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  html, body {
    overflow: hidden;
    height: 100%;
  }
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
  #root{
    position: fixed;
    inset: 0;
    overflow: auto;
    display: grid;
    place-items: center;
}
`;
 
export default GlobalStyle;