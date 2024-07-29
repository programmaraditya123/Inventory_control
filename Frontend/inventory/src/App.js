import React from "react";
import {Routes,Route} from 'react-router-dom';
import HomePage from "./pages/HomePage";
import SignInpage from "./pages/SignInpage";
import Registerpage from "./pages/Registerpage";
import LandingPage from "./pages/LandingPage";
import Edit from "./pages/Edit";
import GnerateQr from "./pages/GnerateQr";
import ScanQr from "./pages/ScanQr";
 

function App() {
  return (
    <>
    <HomePage/>
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/signin" element={<SignInpage/>}/>
      <Route path="/register" element={<Registerpage/>}/>
      <Route path="/edit/:productId" element={<Edit/>}/>
      <Route path="/generateqr" element={<GnerateQr/>}/>
      <Route path="/scanqr" element={<ScanQr/>}/>
    </Routes>
    
       
    </>
  );
}

export default App;
