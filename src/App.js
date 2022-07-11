import './App.css';
import Register from './Register';
import { Routes, Route, Navigate,useNavigate } from 'react-router-dom';
import Setpsw from './Setpsw';
import PasswordSet from './PasswordSet';
import Dashboard from './Dashboard';
import LoginComponent from './LoginComponent';
import Home from './Home';
function App() {
  
  return (
    <div className="App">
    
      <Routes>
      <Route exact path='*' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/setpsw' element={<Setpsw/>}/>
        <Route path='/passwordSet' element={<PasswordSet/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/loginComponent' element={<LoginComponent/>}/>
        {/* <Route path="*">
          <Redirect to="/" />
        </Route> */}
      </Routes>       
    </div>
  );
}

export default App;
