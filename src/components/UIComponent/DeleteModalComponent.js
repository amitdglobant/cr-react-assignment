import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { IS_CLOSED, IS_DELETED } from "../../types/types";

const DeleteModalComponent = props => {
  const { message, deleteId } = props;

  return (
    <div>
      <Modal isOpen={props.open} toggle={() => props.onClose(IS_CLOSED)}>
        <ModalHeader toggle={() => props.onClose(IS_CLOSED)}>
          Incident # {deleteId}
        </ModalHeader>
        <ModalBody>{message}</ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={() => props.onClose(IS_DELETED)}>
            Delete
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default DeleteModalComponent;
