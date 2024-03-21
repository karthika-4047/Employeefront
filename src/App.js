
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Empform from './components/Empform';
import Navbar from './components/Navbar';
import EmpDash from './components/EmpDash';


function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/list' element={<EmpDash/>} />
        <Route path='/form' element={<Empform/>} />
      </Routes>
    
    </div>
  );
}

export default App;
