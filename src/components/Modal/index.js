import React from 'react';
import { Container, ModalContent, Close } from './styles';

const Modal = ({ children }) => {
  return (
    <Container>
      <ModalContent>
        <Close>&times;</Close>
      </ModalContent>
    </Container>
  );
};

export default Modal;
