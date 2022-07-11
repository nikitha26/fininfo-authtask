import React, { useState,useEffect } from 'react'
import {useLocation,useNavigate } from 'react-router-dom';
import api from './api/axios';

function Dashboard() {
  const navigate = useNavigate();
  const location = useLocation();
  //console.log(location.state.status)
  const [list,setList] = useState([]);

  const config = {
    headers : {
      'Authorization':'Bearer '+location.state.token,
      'Content-Type': 'application/json',
     }
  };

  useEffect(() => {
    const userData = {
      "latitude": 16.8486792,
      "longitude": 82.1266437,
      "radius": 2,
      "sorts": {
        "rating": -1
      },
      "limit": 10
    };
    
    api
    .post("api/product/get-list", userData,config)
    .then((response) => {
      setList(response.data);
    })
    .catch((error) => {
      if (error.response) {
       alert(error.response.data.message);
        console.log("server responded");
      }
      
    });
   
  }, [])
  const newAccount = () => {
    navigate("/register")
  }
  return (
    <>
    <p>{location.state.message}  ({location.state.data.email})
     <button onClick={newAccount}>Create New Account</button>
    </p>
     <h1>Dashboard</h1>
     <h3>{list.message}</h3>
    {
      list.data == undefined ? 'No items':
      <ul>{list.data.products.map(itemname => (
        <li key={itemname.name}>{itemname.name}</li>
      ))}</ul>
    }
    </>
  )
}

export default Dashboard