import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle
} from "reactstrap";
import { Link } from "react-router-dom";

class IncidentDetails extends Component {
  render() {
    const info = this.props.location.state.rowData;
    return (
      <div className="table-info">
        <Link to="/incidents">Go Back</Link><br/>
        <Card>
          <CardBody>
            <CardTitle>Incident Details of ID - {info.id}</CardTitle>
            <CardSubtitle>{info.title}</CardSubtitle>
          </CardBody>
          <CardBody>
            <CardText>{info.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default IncidentDetails;
