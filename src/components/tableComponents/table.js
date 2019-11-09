import React from "react";
import { Table } from "reactstrap";
import TableHead from "./tableHead";
import TableRow from "./tableBody";

export default class IncidentsTable extends React.Component {
  renderCellData() {
    return this.props.data.map(row => TableRow(row));
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
