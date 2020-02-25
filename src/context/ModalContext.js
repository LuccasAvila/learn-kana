import React, { createContext, useState } from 'react';

export const ModalContext = createContext({
  component: null,
  props: {},
  showModal: () => {},
  hideModal: () => {},
});

export const ModalProvider = ({ children }) => {
  const [component, setComponent] = useState(null);
  const [props, setProps] = useState({});
  const showModal = (component, props = {}) => {
    setComponent(component);
    setProps(props);
  };
  const hideModal = () => {
    setComponent(null);
    setProps({});
  };

  return (
    <ModalContext.Provider value={{ component, props, showModal, hideModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
