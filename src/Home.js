import React from 'react'
import { useNavigate } from 'react-router-dom';
function Home() {
    const navigate = useNavigate();
  const loginComponent = () => {
    navigate("/loginComponent")
  }
  const registerComponent = () => {
    navigate("/register")
  }
  return (
    <div>Home

    <div>
        <button onClick={loginComponent}>
          LogIn
        </button>
        <button onClick={registerComponent}>
         Register
        </button>
      </div>
    </div>
  )
}

export default Home