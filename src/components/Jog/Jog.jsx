import React from 'react';
import './Jog.scss';
import {ReactComponent as RunningIcon} from "../../images/runningIcon.svg";


const Jog = ({ speed, distance, time, date }) => {
  return (
    <div className="Jog">
      <RunningIcon />
      <div className="Jog-info">
        <p>{date}</p>
        <p className="Jog-info_textBold">Speed <span>{speed}</span></p>
        <p className="Jog-info_textBold">Distance <span>{distance}</span></p>
        <p className="Jog-info_textBold">Time <span>{time}</span></p>
      </div>
    </div>
  )
};

export default Jog;