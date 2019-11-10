import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

const TableRow = row => (
  <tr key={row.id}>
    <td>
      <Link
        to={{
          pathname: `/incidents/${row.id}`,
          state: {
            rowData: {
              title: row.title,
              description: row.description,
              id: row.id
            }
          }
        }}
      >
        {row.id}
      </Link>
    </td>
    <td>{row.title}</td>
    <td>{row.description}</td>
    <td>
      <FontAwesomeIcon
        color="grey"
        onClick={() =>
          row.actions.editClicked({
            title: row.title,
            description: row.description,
            id: row.id
          })
        }
        style={{ cursor: "pointer" }}
        size="1x"
        icon={faPen}
      />

      <FontAwesomeIcon
        size="1x"
        icon={faTrash}
        color="red"
        onClick={() => row.actions.deleteClicked(row.id)}
        style={{ cursor: "pointer" }}
      />
    </td>
  </tr>
);

export default TableRow;
