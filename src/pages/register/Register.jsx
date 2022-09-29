import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import './register.css'



export default function Register() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)



  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false)
    try {
      const response = await axios.post("/auth/register", { username, email, password });
      console.log(response)
      response.data && window.location.replace("/login");
    } catch (err) {
      console.log("error while register", err)
      setError(true)
    }
  };

  return (
    <div className='register'>
      <span className="registerTitle">Register</span>
      <form action="" className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input className='registerInput' type="text" placeholder="Enter your username..." name='username' onChange={(e) => setUsername(e.target.value)} />
        <label>Email</label>
        <input className='registerInput' type="text" placeholder="Enter your email..." name="email" onChange={(e) => setEmail(e.target.value)} />
        <label>Password</label>
        <input className='registerInput' type="password" placeholder="Enter your password..." name='password' onChange={(e) => setPassword(e.target.value)} />
        <button className="registerButton" type="submit">Register</button>
      </form>
      <button className="registerLoginButton">
        <Link to="/login" className='link'>LOGIN</Link>
      </button>
      {
        error && <span style={{ color: "red", margin: 10 }}> Something went Wrong!</span>
      }

    </div>
  )
}
