import React from 'react';
import { Link } from 'react-router-dom';

const Edit = () => {
  return (
    <>
    <div className="register-card">
        <h1>Edit</h1>
         
        <form>
          
          {/* <input type="name" placeholder="Select(C1-C5)" /> */}
          <label for="component">Select Component:</label>
          <select id="component" name="component">
            <option value="C1">C1</option>
            <option value="C2">C2</option>
            <option value="C3">C3</option>
            <option value="C4">C4</option>
            <option value="C5">C5</option>
          </select>
          <input type="date" style={{fontSize:'19px'}} placeholder="date of Dispatch" />

          <input type="Number" placeholder="Quantity" style={{fontSize:'19px'}} />
           
          <Link to="/" style={{textDecoration:'none'}}><button type="submit">Gnerate QR</button></Link>
        </form>
      </div> 
      
    </>
  )
}

export default Edit;
