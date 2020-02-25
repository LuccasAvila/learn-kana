import React from 'react';
import GlobalStyle, { AppContainer } from './styles/global';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const App = () => {
  return (
    <AppContainer>
      <Navbar />
      <Header />
      <Main />
      <Footer />
      <GlobalStyle />
    </AppContainer>
  );
};

export default App;
