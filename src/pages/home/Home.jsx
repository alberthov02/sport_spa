import React, { useState } from 'react';
import './Home.scss';
import Jog from '../../components/Jog/Jog';
import AddJog from '../../components/AddJog/AddJog';
import AddJogeModal from '../../components/AddJogeModal/AddJogeModal';
import NothingInThere from '../../components/NothingInThere/NothingInThere';
import LetMeIn from '../../components/LetMeIn/LetMeIn';

const Home = ({ jogs, isAuthorized, setIsAuthorized }) => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      {
        isAuthorized
          ? (
            <>
              {jogs && jogs.length
                  ? jogs.map((jog) => (
                    <React.Fragment key={`${jog.date}+${jog.id}`}>
                      <Jog
                        date={jog.date}
                        distance={jog.distance}
                        time={jog.time}
                      />
                      <AddJog modalShow={modalShow} setModalShow={setModalShow}/>
                    </React.Fragment>
                  )) : <NothingInThere setModalShow={setModalShow} />
              }
              <AddJogeModal jogs={jogs} modalShow={modalShow} setModalShow={setModalShow} />
            </>
          ) : <LetMeIn setIsAuthorized={setIsAuthorized} />
      }
    </>
  )
};

export default Home;