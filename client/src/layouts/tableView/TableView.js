import React, { useState } from "react";
import TableRowItem from "./components/TableRowItem";
import ConfirmDeleteModal from "../../layouts/modalWindows/ConfirmDeleteModal";

const TableView = ({ contacts, removeContact }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [contactToDelete, setContactToDelete] = useState(null);

  const handleDelete = () => {
    if (contactToDelete) {
      removeContact(contactToDelete.id);
      setContactToDelete(null);
    }
    setModalOpen(false);
  };

  return (
    <>
      <table className="table table-sm">
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
          {contacts.map((item, index) => (
            <TableRowItem
              key={item.id}
              index={index + 1}
              contact={item}
              onDelete={() => {
                setContactToDelete(item);
                setModalOpen(true);
              }}
            />
          ))}
        </tbody>
      </table>
      <ConfirmDeleteModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={handleDelete}
        contact={contactToDelete}
      />
    </>
  );
};

export default TableView;
