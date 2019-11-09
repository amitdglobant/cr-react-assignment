import React from "react";
import { Link } from "react-router-dom";

const TableRow = row => (
  <tr key={row.id}>
    <td>
      <Link to={{ pathname: `/incidents/${row.id}`, state: { rowData: {title: row.title, description: row.description, id:row.id} } }}>
        {row.id}
      </Link>
    </td>
    <td>{row.title}</td>
    <td>{row.description}</td>
    <td>
      <Link onClick={() => row.actions.editClicked({title: row.title, description: row.description, id:row.id})}>Edit </Link>
      <Link onClick={() => row.actions.deleteClicked(row.id)}>Delete</Link>
    </td>
  </tr>
);

export default TableRow;
