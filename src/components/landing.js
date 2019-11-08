import React, { Component } from "react";
import IncidentsTable from "./tableComponents/table";
import { getData } from "./../Services/incidentService";
import PaginationComp from "./Pagination";
import _ from "lodash";
import { paginate } from "./paginateData";
import { Spinner, Button } from "reactstrap";
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
      columns: []
    };
  }
  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  getPagedData = () => {
    const { pageSize, currentPage, sortColumn, data } = this.state;
    const sorted = _.orderBy(data, [sortColumn.columnName], [sortColumn.order]);
    const paginateData = paginate(sorted, currentPage, pageSize);
    return { totalCount: this.state.data.length, data: paginateData };
  };

  async componentDidMount() {
    let data = null;
    const headerArr = [];

    if (!sessionStorage.getItem("apiIncidentData")) {
      data = (await getData()).incidents;
    } else {
      data = JSON.parse(sessionStorage.getItem("apiIncidentData"));
    }
    //get all column header values
    for (let key in data[0]) {
      headerArr.push(key);
    }
    //filter the columns header
    this.setState({
      data,
      count: data.length,
      columns: headerArr.slice(0, 3)
    });
  }

  componentWillUnmount() {
    sessionStorage.setItem("apiIncidentData", JSON.stringify(this.state.data));
  }
  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  render() {
    const { pageSize, currentPage, sortColumn, count, columns } = this.state;

    if (count === 0)
      return (
        <div className="table-info">
          <h4>Data is Loading</h4>
          <Spinner color="primary" />
        </div>
      );
    const { data } = this.getPagedData();
    return (
      data && (
        <div className="table-info">
          <div className="incident-button">
            <Button color="primary">Add Incident</Button>{' '}
          </div>
          <h4>Showing {count} incidents in the database.</h4>
          <IncidentsTable
            columns={columns}
            sortColumn={sortColumn}
            onSort={this.handleSort}
            data={data}
            count={count}
          />
          <PaginationComp
            itemsCount={count}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      )
    );
  }
}
export default Landing;
