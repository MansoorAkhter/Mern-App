import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <section className="signup">
        <div className="container mt-5">
          <div className="signup-content">
            <div className="signup-form">
              <h2 className="form-title">SignUp</h2>
              <form action="" className="userform">
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Your Email" />
                <input type="text" placeholder="Mobile Number" />
                <input type="text" placeholder="Your Profession" />
                <input type="password" placeholder="Password" />
                <button className="registerBtn">register</button>
              </form>
              <Link to='/login' >I am already registerd</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
