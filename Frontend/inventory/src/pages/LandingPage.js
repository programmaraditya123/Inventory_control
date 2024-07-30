import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
//import logo from '../../public/images/logo.png';
import axios from 'axios';
import QRCode from "react-qr-code";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";


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

  // function handleDownload(event) {
  //   event.preventDefault();
  //   console.log('handleDownload called');
  
  //   // QR code generation or fetching logic
  //   // ...
  
  //   // Create the download link
  //   const link = document.createElement('a');
  //   link.href = qrCodeDataUrl; // Replace with your QR code data URL
  //   link.download = `qr_${components._id}.png`;
  //   console.log('Creating download link:', link);
  
  //   link.click();
  //   console.log('Download link clicked');
  // }



  const handleDelete = async (id) => {
    try {
      const {data} = await axios.delete(`http://localhost:8080/app/v1/auth/delete/${id}`)
      if(data.success){
        getComponents();
      }else{
        console.log('errro in deleting')
      }
      
    } catch (error) {
      console.log(error);
      
    }
  };


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
    {/* <td>c1</td>
      <td>10-7-2024/106</td>
      <td>12-7-2024/90</td>
      <td>50</td>
      <td>Delivered</td>
      <td><img src="logo" alt="logo" /></td>
      <td><Link to="/edit">Edit</Link>/delete</td> */}

      {components.components?.map((component) => (<tr key={component._id}>
      <td>{component?.Part}</td>
      <td>{new Date(component?.DateReceived).toLocaleDateString('es-CL')}/{component?.Receivednumber}</td>
      <td>{new Date(component?.DateDispatched).toLocaleDateString('es-CL')}/{component?.Dispatchednumber}</td>
      <td>{component?.Receivednumber-component?.Dispatchednumber}</td>
      <td>{component?.Receivednumber===component?.Dispatchednumber?'Delivered':'Pending'}</td>
      <td><a href='#' download={`qr_${component._id}.png`} ><QRCode size={100} bgColor='white' fgColor='black' value={component._id}/></a></td>
      <td><Link to={`/edit/${component._id}`}><CiEdit/></Link>/<Link onClick={() => {handleDelete(component._id)}}><MdDelete/></Link></td>

      </tr>))}
      
    
  </tbody></table>

      
    </>
  )
}

export default LandingPage;
