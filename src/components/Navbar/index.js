import React from 'react';

import { Container, Sun } from './styles';

const Navbar = () => {
  return (
    <Container>
      <div className="logo">
        <Sun />
        <p>日本語</p>
      </div>
    </Container>
  );
};

export default Navbar;
