import StartingPage from 'pages/Starting';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from 'theme';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<StartingPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}
