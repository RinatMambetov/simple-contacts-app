import React from "react";

const TableRowItem = ({ index, contact, onDelete }) => {
  return (
    <tr valign="middle">
      <th scope="row">{index}</th>
      <td>{contact.fullName}</td>
      <td>{contact.phoneNum}</td>
      <td>{contact.note}</td>
      <td>
        <button
          className="btn btn-link"
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
        </button>
      </td>
    </tr>
  );
};

export default TableRowItem;
