import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
// import axios from 'axios';


const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const loginUser = async (e) => {
    e.preventDefault();

    const res = await fetch("/login", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password })
    });

    const data = res.json();

    if (res.status === 400 || !data) {
      window.alert("Invalid email or password");
    } else {
      window.alert("Login Successfull");

      navigate("/");
    }
  }


  return (
    <section className="signup">
      <div className="container mt-5">
        <div className="signup-content">
          <div className="signup-form">
            <h2 className="form-title">Login</h2>

            <form className="userform">

              <input type="email" placeholder="Your Email" name='email' id='email' autoComplete='off' value={email} onChange={(e) => setEmail(e.target.value)} />

              <input type="password" placeholder="Password" name='password' id='password' autoComplete='off' value={password} onChange={(e) => setPassword(e.target.value)} />

              <button className="registerBtn" onClick={loginUser}>Log In</button>
            </form>
            <Link to='/signup' >create an account</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login