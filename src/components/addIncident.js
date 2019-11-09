import React, { Component } from "react";
import { connect } from 'react-redux';
import { Incidents, addIncident, ADD_INCIDENT } from './../store/actions/Incidents';

import {
    Card,
    CardBody,
    CardSubtitle,
    CardText,
    CardTitle
  } from "reactstrap";
class AddIncident extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ticketId: this.generateNewTicketNumber(),
            title: '', 
            description: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);
        this.props.addIncident(this.state);
    }

    generateNewTicketNumber() {
        return Math.floor(1000 + Math.random() * 9000);
    }

    render() {
        return (
            <div className="table-info">
                <form onSubmit={this.handleSubmit} >
                    <Card>
                        <CardBody>
                            <CardTitle>Add Incident </CardTitle>
                            <CardSubtitle></CardSubtitle>
                        </CardBody>
                        <CardBody>
                            <CardText>
                                <span>Title: </span>
                                <input value={this.state.title} type="text" name="title" onChange={(event) => this.setState({title: event.target.value})} />
                            </CardText>
                        </CardBody> 
                        <CardBody>
                            <CardText>
                                <span>Description: </span>
                                <textarea value={this.state.description} name="description" onChange={(event) => this.setState({description: event.target.value})} ></textarea>
                            </CardText>
                        </CardBody>
                        <CardBody>
                            <CardTitle>
                                <input type="submit" value="Submit"/>
                            </CardTitle>
                        </CardBody>    
                    </Card>
                </form>    
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    addIncident: (data) => {
        dispatch(addIncident( ADD_INCIDENT, data));
    }
});

export default connect(null, mapDispatchToProps)(AddIncident);