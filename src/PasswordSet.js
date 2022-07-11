import React,{useState} from 'react';
import {useNavigate, useLocation } from 'react-router-dom';
import api from './api/axios';
import Dashboard from './Dashboard';


const config = {
    headers : {
      'Content-Type': 'application/json',
       'x-csrf-token': `${process.env.REACT_APP_API_KEY}`,
     }
  };

function PasswordSet() {
    const location = useLocation();
    const navigate = useNavigate();
    const [passworddata, setPassworddata] = useState({
        email: location.state.email,
        otp:location.state.otp,
        password:""
    });
    const handleChange = (e) => {
        const value = e.target.value;
        setPassworddata({
          ...passworddata,
          [e.target.name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
          email: passworddata.email,
          otp:passworddata.otp,
          password:passworddata.password
        };

        api
      .post("/api/user/set-password", userData,config)
      .then((response) => {
        console.log(response);
        navigate("/logincomponent")
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
    }   

  return (
    <div>
        <h1>Set Your Password</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">
              Email:
            </label>
            <input
              type="email"
              name="email"
              autoComplete="off"
              value={location.state.email}
              required
              
            /> <br/><br/>
             <label htmlFor="username">
              Enter OTP:
            </label>
            <input
             type="text"
             name="otp"
             autoComplete="off"
             value={location.state.otp}
             required
            /><br/><br/>
            <label htmlFor="username">
              Set Password:
            </label>
            <input
             type="password"
             name="password"
             autoComplete="off"
             value={passworddata.password}
             onChange={handleChange}
             required
            /><br/><br/>
            <button
            type="submit"
            >
              Set Password
            </button>
        </form> 
    </div>
  )
}

export default PasswordSet