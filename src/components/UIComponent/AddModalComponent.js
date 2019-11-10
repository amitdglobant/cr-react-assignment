import React, { Fragment, useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Alert
} from "reactstrap";
import { IS_CLOSED, IS_SAVED } from "../../types/types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../../actions/incidentActions";

const AddModalComponent = props => {
  const [error, setError] = useState(<Fragment />);
  const idRef = React.createRef();
  const titleRef = React.createRef();
  const descriptionRef = React.createRef();

  const isSave = props.incident ? false : true;
  const incident = props.incident
    ? props.incident
    : { title: null, description: null, id: null };

  const { title, id, description } = incident;

  const validateData = () => {
    const errorMessages = [];
    if (idRef.current.value === "") {
      errorMessages.push("Please enter an ID");
    }
    if (titleRef.current.value === "") {
      errorMessages.push("Please enter a Title");
    }
    if (descriptionRef.current.value === "") {
      errorMessages.push("Please enter a Description");
    }
    return errorMessages;
  };

  const saveIncidentData = props => {
    const errors = validateData();
    if (!errors.length) {
      props.actions.saveIncident(
        {
          id: idRef.current.value,
          title: titleRef.current.value,
          description: descriptionRef.current.value
        },
        isSave,
        false
      );
      props.onSave(IS_SAVED);
    } else {
      const errorsJsx = errors.map((error, index) => (
        <li key={index}>{error}</li>
      ));
      setError(
        <Alert color="danger">
          <ul>{errorsJsx}</ul>
        </Alert>
      );
    }
  };

  return (
    <div>
      <Modal isOpen={props.open} toggle={() => props.onSave(IS_CLOSED)}>
        <ModalHeader toggle={() => props.onSave(IS_CLOSED)}>
          {props.incident ? "Edit" : "Add"} Incident
        </ModalHeader>
        <ModalBody>
          {error}
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Incident ID#</InputGroupText>
            </InputGroupAddon>
            <input
              type="number"
              defaultValue={id}
              ref={idRef}
              style={{
                width: "75%",
                background: props.incident ? "#e2e2e2" : "#ffffff"
              }}
              readOnly={props.incident ? true : false}
            />
          </InputGroup>{" "}
          <br />
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Title</InputGroupText>
            </InputGroupAddon>
            <input
              type="text"
              defaultValue={title}
              ref={titleRef}
              style={{ width: "85%" }}
            />
          </InputGroup>{" "}
          <br />
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Description</InputGroupText>
            </InputGroupAddon>
            <input
              type="text"
              defaultValue={description}
              ref={descriptionRef}
              style={{ width: "75%" }}
            />
          </InputGroup>
          <br />
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={() => saveIncidentData(props)}>
            {props.incident ? "Edit" : "Add"} Incident
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

const mapStatetoProps = state => {
  return {
    incidentState: state.incidentState
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(AddModalComponent);
