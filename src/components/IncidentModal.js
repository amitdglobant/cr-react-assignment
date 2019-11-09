import React, { useState ,useEffect} from "react";
import { Modal, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { showModal, hideModal, updateIncident, addIncident } from "../actions";
function IncidentModal(props) {
  const {
    isModalShow,
    currentIncident = {},
    hideModal,
    showModal,
    addIncident,
    updateIncident
  } = props;
  const [incident, setIncident] = useState(currentIncident);
  function handleInput(e) {
    const { name, value } = e.target;
    setIncident({ ...incident, [name]: value });
  }
  function handleIncident() {
    if (currentIncident.id) return updateIncident(incident);
    addIncident(incident);
  }
  useEffect(() => {
    setIncident(currentIncident);
  }, [props]);
  return (
    <>
      <Modal show={isModalShow} onHide={hideModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className="form-group">
              <label>Email address:</label>
              <input
                type="text"
                className="form-control"
                name="title"
                value={incident.title}
                onChange={handleInput}
              />
            </div>
            <div class="form-group">
              <label>Name : </label>
              <textarea
                type="text"
                className="form-control"
                name="description"
                value={incident.description}
                onChange={handleInput}
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={hideModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleIncident}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
const mapStateProps = ({ currentIncident, isModalShow }) => {
  return {
    currentIncident,
    isModalShow
  };
};
export default connect(
  mapStateProps,
  { showModal, hideModal, addIncident, updateIncident }
)(IncidentModal);
