import React from "react";

const TableRowItem = (props) => {
  return (
    <tr onClick={() => props.removeContact(props.contact.id)}>
      <th scope="row">{props.contact.id}</th>
      <td>{props.contact.fullName}</td>
      <td>{props.contact.phoneNum}</td>
      <td>{props.contact.note}</td>
    </tr>
  );
};

export default TableRowItem;
