import React from "react";

const TableRowItem = (props) => {
  return (
    <tr>
      <th scope="row">{props.contact.num}</th>
      <td>{props.contact.fullName}</td>
      <td>{props.contact.phoneNum}</td>
      <td>{props.contact.note}</td>
    </tr>
  );
}

export default TableRowItem;
