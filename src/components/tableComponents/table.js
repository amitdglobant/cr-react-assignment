import React from "react";
import { Table } from "reactstrap";
import TableHead from "./tableHead";
import TableRow from "./tableBody";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../../actions/incidentActions";

class IncidentsTable extends React.Component {
  renderCellData() {
    return this.props.data.map((row,index) => {
      let propsObj = {...row, ...this.props};
      return <TableRow key={index} {...propsObj} />;
    });
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

  onDelete = id => {
    alert(id);
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
)(IncidentsTable);
