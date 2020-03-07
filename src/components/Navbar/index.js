import React, { useContext } from 'react';

import { Container, Sun, ToogleButton } from './styles';
import { KanaContext } from '../../context/KanaContext';

const Navbar = () => {
  const context = useContext(KanaContext);

  return (
    <Container>
      <div className="logo">
        <Sun />
        <p>日本語</p>
      </div>
      <div>
        <ToogleButton onClick={context.toggleKana}>
          Change to {context.hiraganaSelected ? 'Katakana' : 'Hiragana'}
        </ToogleButton>
      </div>
    </Container>
  );
};

export default Navbar;
