import React from "react";
import { Link } from "react-router-dom";

const TableRow = (row) => (
  <tr key={row.id}>
    <td>
      <Link to={{ pathname: `/incidents/${row.id}`, state: { rowData: row } }}>
        {row.id}
      </Link>
    </td>
    <td>{row.title}</td>
    <td>{row.description}</td>
    <td>
      <Link onClick={() => row.actions.deleteIncident(row.id)}>Edit </Link> 
      <Link onClick={() => row.actions.editIncident(row.id)}>Delete</Link> 
      </td>
    
  </tr>
);

export default TableRow;
