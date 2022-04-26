import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const Signup = () => {
  //get user data
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "", email: "", profession: "", phone: "", password: "",
  });

  let name, value;
  const inputsHandler = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  }

  //Backend Connect 
  const PostData = async (e) => {
    e.preventDefault();

    const { name, email, profession, phone, password, } = user;

    // const data = await fetch("/register", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     name, email, profession, phone, password,
    //   })
    // });

    const data = await axios.post('/register', {
      name: name,
      email: email,
      profession: profession,
      phone: phone,
      password: password
    }, {
      headers: {
        'Content-Type': 'application/json',
      }
    })

    if (data.status === 422 || !data) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      window.alert("Registration successful");
      console.log("Registration successful");

      navigate("/login");
    }

  }

  return (
    <>
      <section className="signup">
        <div className="container mt-5">
          <div className="signup-content">
            <div className="signup-form">
              <h2 className="form-title">SignUp</h2>
              <form method="POST" className="userform">
                <input type="text" value={user.name} onChange={inputsHandler} placeholder="Your Name" autoComplete="off" name="name" id="name" />
                <input type="email" value={user.email} onChange={inputsHandler} placeholder="Your Email" autoComplete="off" name="email" id="email" />
                <input type="text" value={user.phone} onChange={inputsHandler} placeholder="Phone Number" autoComplete="off" name="phone" id="phone" />
                <input type="text" value={user.profession} onChange={inputsHandler} placeholder="Your Profession" autoComplete="off" name="profession" id="profession" />
                <input type="password" value={user.password} onChange={inputsHandler} placeholder="Password" autoComplete="off" name="password" id="password" />
                <button className="registerBtn" value="register" onClick={PostData}>register</button>
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
