import React,{useState, useEffect,useRef} from 'react'
import api from './api/axios';
import { useNavigate,useLocation } from "react-router-dom";
import setpsw from './Setpsw';

const config = {
  headers : {
    'Content-Type': 'application/json',
     'x-csrf-token': 'cnJmQDIwMjI=',
   }
};
 

function Register() {
  const userRef = useRef();
  const errRef = useRef();
  const [successMsg, setSuccessMsg] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();
 
  const [data, setData] = useState({
    email: "",
    fullName:"",
    mobile: ""
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value
    });
  };
  // console.log('$$$')
  // console.log(data);
  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: data.email,
      fullName:data.fullName,
      mobile: data.mobile,
      image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAYAAAA8AXHiAAABDElEQVR42u3SMQEAAAgDoJnc6FrA0xMyUJl04FmJhViIhVhiIRZiIRaIhViIBWIhFmKBWIiFWCAWYiEWiIVYiAViIRZigViIhVggFmIhFoiFWIgFYiEWYoFYiIVYIBZiIRaIhViIBWIhFmKBWIiFWCAWYiEWiIVYiAViIRZigViIhVggFmIhFoiFWIgFYiEWYoFYiIVYIBZiIRaIhViIBWIhFmKBWIiFWIglFmIhFmKBWIiFWCAWYiEWiIVYiAViIRZigViIhVggFmIhFoiFWIgFYiEWYoFYiIVYIBZiIRaIhViIBWIhFmKBWIiFWCAWYiEWiIVYiAViIRZigViIhVggFmIhFoiFWIgFtwUbHOBr8Qik0gAAAABJRU5ErkJggg==",
      "tandcAccepted": true,
      tandcAccepted: true,
    };
    
    api
      .post("/api/user", userData,config)
      .then((response) => {
        console.log(response);
        setSuccessMsg(true);
        navigate("/setpsw",{state:data})
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
      
  };
  


  return (
    <>
     
        <section>
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1>Register</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">
              Email:
            </label>
            <input
              type="email"
              name="email"
            
              autoComplete="off"
              value={data.email}
              onChange={handleChange}
            
              required
              
            /> <br/><br/>
            <label htmlFor="username">
              Full Name:
            </label>
            <input
              type="text"
              name="fullName"
              value={data.fullName}
              onChange={handleChange} 
            /> <br/><br/>
            
            <label htmlFor="mobile">
              Mobile:
            </label>
            <input
              className="input"
              type="text"
              name="mobile"
              placeholder=""
              value={data.mobile}
              onChange={handleChange}
            />
          
            
            {/* <label htmlFor="confirm_pwd">
              Confirm Password:
              
            </label>
            <input
              type="password"
              id="confirm_pwd"
              onChange={(e) => setMatchPwd(e.target.value)}
              value={matchPwd}
              required
              
            /><br/><br/> */}
          
            <button
            type="submit"
            >
              Sign Up
            </button>
          </form>
          {/* <p>
            Already registered?
            <br />
            <span className="line">
              put router link here*/}
              {/* <a href="#">Sign In</a>
            </span>
          </p> */}
        </section>
      
    </>
  );
}

export default Register