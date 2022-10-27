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
    &:before {
      content: '';
      opacity: ${props => (props.showMessage || props.message || props.end ? 1 : 0)};
      transition: opacity 400ms ease-in-out;
      position: absolute;
      background-color: #795961;
      mix-blend-mode: multiply;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: ${props => (props.showMessage || props.message || props.end  ? 1 : 0)};
    }
  }
`;
 
export default GlobalStyle;