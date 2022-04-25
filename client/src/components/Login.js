import React from 'react'
import { Link } from "react-router-dom";


const Login = () => {
  return (
    <section className="signup">
    <div className="container mt-5">
      <div className="signup-content">
        <div className="signup-form">
          <h2 className="form-title">Login</h2>
          <form className="userform">
            <input type="email" placeholder="Your Email" />
            <input type="password" placeholder="Password" />
            <button className="registerBtn">Log In</button>
          </form>
          <Link to='/signup' >create an account</Link>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Login