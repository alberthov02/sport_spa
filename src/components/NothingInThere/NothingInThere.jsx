import React from 'react';
import './NothingInThere.scss';
import {ReactComponent as SadIcon} from '../../images/sadIcon.svg';

const NothingInThere = ({ setModalShow }) => {
  return (
    <div className="NothingInThere">
      <div>
        <SadIcon />
        <p className="NothingInThere-text">Nothing is there</p>
      </div>
      <button onClick={setModalShow} className="NothingInThere-button">
        Create your jog first
      </button>
    </div>
  )
}

export default NothingInThere;