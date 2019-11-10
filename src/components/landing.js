import React, { Component } from "react";
import IncidentsTable from "./tableComponents/table";
import { getData } from "./../Services/incidentService";
import PaginationComp from "./Pagination";
import _ from "lodash";
import { paginate } from "./paginateData";
import { Button, Alert } from "reactstrap";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../actions/incidentActions";
import { SpinnerComponent } from "./UIComponent/SpinnerComponent";
import DeleteModalComponent from "./UIComponent/DeleteModalComponent";
import AddModalComponent from "./UIComponent/AddModalComponent";
import { IS_SAVED, INCIDENT_SAVED, INCIDENT_EDITED } from "../types/types";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      title: "",
      currentPage: 1,
      pageSize: 10,
      sortColumn: { columnName: "id", order: "asc" },
      columns: [],
      showAddModal: false,
      toDeleteId: 0,
      showMessage: false,
      showMessageColor: "",
      showMessageText: ""
    };
  }

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleDeleteModalClose = id => {
    if (id === 0) {
      this.props.actions.deleteIncident(id, true);
    } else {
      this.props.actions.deleteIncident(id, false);
      this.setState({
        showMessage: true,
        showMessageColor: "danger",
        showMessageText: `Incident ID# ${id} has been deleted successfully.`
      });
      setTimeout(() => this.setState({ showMessage: false }), 2000);
    }
  };

  handleAddModalClose = (confirm, action) => {
    if (action === INCIDENT_SAVED) {
      this.setState({ showAddModal: false });
    }
    if (confirm === IS_SAVED) {
      if (action === INCIDENT_SAVED) {
        this.setState({
          currentPage: 1
        });
      }
      this.setState({
        showMessage: true,
        showMessageColor: "success",
        showMessageText:
          action === INCIDENT_SAVED
            ? "Incident has been successfully added."
            : "Incident has been successfully edited."
      });
    }
    setTimeout(() => this.setState({ showMessage: false }), 2000);
  };

  getPagedData = data => {
    const { pageSize, currentPage, sortColumn } = this.state;
    const sorted = _.orderBy(data, [sortColumn.columnName], [sortColumn.order]);
    const paginateData = paginate(sorted, currentPage, pageSize);
    return { totalCount: data.length, data: paginateData };
  };

  async componentDidMount() {
    const headerArr = [];
    let respData = null;
    if (
      sessionStorage.getItem("apiIncidentData") === "" ||
      sessionStorage.getItem("apiIncidentData") === null
    ) {
      respData = await getData();
    } else {
      respData = JSON.parse(sessionStorage.getItem("apiIncidentData"));
    }
    await this.props.actions.loadData(respData);

    //get all column header values
    for (let key in this.props.incidentState.data[0]) {
      headerArr.push(key);
    }
    //filter the columns header
    this.setState({
      columns: headerArr.slice(0, 3)
    });
  }

  componentWillUnmount() {
    sessionStorage.setItem(
      "apiIncidentData",
      JSON.stringify(this.props.incidentState.data)
    );
  }
  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  showAddModal = () => {
    this.setState({ showAddModal: true });
  };

  render() {
    const { pageSize, currentPage, sortColumn, columns } = this.state;
    if (
      this.getPagedData(this.props.incidentState.data).totalCount === 0 ||
      typeof this.getPagedData(this.props.incidentState.data).totalCount ===
        "undefined"
    ) {
      return (
        <SpinnerComponent
          message="Please wait your data is being loaded"
          color="primary"
        />
      );
    } else {
      const data = this.getPagedData(this.props.incidentState.data).data;
      const count = this.getPagedData(data).totalCount;
      const totalCount = this.props.incidentState.data.length;

      return (
        data && (
          <div className="table-info">
            {this.state.showMessage && (
              <Alert color={this.state.showMessageColor} fade={true}>
                {this.state.showMessageText}
              </Alert>
            )}
            <div className="incident-button">
              <Button color="primary" onClick={this.showAddModal}>
                Add Incident
              </Button>{" "}
            </div>
            <h4>
              Showing {count} of {totalCount} incidents in the database.
            </h4>

            <IncidentsTable
              columns={columns}
              sortColumn={sortColumn}
              onSort={this.handleSort}
              data={data}
              count={count}
            />
            <PaginationComp
              itemsCount={totalCount}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />
            <DeleteModalComponent
              open={this.props.incidentState.toDelete}
              message={"Do you want to delete this incident ??"}
              onClose={confirm => this.handleDeleteModalClose(confirm)}
              deleteId={this.props.incidentState.deleteId}
            />
            <AddModalComponent
              open={this.state.showAddModal}
              onSave={action =>
                this.handleAddModalClose(action, INCIDENT_SAVED)
              }
            />
            <AddModalComponent
              open={this.props.incidentState.toEdit}
              onSave={action =>
                this.handleAddModalClose(action, INCIDENT_EDITED)
              }
              incident={this.props.incidentState.incidentToEdit}
            />
          </div>
        )
      );
    }
  }
}

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
)(Landing);
