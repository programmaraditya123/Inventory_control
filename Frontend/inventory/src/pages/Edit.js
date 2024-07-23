import React from 'react';
import { Link } from 'react-router-dom';

const Edit = () => {
  return (
    <>
    <div className="register-card">
        <h1>Edit</h1>
         
        <form>
          
          <input type="name" placeholder="Select(C1-C5)" />
          <input type="date" placeholder="date of Dispatch" />

          <input type="Number" placeholder="Quantity" />
           
          <Link to="/" style={{textDecoration:'none'}}><button type="submit">Gnerate QR</button></Link>
        </form>
      </div> 
      
    </>
  )
}

export default Edit;
