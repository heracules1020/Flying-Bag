import React from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import "./index.css";

const PopUp = props => {
  const {
    showModal,
    contentClassName,
    modalClassName,
    headerClassName
  } = props;
  const closeBtn = (
    <span className="fa fa-times-circle-o" onClick={props.onCloseModal}></span>
  );
  return (
    <div>
      <Modal
        isOpen={showModal}
        backdrop="static"
        keyboard={false}
        className={modalClassName}
      >
        <ModalHeader close={closeBtn} className={headerClassName}></ModalHeader>
        <ModalBody className={contentClassName}>{props.children}</ModalBody>
      </Modal>
    </div>
  );
};

export default PopUp;
