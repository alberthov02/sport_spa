import React from 'react';
import './Jog.scss';
import {ReactComponent as RunningIcon} from "../../images/runningIcon.svg";


const Jog = ({ distance, time, date }) => {
  const getSpped = (distance, time) => {
    const speed = distance / time * 60;
    if (speed % 100 !== 0 || speed % 10 !== 0 || speed % 1000 !== 0) {
      return speed.toFixed(4);
    }
    return speed;
  }
  return (
    <div className="Jog">
      <RunningIcon />
      <div className="Jog-info">
        <p>{date}</p>
        <p className="Jog-info_textBold">Speed <span>{getSpped(distance, time)}</span></p>
        <p className="Jog-info_textBold">Distance <span>{distance} km</span></p>
        <p className="Jog-info_textBold">Time <span>{time} min</span></p>
      </div>
    </div>
  )
};

export default Jog;