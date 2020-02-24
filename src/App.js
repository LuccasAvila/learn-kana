import React from 'react';
import GlobalStyle, { AppContainer } from './styles/global';
import Navbar from './components/Navbar';
import Main from './components/Main';

const App = () => {
  return (
    <AppContainer>
      <Navbar />
      <Main />
      <GlobalStyle />
    </AppContainer>
  );
};

export default App;
