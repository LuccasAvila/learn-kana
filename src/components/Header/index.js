import React from 'react';
import { Container } from './styles';

const Header = () => {
  return (
    <Container>
      <img src={process.env.PUBLIC_URL + '/logo48.png'} alt="Torii" />
      <h1>Learn Kana</h1>
    </Container>
  );
};

export default Header;
