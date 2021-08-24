import React, {useState, useEffect} from 'react';
import { Route, Switch } from "react-router-dom"
import './fonts.css';
import './App.css';
import Info from './pages/Info/Info';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import { request } from './utils/request';
import { getToken } from './utils/localStorage';

function App() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [jogs, setJogs] = useState(null);
  const [filtredJogs, setFilteredJogs] = useState([]);
  
  const getUserData = () => {
    request('https://jogtracker.herokuapp.com/api/v1/data/sync')
    .then(jogs => {
      setJogs(jogs);
    })
  }

  useEffect(() => {
    if (getToken() && !jogs) {
      setIsAuthorized(true);
      getUserData();
    }
  }, [isAuthorized, jogs]);

  return (
    <div className="App">
      <Navbar setFilteredJogs={setFilteredJogs} jogs={jogs} isAuthorized={isAuthorized} />
      <Switch>
        <Route path="/" exact>
          <Home isAuthorized={isAuthorized} jogs={filtredJogs} setIsAuthorized={setIsAuthorized}/>
        </Route>
        <Route path="/info" exact>
          <Info />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
