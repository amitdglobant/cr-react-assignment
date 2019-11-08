import React from "react";

class TableHead extends React.Component {
  renderSortIcon = column => {
    const { sortColumn } = this.props;

    if (column !== sortColumn.path) return null;
    if (sortColumn.order === "asc") return <i className="fa fa-sort-asc" />;
    return <i className="fa fa-sort-desc" />;
  };
  raiseSort = columnName => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === columnName)
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    else {
      sortColumn.path = columnName;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };
  render() {
    return (
      <tr>
        {this.props.columns.map(column => (
          <th
            className="clickable"
            key={column}
            onClick={() => this.raiseSort(column)}
          >
            {column.toUpperCase()} {this.renderSortIcon(column)}
          </th>
        ))}
      </tr>
    );
  }
}
export default TableHead;
