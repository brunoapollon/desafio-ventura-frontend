import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html{
    height: 100vh;
    width: 100%;
  }
  body{
    height: 100vh;
    width: 100%;
    margin: 0;
    padding: 0;
    background: #E5E5E5;
  }
  h1,h2,h3,h4,h5, p, span, input, a, button{
    font-family: 'Ubuntu', sans-serif;
  }
`;
