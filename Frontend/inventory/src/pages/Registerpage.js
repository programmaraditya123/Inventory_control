import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Registerpage = () => {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/app/v1/auth/registeruser",{name,email,password});

      if(res){
        alert("Registration successful");
        navigate("/signin")

      } else{
        alert("Failed to register");
      }
      
    } catch (error) {
      console.log(error);
      
    }
  }


  return (
    <>
     <div className="register-card card">
        <h1>Register</h1>
        <h2>Create , Your New Account Here !</h2>
        <form onSubmit={handleSubmit}>
        <input type="name" placeholder="Your Name" onChange={(e) => setName(e.target.value)}/>
          
          <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
          <input type="password" placeholder="Enter password"onChange={(e) => setPassword(e.target.value)} />
           
          <button type="submit">Register</button>
        </form>
        <div className="notaccount">
            <p>Already have an account?
            <Link to="/signin">Login</Link></p>
        </div>
      </div> 
      
    </>
  )
}

export default Registerpage;
