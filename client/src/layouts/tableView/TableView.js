import React from "react";
import TableRowItem from "./components/TableRowItem";

const max = 1000;
const min = -1000;

const getRandom = (max, min) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

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
            <TableRowItem contact={item} key={getRandom(max, min)} />
          ))
        }
      </tbody>
    </table>
  );
}

export default TableView;
