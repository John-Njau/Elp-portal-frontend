import React from "react";
import Modal from "react-bootstrap/Modal";

export default function ModalComponent({
  modalTitle,
  modalBody,
  modalFooter,
  modalState,
  handleClose,
  children,
  width,
}) {
  return (
    <>
      <Modal
        show={modalState}
        onHide={handleClose}
        animation={false}
        style={{ width: width }}
      >
        <Modal.Header>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalBody ?? children}</Modal.Body>
        <Modal.Footer>{modalFooter}</Modal.Footer>
      </Modal>
    </>
  );
}

export function ModalComponentBig({
  modalTitle,
  modalBody,
  modalFooter,
  modalState,
  handleClose,
  children,
}) {
  return (
    <>
      <Modal show={modalState} size="lg" onHide={handleClose} animation={false}>
        <Modal.Header>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalBody ?? children}</Modal.Body>
        <Modal.Footer>{modalFooter}</Modal.Footer>
      </Modal>
    </>
  );
}


export  function ModalBodyComponent({
  modalBody,
  modalState,
  handleClose,
  children,
  width,
}) {
  return (
    <>
      <Modal
        show={modalState}
        onHide={handleClose}
        animation={false}
        style={{ width: width }}
      >
        
        <Modal.Body>{modalBody ?? children}</Modal.Body>
      </Modal>
    </>
  );
}