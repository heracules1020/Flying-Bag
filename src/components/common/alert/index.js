import React from "react";
import { Alert } from "reactstrap";

const Notify = props => {
  const onDismiss = () => {
    props.onDismiss();
  };

  return (
    <Alert color={props.color} isOpen={props.visible} toggle={onDismiss}>
      {props.messageContent}
    </Alert>
  );
};

export default Notify;
