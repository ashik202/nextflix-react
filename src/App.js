
import './App.css';
import { Action,original } from './urls';
import Navbar from './Components/Navebar/Navbar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';

function App() {
  return (
    <div className="body" >
      <Navbar/>
      <Banner/>
      <RowPost url={original} title='Netflix Orginals'/>
      <RowPost url={Action} title='Action' isSmall/>
      
      
    </div>
  );
}

export default App;
