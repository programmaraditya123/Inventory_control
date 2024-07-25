import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
//import logo from '../../public/images/logo.png';
import axios from 'axios';


const LandingPage = () => {
  const [components,setComponents] = useState([]);
  const getComponents = async () => {
    try {
      const {data} = await axios.get("http://localhost:8080/app/v1/auth/getcomponents");
      setComponents(data);
      
    } catch (error) {
      console.log(error);
      
    }
  };
  useEffect(() => {
    getComponents();
  },[])
  return (
    
    <>
    <div>hello,{components?.Receivednumber}</div>
    <table>
  <tbody><tr>
      <th>Name</th>
      <th>Date Received/Quantity</th>
      <th>Date Dispatch/Quantity</th>
      <th>Pending Items</th>
      <th>Status</th>
      <th>QR code(Click to download)</th>
      <th>Admin Panel</th>
    </tr>
    <tr>
      <td>c1</td>
      <td>10-7-2024/106</td>
      <td>12-7-2024/90</td>
      <td>50</td>
      <td>Delivered</td>
      <td><img src="logo" alt="logo" /></td>
      <td><Link to="/edit">Edit</Link>/delete</td>
    </tr>
  </tbody></table>

      
    </>
  )
}

export default LandingPage;
