import React from "react";
import { Link } from "react-router-dom";

const TableRow = (row, showModal, setCurrentIncident) => (
  <tr key={row.id}>
    <td>
      <Link to={{ pathname: `/incidents/${row.id}`, state: { rowData: row } }}>
        {row.id}
      </Link>
    </td>
    <td>{row.title}</td>
    <td>{row.description}</td>
    <td>
      <button onClick={e =>{ setCurrentIncident(row);
                             showModal()}}>Edit</button>
    </td>
  </tr>
);

export default TableRow;
