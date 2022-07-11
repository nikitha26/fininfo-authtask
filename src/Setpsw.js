import React,{useState, useEffect,useRef} from 'react'
import api from './api/axios';
import {useNavigate, useLocation } from 'react-router-dom';
import PasswordSet from './PasswordSet';


const config = {
    headers : {
      'Content-Type': 'application/json',
       'x-csrf-token': `${process.env.REACT_APP_API_KEY}`,
     }
  };
   
function Setpsw() {
    const location = useLocation();
    const navigate = useNavigate();
    const [pswData, setPswData] = useState({
        email: location.state.email,
        otp:""
    });

      const handleChange = (e) => {
        const value = e.target.value;
        setPswData({
          ...pswData,
          [e.target.name]: value
        });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
          email: pswData.email,
          otp:pswData.otp,
        };

        api
      .post("/api/user/verify-otp", userData,config)
      .then((response) => {
        console.log(response);
        navigate("/passwordSet",{state:pswData})
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
    }    
  
  return (
    <div>
        <h1>Verify Email</h1>
        <p>(Otp sent to your email id)</p>
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
             value={pswData.otp}
             onChange={handleChange}
             required
            />
            {/* <label htmlFor="username">
              Enter Password:
            </label>
            <input
             type="password"
             name="password"
             autoComplete="off"
             value={pswData.password}
             onChange={handleChange}
             required
            /> */}
            <button
            type="submit"
            >
              Verify Email
            </button>
        </form>    
    </div>
  )
}

export default Setpsw