import React, { useEffect } from "react";
import { useGlobalContext } from "../context";

const Modal = () => {
  const { modalContent, closeModal } = useGlobalContext();
  useEffect(() => {
    let timeout = setTimeout(() => {
      closeModal();
    }, 7000);
    return () => {
      clearTimeout(timeout);
    };
  }, [closeModal]); // eslint-disable-next-line
  return (
    <div className="modal newClass">
      <span>{modalContent}</span>
    </div>
  );
};

export default Modal;
