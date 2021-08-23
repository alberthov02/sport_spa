import React from 'react';
import './AddJogeModal.scss';

const AddJogeModal = () => {
  return (
    <div className="AddJogeModal-container">
      <div className="AddJogeModal">
        <form className="AddJogeModal-form" action="submit">
          <label className="AddJogeModal-form_label">
            Distance
            <input type="text" />
          </label>
          <label className="AddJogeModal-form_label">
            Time
            <input type="text" />
          </label>
          <label className="AddJogeModal-form_label">
            Date
            <input type="date" />
          </label>
          <button className="AddJogeModal-submitButton" type="submit">Save</button>
        </form>
        <button className="AddJogeModal-closeButton">✕</button>
      </div>
    </div>
  )
};

export default AddJogeModal;