import React from "react";
import TableRowItem from "./components/TableRowItem";

const TableView = (props) => {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">FullName</th>
          <th scope="col">PhoneNum</th>
          <th scope="col">Note</th>
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
