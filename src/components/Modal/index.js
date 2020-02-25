import React, { useRef, useContext, useEffect } from 'react';
import { Container, ModalContent, Close } from './styles';
import { ModalContext } from '../../context/ModalContext';

const Modal = ({ children }) => {
  const modalRef = useRef();
  const context = useContext(ModalContext);

  const _handleClick = e => {
    if (modalRef.current && !modalRef.current.contains(e.target))
      context.hideModal();
  };

  return (
    <>
      {context.component ? (
        <Container onClick={_handleClick}>
          <ModalContent ref={modalRef}>
            <Close
              onClick={() => {
                context.hideModal();
              }}
            >
              &times;
            </Close>
            {context.component ? context.component : null}
          </ModalContent>
        </Container>
      ) : null}
    </>
  );
};

export default Modal;
