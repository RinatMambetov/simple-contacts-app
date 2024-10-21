import React from "react";

const FormNewItem = (props) => {
  return (
    <div>
      <form>
        <div>
          <label className="form-label">Full Name</label>
          <input className="form-control" type="text"></input>
        </div>
        <div className="mt-3">
          <label className="form-label">Phone Number</label>
          <input className="form-control" type="text"></input>
        </div>
        <div className="my-3">
          <label className="form-label">Note</label>
          <textarea className="form-control" rows="3"></textarea>
        </div>
        <div className="mt-3">
          <button className='btn btn-primary' onClick={props.appendContact}>Add contact</button>
        </div>
      </form>
    </div>
  )
}

export default FormNewItem;
