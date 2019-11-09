import React from "react";
import { Table } from "reactstrap";
import TableHead from "./tableHead";
import TableRow from "./tableBody";
import { showModal, setCurrentIncident } from "../../actions";
import {connect} from 'react-redux'
class IncidentsTable extends React.Component {
  renderCellData() {
    console.log('props',this.props.data)
    const data = [...this.props.data];
    return data.map(row => TableRow(row, this.props.showModal, this.props.setCurrentIncident));
  }

  raiseSort = columnName => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.columnName === columnName)
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    else {
      sortColumn.columnName = columnName;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };

  render() {
    return (
      <Table responsive>
        <thead>
          <TableHead
            columns={this.props.columns}
            sortColumn={this.props.sortColumn}
            onSort={this.props.onSort}
          />
        </thead>
        <tbody>{this.renderCellData()}</tbody>
      </Table>
    );
  }
}
const mapStateToProps = (state)=>{
      
  return {
    incidents:state.incidents
  }
}
export default connect(
  mapStateToProps,
  {
    setCurrentIncident,
    showModal
  }
)(IncidentsTable);
