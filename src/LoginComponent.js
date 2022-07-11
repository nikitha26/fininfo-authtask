import React, {useState} from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

function LoginComponent() {
  const navigate = useNavigate();
  const [logindata, setlogindata] = useState({
    email: "",
    password:""
  });
  const [res,setRes] = useState();
  const handleChange = (e) => {
    const value = e.target.value;
    setlogindata({
      ...logindata,
      [e.target.name]: value
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();
    const userData = {
      email: logindata.email,
      password:logindata.password
    };
    try
    {
      var response = await axios(
        {
            method: 'post',
            url: 'https://ring-ring-food.herokuapp.com/api/user/auth',
            data: userData,
            headers : {
              'Content-Type': 'application/json',
               'x-csrf-token': `${process.env.REACT_APP_API_KEY}`,
             }
        }
      );
        //console.log(response.data)
        navigate("/dashboard",{state:response.data,logindata:logindata})
    }
    catch (err) 
    {
      alert(err.response.data.message);
    }
    
  };
  const registerBtn = () => {
    navigate("/register")
  }
  
  return (
    <div>
      <h2>Login With Your Register Email Id and Password</h2>
      <form onSubmit={handleSubmit}>
            <label htmlFor="username">
              Email:
            </label>
            <input
              type="email"
              name="email"
             
              value={logindata.email}
              onChange={handleChange}
              required
            /> <br/><br/>
            <label htmlFor="username">
              Enter Password:
            </label>
            <input
             type="password"
             name="password"
             autoComplete="off"
             value={logindata.password}
             onChange={handleChange}
             required
            /><br/><br/>
            <button
            type="submit"
            >
             LogIn
            </button><br/><br/>
            <button
             type="button"
             onClick={registerBtn}
            >
             Register
            </button>
        </form> 

    </div>
  )
}

export default LoginComponent