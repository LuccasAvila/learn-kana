import React from 'react';
import GlobalStyle, { AppContainer } from './styles/global';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <AppContainer>
      <Navbar />
      <GlobalStyle />
    </AppContainer>
  );
};

export default App;
