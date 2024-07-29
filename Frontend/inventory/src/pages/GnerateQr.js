import React,{useState} from 'react';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
//import QRCode from 'react-qr-code';

const GnerateQr = () => {
  const [Part,setPart] = useState('');
  const [DateReceived, setDateReceived] = useState('');
  const [Receivednumber, setReceivednumber] = useState('');
  const navigate = useNavigate();

  // console.log("22222222222",Part);
  // console.log("33333333333",DateReceived);
  // console.log("444444444444444444",Receivednumber)
  


  const handleSubmit = async (e) => {
    e.preventDefault();
    // const headers = localStorage.getItem("auth");
    // console.log("5555555555555",headers)
    // console.log("5555555555555")

    try {
      const data = await axios.post("http://localhost:8080/app/v1/auth/generateqr",
        {
          Part,DateReceived,Receivednumber
        },
        {
          headers:{'Authorization':`Bearer ${localStorage.getItem('auth')}`}
        }
      );
        
        console.log("66666666666666666666",data.data.data._id)
         
      if(data.status === 200) {
        //function for qr code generation
        alert("Component Received");
        navigate("/")
      } else if(data.status === 201) {
        alert("You have to login");
        navigate("/signin")
      }
      
    } catch (error) {
      console.log(error);
      
    }
  };


  


  return (
    <>
    <div className="register-card">
        <h1>Generate QR Code</h1>
         
        <form>
          
          {/* <input type="name" placeholder="Select Component(C1-C5)" /> */}
          <label for="component">Select Component:</label>
          <select id="component" name="component" onChange={(e) => setPart(e.target.value) }>
            <option value="C1">C1</option>
            <option value="C2">C2</option>
            <option value="C3">C3</option>
            <option value="C4">C4</option>
            <option value="C5">C5</option>
          </select>
          <input type="date" style={{fontSize:'19px'}} placeholder="Date of Dispatch" onChange={(e) => setDateReceived(e.target.value) } />

          <input type="Number" style={{fontSize:'19px'}} placeholder="Quantity" onChange={(e) => setReceivednumber(e.target.value) }/>
           
          <Link to="/" style={{textDecoration:'none'}}><button type="submit" onClick={handleSubmit}>Gnerate QR</button></Link>
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
