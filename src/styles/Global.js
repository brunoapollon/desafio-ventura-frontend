import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html{
    height: 100%;
    margin: 0;
    padding: 0;
  }
  body{
    background-color:#E5E5E5;
    margin: 0;
    padding: 0;
    height: 100%;
  }
  h1,h2,h3,h4,h5, p, span, input, a, button{
    font-family: 'Ubuntu', sans-serif;
  }
`;
