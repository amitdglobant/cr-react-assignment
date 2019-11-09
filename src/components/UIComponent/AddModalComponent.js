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
      props.actions.saveIncident({
        id: idRef.current.value,
        title: titleRef.current.value,
        description: descriptionRef.current.value,
        media: {
          image_url: "",
          image_url_thumb:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAt1BMVEX///8AAAC+1zNSUlL5+fnv7+8+Pj7Y2Nh/f3////2rq6uOjo6Ghob19fUwMDDq6uri4uKXl5c5OTm3t7e9vb3GxsZWVlZ3d3ednZ1ERESwsLC5ubmkpKTR0dE1NTWSkpJgYGC51BwoKChKSkpra2sLCwsgICAVFRXI3F30+N7c6J1oaGj9/vbT4n+41AXD2Unn77rV5Ijy99bu9MrK3WDM3mq/1jvg66r7/e/s88fT44Lm7rXb55eGUEMbAAAGSUlEQVR4nO2aaXujNhRGIcE2eMW78RLvdvZJ0knrdOb//64KtF3JGGOnnUzS93zIYySEOJKQriCOAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwywk++gb+U4LAuY//fGUeHh/u32FYGvd7ratoNe16NLnQiClkl03OaZxfdy6C+4uL+bebM0dqbbp2NbOJzomSlH52aV4sPKvq3ATO7Zw5Pp1VeOBaXKoOuUyO/cziv8aQcX3BFJ+Dk59Gb2kLMjoi8wMMZ61isVhvp+TczGPFb7sTR2ptkyLouqKGDzBsJVcr72fwccp4O23duNJW0bKuD0pJ7gcYFg8aBsF1Yjj/yX7mdvSlkZ/cYa28FceLJPt3MmQd98I7cX6df6SWhM9W399KJA3jg9/KkFk9CMWLP/JeTs4ydMUTisX4d6qhZyyZlqGZRwpl3IWRl2l4ww2Z422+hzEUgl2jPmK9Z9jpL1jCOqroRbOgDEs+y1wvx6aNN+q34rG/jaq6ULvDGLEfpeoVW4zrfsk0tCcEyfcLqfh6n0exwi8yM1N9rW0Zjra65rpsFmXYV3m0B5r0dhcToxUd505lybAi2/BprhT/fMmxMoqVYmKmNkoJ+304M+vum4YRydK9bq+2ZcOQTN7uMo/hThkyx7+cY3Nqw5VNeQhq6LWsut0eNYyMrKa4wJ1dht8xN1z7KWUyDQPn+oIoPhwbqV1+jVk+w5TYp0oMLfjEM5GHm4X8tdSGNnkMb+dUkYXimZRp2x0zlM/TrNztTDekem3YL7ebsqN5s4lHs1ljv0siq0EN15V2Z3wpDrracFArcBrWJPxEDZnjj0xDMdEM8xjKEV0yivaI4aZBm40vQLwlBryMWFZGxJC3g1N19XkZq0XMjWnIRmqQMVLJpMlvYVPXbEaGoW+NmZXykIZyQyLky1pEdgPvxCkxFBni0M9huLMMs0equGs1ldZcytAw5Gl3qmxBeYhfahMpbncV/yzHtM0ivj6nIstscxve24bM8bDiXh8eMKyq8K6jC0fSo2BdRSwqdbMuLxxvdVN41uWW7zK8PWg40CrHDIc8jbyr4M9OpAxrKmfKE9RxOKrMyMJHDNXoITPa6YaPLwcNR9ZYyTAc2BrOWHoULCGnzRP401eo2BtQYqie6ncZvh0UlGHpUh571UrCet+waWtkGI6I4dDd432Ge3Np9k7K3euZBG7Ycfb7kCxOluE61ZAK9rp3yuN8wzdrPXzODmrEgjw2U8Vg1ZF3xnNYTOnDplJWw37VjmOc3r9geGsaPh0J20RQtTZTu7p6ZTjR1sZNrejuSTCT7nL173u2R17DRnnI0DuDwHk1lsLd0e2FeEtjbnFFtFyjhp59oqe6XxhOZU5Nn8rDAvWcL/IY8lVIRJJt+/boRDP/O8cGUXSXMShEWkvXHAfYfITpYVpRxzKmkU+zCMHix5gHMSJok2vqEUPeKhFP7xsXcIzHMA5JcyiKG9crhpzreStqww5PrdeMs+LukYbipsSJyURTp/1BB0yG4UA3kGwTsn991SM05xt+NResm5OaU5iM1SawYBqqzep0EoYduReeEEN30fGcUG75krvlF+PRTSMiORmG8s2K3+2KcaImsSBQUenxraFCvm2zqZCaq4dOTGLR9P1h0tdC92rcKeut8BFDJ7IvpcZX4DwLw2R7n0+QbFINirTmxDBl8eYnpRp2Dl/7mGFonb/Wi7Bc7uNXNCe89w5T3usXjfmdG8qVXMFfYqjIm2bJFdZ8iRHlMrSbkryI5U/h/HWXW05QtQXVuFjSmp1Gj54kA3a54rd1ll42VzpxEfJJJC1qW6qcGNpYLTV7B2J/n/dVqUFhSl4TLpr6/XC5yZjqPVM45ZPH+m6k0mrT+CTWKA0/CfciIx6ZCMcZu0iYxL3xdpFHwFV19+OKzBH1LnUpJbjTI/QcwtHU9/1KuXvkg2/yydcOZBWFhv1ehScevWhKNWFIvysHPJyZfz/149qnIXB+xN+Af37h/8iIv+OzreApc+jnIgiuH0/4qPYJYX338oX1BF/fEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPhf8w9w4lu0QxkMeQAAAABJRU5ErkJggg=="
        }
      });
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
          Add Incident
        </ModalHeader>
        <ModalBody>
          {error}
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Incident ID#</InputGroupText>
            </InputGroupAddon>
            <input type="number" ref={idRef} style={{ width: "75%" }} />
          </InputGroup>{" "}
          <br />
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Title</InputGroupText>
            </InputGroupAddon>
            <input type="text" ref={titleRef} style={{ width: "85%" }} />
          </InputGroup>{" "}
          <br />
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Description</InputGroupText>
            </InputGroupAddon>
            <input type="text" ref={descriptionRef} style={{ width: "75%" }} />
          </InputGroup>
          <br />
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={() => saveIncidentData(props)}>
            Save Incident
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
