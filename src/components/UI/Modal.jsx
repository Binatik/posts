import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Content = styled.div`
  width: 60%;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
`;

const Modal = ({ isActive, setIsActive, children }) => {
  function setModal() {
    return (
      <Modal.Container isActive={isActive} onClick={() => setIsActive(false)}>
        <Content onClick={event => event.stopPropagation()}>{children}</Content>
      </Modal.Container>
    );
  }

  const root = document.getElementById("root");
  const modal = setModal();

  return ReactDOM.createPortal(modal, root);
};

Modal.Container = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  z-index: 10;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
  opacity: ${props => (props.isActive ? "1" : "0")};
  pointer-events: ${props => (props.isActive ? "all" : "none")};
  transition: opacity 0.2s;
`;

export { Modal };
