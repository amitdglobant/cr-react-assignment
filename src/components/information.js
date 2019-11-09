import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  CardImg
} from "reactstrap";
class IncidentDetails extends Component {
  render() {
    // const info = this.props.location.state.rowData;
    const info = {};
    return (
      <div className="table-info">
        <Card>
          <CardBody>
            <CardTitle>Incident Details of ID - {info.id}</CardTitle>
            <CardSubtitle>{info.title}</CardSubtitle>
          </CardBody>
          <CardBody>
            <CardImg alt={`${info.title} `} src={info.media.image_url_thumb} />
            <CardText>{info.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default IncidentDetails;
