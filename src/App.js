import './App.css';
import './fonts.css';
import Navbar from './components/navbar/navbar';
import NothingInThere from './components/NothingInThere/NothingInThere';
import Info from './pages/Info/Info';
import AddJogeModal from './components/AddJogeModal/AddJogeModal';
import Jog from './components/Jog/Jog';

function App() {
  return (
    <div className="App">
      <Navbar />
      <NothingInThere />
      <Info />
      <AddJogeModal />

      <Jog distance='15 km' time='60 min' speed={15} date='20.12.2017' />
      <Jog distance='15 km' time='60 min' speed={15} date='20.12.2017' />
      <Jog distance='15 km' time='60 min' speed={15} date='20.12.2017' />
      <Jog distance='15 km' time='60 min' speed={15} date='20.12.2017' />
      <Jog distance='15 km' time='60 min' speed={15} date='20.12.2017' />
    </div>
  );
}

export default App;
