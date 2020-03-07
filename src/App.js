import React from 'react';
import GlobalStyle, { AppContainer } from './styles/global';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import ModalProvider from './context/ModalContext';
import KanaProvider from './context/KanaContext';

const App = () => {
  return (
    <ModalProvider>
      <AppContainer>
        <KanaProvider>
          <Navbar />
          <Header />
          <Main />
          <Footer />
        </KanaProvider>
        <GlobalStyle />
      </AppContainer>
    </ModalProvider>
  );
};

export default App;
