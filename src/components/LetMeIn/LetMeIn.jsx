import React from 'react';
import {ReactComponent as BearFace} from "../../images/bear-face.svg";
import { addToken } from '../../utils/localStorage';

const LetMeIn = ({ setIsAuthorized }) => {
  // const token = fetch('https://jogtracker.herokuapp.com/api/v1/auth/uuidLogin')
  const handleClick = () => {
    const options = {
      method: "POST",
      headers: new Headers({'content-type': 'application/json'}),
    };
    const body = {
      uuid: 'hello'
    }
    options.body = JSON.stringify(body);
    fetch('https://jogtracker.herokuapp.com/api/v1/auth/uuidLogin', options)
      .then(response => {
        return response.json();
      })
      .then(data => {
        return data.response.access_token;
      })
      .then((token) => {
        addToken(token);
        return;
      })
      .then(() => {
        setIsAuthorized(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  // useEffect(() => {
    
  // }, []);
  return (
    <div className="first-block">
      <div className="main-block">
        <BearFace className="bear-face"/>
        <button onClick={handleClick}>Let me In</button>
      </div>
    </div>
  )
};

export default LetMeIn;
