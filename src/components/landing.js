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
import { IS_SAVED } from "../types/types";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      id: 0,
      title: "",
      currentPage: 1,
      pageSize: 7,
      count: 0,
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

  handleAddModalClose = confirm => {
    this.setState({ showAddModal: false });
    console.log(confirm);
    if (confirm === IS_SAVED) {
      this.setState({
        showMessage: true,
        showMessageColor: "success",
        showMessageText: "Incident has been successfully added."
      });
    }
    setTimeout(() => this.setState({ showMessage: false }), 2000);
  };

  getPagedData = () => {
    const { pageSize, currentPage, sortColumn, data } = this.state;
    const sorted = _.orderBy(data, [sortColumn.columnName], [sortColumn.order]);
    const paginateData = paginate(sorted, currentPage, pageSize);
    return { totalCount: this.state.data.length, data: paginateData };
  };

  async componentDidMount() {
    const headerArr = [];
    let respData = null;
    if (sessionStorage.getItem("apiIncidentData") === "") {
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
      data: this.props.incidentState,
      count: this.props.incidentState.length,
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
    const { pageSize, currentPage, sortColumn, count, columns } = this.state;
    if (count === 0) {
      return (
        <SpinnerComponent
          message="Please wait your data is being loaded"
          color="primary"
        />
      );
    } else {
      return (
        this.props.incidentState.data && (
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
              Showing {this.props.incidentState.data.length} incidents in the
              database.
            </h4>

            <IncidentsTable
              columns={columns}
              sortColumn={sortColumn}
              onSort={this.handleSort}
              data={this.props.incidentState.data}
              count={this.props.incidentState.data.length}
            />
            <PaginationComp
              itemsCount={this.props.incidentState.data}
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
              onSave={action => this.handleAddModalClose(action)}
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
