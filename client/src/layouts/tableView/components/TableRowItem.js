import React from "react";

const TableRowItem = (props) => {
  return (
    <tr valign="middle">
      <th scope="row">{props.index}</th>
      <td>{props.contact.fullName}</td>
      <td>{props.contact.phoneNum}</td>
      <td>{props.contact.note}</td>
      <td onClick={() => props.removeContact(props.contact.id)}>
        <a className="icon-link icon-link-hover" href="#">
          <i
            class="bi bi-trash"
            style={{ fontSize: "1.5rem", color: "red" }}
          ></i>
        </a>
      </td>
    </tr>
  );
};

export default TableRowItem;
