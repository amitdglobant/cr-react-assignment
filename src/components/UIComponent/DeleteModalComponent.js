import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const DeleteModalComponent = props => {
  const { message, deleteId } = props;

  return (
    <div>
      <Modal isOpen={props.open} toggle={() => props.onClose(0)}>
        <ModalHeader toggle={() => props.onClose(0)}>
          Incident # {deleteId}
        </ModalHeader>
        <ModalBody>{message}</ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={() => props.onClose(deleteId)}>
            Delete
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default DeleteModalComponent;
