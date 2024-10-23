import React, { useState } from "react";

const TableRowItem = ({ index, contact, onDelete }) => {
  return (
    <tr valign="middle">
      <th scope="row">{index}</th>
      <td>{contact.fullName}</td>
      <td>{contact.phoneNum}</td>
      <td>{contact.note}</td>
      <td>
        <a
          className="icon-link icon-link-hover"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onDelete();
          }}
        >
          <i
            className="bi bi-trash "
            style={{ fontSize: "1.5rem", color: "red" }}
          ></i>
        </a>
      </td>
    </tr>
  );
};

export default TableRowItem;
