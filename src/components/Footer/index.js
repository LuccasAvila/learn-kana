import React, { useContext } from 'react';
import { Container } from './styles';
import { ModalContext } from '../../context/ModalContext';

import Modal from '../Modal';
import HiraganaTable from '../Modal/HiraganaTable';
import About from '../Modal/About';

const Footer = () => {
  const context = useContext(ModalContext);

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
            context.showModal(HiraganaTable);
          }}
        >
          Hiragana Table
        </li>
      </ul>
      <Modal>a</Modal>
    </Container>
  );
};

export default Footer;
