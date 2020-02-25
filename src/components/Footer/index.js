import React, { useContext } from 'react';
import { Container } from './styles';
import { ModalContext } from '../../context/ModalContext';

import Modal from '../Modal';
import HiraganaTable from '../Modal/HiraganaTable';

const Footer = () => {
  const context = useContext(ModalContext);

  return (
    <Container>
      <ul>
        <li>About</li>
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
