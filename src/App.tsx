import React from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';
import { theme } from './configs/styled-components/theme';
import Game from './pages/Game';

function App(): React.ReactElement {
  return (
    <ThemeProvider theme={theme}>
      <Game />
    </ThemeProvider>
  );
}

export default App;
