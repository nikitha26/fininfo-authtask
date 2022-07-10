import React from 'react'
import {useLocation } from 'react-router-dom';
function Dashboard() {
  const location = useLocation();
  console.log(location.state)
  return (

    <div>dashboard</div>
  )
}

export default Dashboard