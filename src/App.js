
import './App.css';
import Menu from './component/Menu';
import Navbar from './component/navbar';
import { Route,Routes } from 'react-router-dom';
import Heroic from './component/heroic';
import Home from './component/Home';
import Componet1 from './context/Componet1';


function App() {
  return (
  <>
    <div className="Header" >
       <Navbar title= "LUFFY Donuts"/>
    </div>
    
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Menu" element={<Menu/>} />
    </Routes>
    <Componet1/>
 

  </>
  );
}

export default App;


