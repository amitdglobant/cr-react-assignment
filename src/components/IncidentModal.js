import React from 'react';
import { Modal, Button } from "react-bootstrap";
import { connect } from "react-redux";

function IncidentModal(props){
  const {
    isModalVisible,
    presentIncident = {}
  } = props;

  return(
    <>
    <Modal>
    <Modal.Body>
      <div>
        <div className="form-group">
          <label>Title:</label>
          <input
              type="text"
              className="form-control"
              name="title"
              value={""}
              onChange={() => {}}
              />
        </div>
      </div>
    </Modal.Body>
    </Modal>
    </>
  )
}