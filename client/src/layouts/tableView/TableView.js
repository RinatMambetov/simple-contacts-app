import React from "react";
import TableRowItem from "./components/TableRowItem";

const TableView = (props) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Full Name</th>
          <th scope="col">Phone Number</th>
          <th scope="col">Note</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {props.contacts.map((item, index) => (
          <TableRowItem
            contact={item}
            removeContact={props.removeContact}
            key={item.id}
            index={index + 1}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TableView;
