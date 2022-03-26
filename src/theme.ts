import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inconsolata&display=swap');

  body,
  html {
    margin: 0;
    padding: 0;
    color: white;
    font-family: 'Inconsolata', Arial, Helvetica, sans-serif;
    background-attachment: fixed;
  }

  body {
    background: url("https://www.pixel4k.com/wp-content/uploads/2018/11/night-city-city-lights-overview-aerial-view-4k_1541972402.jpg") no-repeat fixed;
    background-size: cover;
    display: grid;
    height: 100vh;
    overflow: hidden;
  }
`;

export const theme = {};
