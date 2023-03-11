import React, { useState } from "react";
import "./DataTable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../dbsource";
import { Link } from "react-router-dom";
export default function DataTable({ title, type }) {
  const [data, setData] = useState(userRows);
  function handleDelete(id) {
    setData(data.filter((item) => item.id !== id));
  }
  const actions = [
    {
      fiels: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => (
        <div className="cellAction">
          <Link to={"/users/test"}>
            <div className="viewButton">View</div>
          </Link>
          <div
            className="deleteButton"
            onClick={() => handleDelete(params.row.id)}
          >
            Delete
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="dataTable">
      <div className="datatableTitle">
        {title}
        <Link to={`/${type}/new`} className="link">
          Add new
        </Link>
      </div>
      <DataGrid
        className="dataGrid"
        rows={data}
        columns={userColumns.concat(actions)}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
