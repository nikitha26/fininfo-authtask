import './App.css';
import Register from './Register';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Setpsw from './Setpsw';
import PasswordSet from './PasswordSet';
import Dashboard from './Dashboard';
import LoginComponent from './LoginComponent';
import Home from './Home';
function App() {
  
  return (
    <div className="App">
    
      <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/setpsw' element={<Setpsw/>}/>
        <Route path='/passwordSet' element={<PasswordSet/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/loginComponent' element={<LoginComponent/>}/>
      </Routes>       
    </div>
  );
}

export default App;
