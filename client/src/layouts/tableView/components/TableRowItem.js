import React, { useState } from "react";
import ConfirmDeleteModal from "../../modalWindows/ConfirmDeleteModal";

const TableRowItem = (props) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleDelete = () => {
    props.removeContact(props.contact.id);
    setModalOpen(false);
  };

  return (
    <>
      <tr valign="middle">
        <th scope="row">{props.index}</th>
        <td>{props.contact.fullName}</td>
        <td>{props.contact.phoneNum}</td>
        <td>{props.contact.note}</td>
        {/* <td onClick={() => props.removeContact(props.contact.id)}> */}
        <td>
          <a
            className="icon-link icon-link-hover"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setModalOpen(true);
            }}
          >
            <i
              className="bi bi-trash "
              style={{ fontSize: "1.5rem", color: "red" }}
            ></i>
          </a>
        </td>
      </tr>
      <ConfirmDeleteModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={handleDelete}
      />
    </>
  );
};

export default TableRowItem;
