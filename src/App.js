import React from 'react';
import GlobalStyle, { AppContainer } from './styles/global';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import ModalProvider from './context/ModalContext';

const App = () => {
  return (
    <ModalProvider>
      <AppContainer>
        <Navbar />
        <Header />
        <Main />
        <Footer />
        <GlobalStyle />
      </AppContainer>
    </ModalProvider>
  );
};

export default App;
