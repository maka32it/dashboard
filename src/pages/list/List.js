import React from "react";
import "./List.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DataTable from "../../components/datatable/DataTable";
import Table from "../../components/table/Table";

export default function List({ title, type }) {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        {type === "users" ? (
          <DataTable title={title} type={type} />
        ) : (
          <Table type={type} title={title} nav={"list"} />
        )}
      </div>
    </div>
  );
}
