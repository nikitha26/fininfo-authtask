import React, {useState} from 'react'
import api from './api/axios';
import {useNavigate} from 'react-router-dom'
const config = {
  headers : {
    'Content-Type': 'application/json',
     'x-csrf-token': 'cnJmQDIwMjI=',
   }
};

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
    var self = this;
    await api
      .post("/api/user/auth", userData,config)
      .then((response) => {
        self.setRes({events: response.data})
        // setSuccessMsg(true);
        //navigate("/dashboard", {state:res})
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log("server responded");
         
        } else if (error.request) {
          console.log("network error");
        } else {
          console.log(error);
        }
        
      });
      console.log(res)

  };
  
  return (
    <div>LoginComponent
      <form onSubmit={handleSubmit}>
            <label htmlFor="username">
              Email:
            </label>
            <input
              type="email"
              name="email"
              autoComplete="off"
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
            />
            <button
            type="submit"
            >
             LogIn
            </button>
        </form> 

    </div>
  )
}

export default LoginComponent