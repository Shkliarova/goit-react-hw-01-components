import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'components/GlobalStyle';

const theme = {
  colors: {
    darkgrey: "#505252",    
    grey: "#edf7f7",
    black: "#0f0f0f",
    green: "#6b856d",
    red:"#e0141e",
    lightgreen: "#43e80c",
    blue: "#08c1c7",
    white: "#fafafa"
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>
);
