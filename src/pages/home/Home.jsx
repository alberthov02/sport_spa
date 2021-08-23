import React, { useState } from 'react';
import './Home.scss';
import {ReactComponent as BearFace} from "../../images/bear-face.svg";
import Jog from '../../components/Jog/Jog';
import AddJog from '../../components/AddJog/AddJog';
import AddJogeModal from '../../components/AddJogeModal/AddJogeModal';
import NothingInThere from '../../components/NothingInThere/NothingInThere';


const Home = ({ jogs, isAuthorized }) => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      {
        !isAuthorized &&  
        <div className="first-block">
          <div className="main-block">
            <BearFace className="bear-face"/>
            <button>Let me In</button>
          </div>
        </div> 
      }
      {
        <AddJogeModal modalShow={modalShow} setModalShow={setModalShow} />
      }
      {
        jogs && jogs.map((jog, jogIndex) => {
          return (
            <Jog key={jog.id} date={jog.date} distance={jog.distance} time={jog.time} speed={45444} />
          )
        })
      }
      <AddJog modalShow={modalShow} setModalShow={setModalShow}/>
    </>
  )
};

export default Home;