import React, { useState } from 'react';
import { jogRequest, addJog } from '../../utils/request';
import './AddJogeModal.scss';

const AddJogeModal = ({ setModalShow, modalShow, jogs }) => {
  const [jogInfo, setJogInfo] = useState({
    distance: '',
    time: '',
    date: ''
  });
  const handleChange = (event) => {
    const { value, id: inputName } = event.target;
    setJogInfo({
        ...jogInfo,
        [inputName]: value,
    })
  }
  const getDate = (date) => {
    const currentSeconds = new Date().getTime();
    const jogDate = new Date(currentSeconds + date);
    let formatedDate = new Date(jogDate).toISOString().slice(0,10);
    return formatedDate;
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    let body = { ...jogInfo };
    if (!body.distance || !body.time || !body.date) {
      return;
    }
    let updatedJog = jogs.find(jog => {
      return getDate(jog.date) === jogInfo.date;
    });
    if (updatedJog) {
      body = {
        ...updatedJog,
        distance: jogInfo.distance,
        time: jogInfo.time,
        date: jogInfo.date,
        jog_id: updatedJog.id
      }
      jogRequest('https://jogtracker.herokuapp.com/api/v1/data/jog', 'PUT', body); // then update all jogs
    } else {
      jogRequest('https://jogtracker.herokuapp.com/api/v1/data/jog', 'POST', body); // then update all jogs
    }
    setModalShow(false);
  } 
  return (
    modalShow &&
      <div className="AddJogeModal-container">
        <div className="AddJogeModal">
          <form className="AddJogeModal-form" action="submit">
            <label className="AddJogeModal-form_label">
              Distance
              <input id="distance" onChange={handleChange} min="0" type="number" />
            </label>
            <label className="AddJogeModal-form_label">
              Time
              <input id="time" onChange={handleChange} type="number" min="0" />
            </label>
            <label className="AddJogeModal-form_label">
              Date
              <input id="date" onChange={handleChange} type="date" />
            </label>
            <button className="AddJogeModal-submitButton" onClick={handleSubmit} type="submit">Save</button>
          </form>
          <button className="AddJogeModal-closeButton" onClick={() => setModalShow(false)}>✕</button>
        </div>
      </div>
  )
};

export default AddJogeModal;