import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import './assets/fonts/Roboto-Regular.ttf';
import './App.css';
import { theme } from './configs/styled-components/theme';
import Game from './pages/Game';
import store from './store';

function App(): React.ReactElement {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Game />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
