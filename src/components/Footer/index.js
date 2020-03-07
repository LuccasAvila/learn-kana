import React, { useContext } from 'react';
import { Container } from './styles';
import { ModalContext } from '../../context/ModalContext';
import { KanaContext } from '../../context/KanaContext';

import Modal from '../Modal';
import HiraganaTable from '../Modal/HiraganaTable';
import KatakanaTable from '../Modal/KatakanaTable';
import About from '../Modal/About';

const Footer = () => {
  const context = useContext(ModalContext);
  const contextKana = useContext(KanaContext);

  return (
    <Container>
      <ul>
        <li
          onClick={() => {
            context.showModal(About);
          }}
        >
          About
        </li>
        <li
          onClick={() => {
            context.showModal(
              contextKana.hiraganaSelected ? HiraganaTable : KatakanaTable
            );
          }}
        >
          {contextKana.hiraganaSelected ? 'Hiragana' : 'Katakana'} Table
        </li>
      </ul>
      <Modal />
    </Container>
  );
};

export default Footer;
