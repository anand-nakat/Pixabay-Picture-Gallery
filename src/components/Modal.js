import React, { useEffect } from "react";

const Modal = ({ modalContent, closeModal }) => {
  useEffect(() => {
    let timeout = setTimeout(() => {
      closeModal();
    }, 7000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);
  return <div className="modal newClass">{modalContent}</div>;
};

export default Modal;
