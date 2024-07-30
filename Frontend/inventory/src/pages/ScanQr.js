import React, { useEffect, useState } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';
//import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ScanQr = () => {
  //const params = useParams();
  const navigate = useNavigate();
  const [scanResult, setScanResult] = useState(null);
  const [Receivednumber,setReceivednumber] = useState();
  const [DateDispatched,setDateDispatched] = useState(new Date().toLocaleDateString('en-CL'));
  const [Dispatchednumber,setDispatchednumber] = useState();
  const [BalanceItem,setBalanceItem] = useState(15);
  const [status,setStatus] = useState('Delivered');
  console.log(scanResult,"134567891234567899");
  // console.log(Receivednumber,"1111111111111111111")
  // console.log(Dispatchednumber,"222222222222222222222222")

   
      const dispatchComponent = async (req,res) => {
      if(scanResult != null)
        {const {data} = await axios.put(`http://localhost:8080/app/v1/auth/dispatchcomp/${scanResult}`,{Receivednumber,DateDispatched,Dispatchednumber,BalanceItem,status});
        // setDispatchednumber(data.disp.Dispatchednumber);
        // setReceivednumber(data.disp.Receivednumber);
        // console.log(data.disp.Receivednumber,"9999999999999999999")
        // console.log(data.disp.Dispatchednumber,"1111111111111111111222222222")
      if(data){
        alert("Data Dispatched Successfully");
        navigate("/")
      } else {
        alert("Failed to dispatch components");
        navigate("/")
      }}
      
  };
 

  useEffect(() => {
    const scanner = new Html5QrcodeScanner('reader', {
      qrbox: {
        width: 350,
        height: 350,
      },
      fps: 5,
       
    });

    const success = (decodedText, decodedResult) => {
      scanner.clear();
      setScanResult(decodedText);
    };

    const error = (errorMessage) => {
      console.log(errorMessage);
    };

    scanner.render(success, error);
    

    return () => {
      // Clean up the scanner when the component unmounts
      scanner.clear().catch((error) => console.error('Failed to clear scanner:', error));
    };
  }, []);


  useEffect(() => {
    dispatchComponent();
  })

  // useEffect(() => {
  //   setReceivednumber(prevState => ({...prevState, count:prevState.count+1}))
  // },[])

  //console.log(data.disp.Receivednumber,"9999999999999999999")
  //console.log(data.disp.Dispatchednumber,"1111111111111111111222222222")





  return (
    <div>
      {scanResult ? (
        <div>
          Success: <a href={scanResult}>{scanResult}</a>
        </div>
      ) : (
        <div id='reader'></div>
      )}
    </div>
  );
};

export default ScanQr;





















// import React,{useEffect, useState} from 'react';
// import {Html5QrcodeScanner} from 'html5-qrcode';

// const ScanQr = () => {
//   const [scanResult, setScanResult] = useState(null);

//   useEffect(() => {
//     const scanner = new Html5QrcodeScanner('reader',{
//       qrbox:{
//         width: 250,
//         height: 250,
//       },
//       fps:5,
//     })
//     scanner.render(success,error);
  
//     function success(result){
//       scanner.clear();
//       setScanResult(result);
  
//     }
//     function error(error){
//       console.log(error);
  
//     }

//   },[]);
 

//   return (
//     <div>
//       {scanResult ? <div>success : <a href={scanResult}>{scanResult}</a></div> : <div id='reader'></div>}
//     </div>
//   )
// }

// export default ScanQr
