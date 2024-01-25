import './App.scss';
import newYear from './assets/newyear.jpg';


import { Outlet } from 'react-router-dom';

function App() {
  
  return (
    <div className="App" style={{ backgroundImage: `url(${newYear})`}}>
      <div className="container">
   
        <Outlet />
      </div>
    </div>
  )
}

export default App
