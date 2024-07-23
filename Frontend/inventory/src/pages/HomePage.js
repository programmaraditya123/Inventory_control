import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [name, setName] = useState();

  //get name
  const Name = async () => {
    const { data } = await axios.get("http://localhost:8080/app/v1/auth/home");
    setName(data);
  };
  Name();

  return (
    <div className="navbar">
      <div className="header">
        <div>
          <Link to="/" className="link"><h3>Inventory Management System</h3></Link>
        </div>
        <div className="gcqr">
          <Link to="/generateqr" className="link">Generate QR code</Link>
          <Link className="link">Scan QR code</Link>
        </div>
        <div className="loginRegister">
          <Link to="/signin"><button >Sign in</button></Link>
          <Link to="/register"><button >Register</button></Link>
           
        </div>
      </div>
      {/* <div className="register-card">
        <h1>Sign in</h1>
        <h2>Welcome , Login to continue</h2>
        <form>
          
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Enter password" />
           
          <button type="submit">Sign in</button>
        </form>
        <div className="notaccount">
            <p>Don't have an account?
            <Link to="#">Register here</Link></p>
        </div>
      </div> */}
    </div>
  );
};

export default HomePage;
