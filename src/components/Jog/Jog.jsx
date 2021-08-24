import React from 'react';
import './Jog.scss';
import {ReactComponent as RunningIcon} from "../../images/runningIcon.svg";

const Jog = ({ distance, time, date }) => {
  const getSpped = (distance, time) => {
    let speed = distance * 60 / time;
    speed = speed.toString().slice(0,8);
    return speed;
  }
  const getDate = (date) => {
    const currentSeconds = new Date().getTime();
    const jogDate = new Date(currentSeconds + date);
    let formatedDate = new Date(jogDate).toISOString().slice(0,10);
    formatedDate = formatedDate.split('-').join('.')
    return formatedDate;
  }
  return (
    <div className="Jog">
      <RunningIcon />
      <div className="Jog-info">
        <p>{getDate(date)}</p>
        <p className="Jog-info_textBold">Speed <span>{getSpped(distance, time)}</span></p>
        <p className="Jog-info_textBold">Distance <span>{distance} km</span></p>
        <p className="Jog-info_textBold">Time <span>{time} min</span></p>
      </div>
    </div>
  )
};

export default Jog;