import React from 'react';
import { Link } from 'react-router-dom';
//import logo from '../../public/images/logo.png';


const LandingPage = () => {
  return (
    <>
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
