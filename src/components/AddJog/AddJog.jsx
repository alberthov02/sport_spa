import React from 'react';
import './AddJog.scss';
import {ReactComponent as AddIcon} from "../../images/add.svg";

const AddJog = ({ setModalShow, modalShow }) => {
  return (
    <button className="AddJog">
      <AddIcon onClick={() => setModalShow(!modalShow)} />
    </button>
  )
};

export default AddJog;