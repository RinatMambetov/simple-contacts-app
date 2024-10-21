import React from "react";
import TableRowItem from "./components/TableRowItem";

const TableView = (props) => {
  return (
    <table className='table table-hover'>
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Phone</th>
          <th scope="col">Note</th>
        </tr>
      </thead>
      <tbody>
        {
          props.contacts.map(item => (
            <TableRowItem contact={item} key={item.num} />
          ))
        }
      </tbody>
    </table>
  );
}

export default TableView;
