import React,{useState} from 'react';
import { QrReader } from 'react-qr-code-reader';

const ScanQr = () => {
    const [read, setRead] = useState(true);
	
  return (
   
    
      <QrReader read={read} />
    
  )
}

export default ScanQr
