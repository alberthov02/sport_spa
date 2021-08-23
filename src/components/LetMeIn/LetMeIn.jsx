import React from 'react';
import {ReactComponent as BearFace} from "./images/bear-face.svg";


const LetMeIn = () => {
  return (
    <div className="first-block">
      <div className="main-block">
        <BearFace className="bear-face"/>
        <button>Let me In</button>
      </div>
    </div>
  )
};

export default LetMeIn;
