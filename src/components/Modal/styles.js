import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  overflow: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.div`
  background: #fff;
  max-width: 42%;
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.4);
  padding: 32px;
  position: relative;
`;

export const Close = styled.div`
  position: absolute;
  font-size: 1.5rem;
  color: #a2a2a2;
  top: 32px;
  right: 32px;
  transition: 0.4s;

  &:hover {
    color: #777777;
    cursor: pointer;
  }
`;
