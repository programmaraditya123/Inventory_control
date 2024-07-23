import React from 'react'
import { Link } from 'react-router-dom'

const GnerateQr = () => {
  return (
    <>
    <div className="register-card">
        <h1>Generate QR Code</h1>
         
        <form>
          
          <input type="name" placeholder="Select Component(C1-C5)" />
          <input type="date" placeholder="Date of Dispatch" />

          <input type="Number" placeholder="Quantity" />
           
          <Link to="/" style={{textDecoration:'none'}}><button type="submit">Gnerate QR</button></Link>
        </form>
        {/* <div className="notaccount">
            <p>Don't have an account?
            <Link to="/register">Register here</Link></p>
        </div> */}
      </div> 
      
    </>
  )
}

export default GnerateQr
