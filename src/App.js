import './App.css';
import Navbar from './components/Navbar/Navbar';
import './fonts.css';
import {ReactComponent as BearFace} from "./images/bear-face.svg"
import { Route, Switch } from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact />
        <Route path="/info" exact />
        <Route path="/contact" exact />
      </Switch>
      <div className="first-block">
      <div className="main-block">
        <BearFace className="bear-face"/>
        <button>Let me In</button>
      </div>
      </div>
      
    </div>
  );
}

export default App;
