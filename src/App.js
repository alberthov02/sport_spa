import React, {useState, useEffect} from 'react';
import { Route, Switch } from "react-router-dom"
import './App.css';
import './fonts.css';
import Info from './pages/Info/Info';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import { request } from './utils/request';

function App() {
  const [isAuthorized, setIsAuthorized] = useState(true);
  const [jogs, setJogs] = useState([]);
  useEffect(() => {
    const getUserData = () => {
      request('https://jogtracker.herokuapp.com/api/v1/data/sync')
      .then(jogs => {
        setJogs(jogs);
      })
    }
    getUserData();
  }, []);
  return (
    <div className="App">
      <Navbar isAuthorized={isAuthorized} />
      <Switch>
        <Route path="/" exact>
          <Home isAuthorized={isAuthorized} jogs={jogs}/>
        </Route>
        <Route path="/info" exact>
          <Info />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
