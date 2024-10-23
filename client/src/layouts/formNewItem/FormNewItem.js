import React, { useState } from "react";

const FormNewItem = ({ appendContact }) => {
  const [fullName, setFullName] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [note, setNote] = useState("");

  const submit = () => {
    if (fullName.trim() === "" || phoneNum.trim() === "") return;
    appendContact(fullName, phoneNum, note);
    setFullName("");
    setPhoneNum("");
    setNote("");
  };

  return (
    <div>
      <form>
        <div>
          <label className="form-label">Full Name</label>
          <input
            className="form-control"
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="mt-3">
          <label className="form-label">Phone Number</label>
          <input
            className="form-control"
            type="text"
            value={phoneNum}
            onChange={(e) => setPhoneNum(e.target.value)}
          />
        </div>
        <div className="mt-3">
          <label className="form-label">Note</label>
          <textarea
            className="form-control"
            rows="3"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </div>
        <div className="mt-3">
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => {
              submit();
            }}
          >
            Add contact
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormNewItem;
