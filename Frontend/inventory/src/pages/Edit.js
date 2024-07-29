import React,{useState,useEffect} from 'react';
import { Link,useNavigate,useParams } from 'react-router-dom';
import axios from 'axios';

const Edit = () => {
  const params = useParams();
  console.log(params.productId);
  const [Part,setPart] = useState('');
  const [DateReceived, setDateReceived] = useState('');
  const [Receivednumber, setReceivednumber] = useState('');
  const [data,setData] = useState('');
  const navigate = useNavigate();

  // console.log(Part,"111111111111111111");
  // console.log(DateReceived,"2222222222222");
  // console.log(Receivednumber,"3333333333333");


  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   // const headers = localStorage.getItem("auth");
  //   // console.log("5555555555555",headers)
  //   // console.log("5555555555555")

  //   try {
  //     const data = await axios.post("http://localhost:8080/app/v1/auth/generateqr",
  //       {
  //         Part,DateReceived,Receivednumber
  //       },
  //       {
  //         headers:{'Authorization':`Bearer ${localStorage.getItem('auth')}`}
  //       }
  //     );
        
  //       console.log("66666666666666666666",data.data.data._id)
         
  //     if(data.status === 200) {
  //       //function for qr code generation
  //       alert("Component Received");
  //       navigate("/")
  //     } else if(data.status === 201) {
  //       alert("You have to login");
  //       navigate("/signin")
  //     }
      
  //   } catch (error) {
  //     console.log(error);
      
  //   }
  // };

   const getComp = async () =>{
    try {
      const {data} = await axios.get(`http://localhost:8080/app/v1/auth/getcomp/${params.productId}`);
      //console.log(data);
      setPart(data.component.Part);
      setDateReceived(data.component.DateReceived);
      setReceivednumber(data.component.Receivednumber);
      setData(data);
      
    } catch (error) {
      console.log(error);
      
    }
   };
   useEffect(() => {
    getComp();
   },[])


  const handleUpdate = async (e) => {
    e.preventDefault();
    //console.log("preet", id)
    try {
      // const formData = new FormData();
      // formData.append('Part', Part);
      // formData.append('DateReceived', DateReceived);
      // formData.append('Receivednumber', Receivednumber);
      // console.log(formData);

      const {data} = await axios.put(`http://localhost:8080/app/v1/auth/update/${params.productId}`,{Part,DateReceived,Receivednumber});
      //console.log(data,"----------------------------------");
      if(data){
        alert("Data Updated Successfully");
        navigate("/")
      }else{
        alert("Failed to update components");
        navigate("/")
      }
      
    } catch (error) {
      console.log(error);
      alert('Failed to update')
      
    } 
    
  }


   
    const formatDate = (dateString) => {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) {
        
      }
       
    };
  
    //value={new Date(DateReceived).toISOString().slice(0, 10)}



  return (
    <>
    <div className="register-card">
        <h1>Edit</h1>
         
        <form>
          
          {/* <input type="name" placeholder="Select(C1-C5)" /> */}
          <label for="component">Select Component:</label>
          <select id="component" name="component" value={Part} onChange={(e) => setPart(e.target.value) }>
            <option value="C1">C1</option>
            <option value="C2">C2</option>
            <option value="C3">C3</option>
            <option value="C4">C4</option>
            <option value="C5">C5</option>
          </select>
          <input type="date" value={formatDate(DateReceived)}  style={{fontSize:'19px'}} placeholder="date of Dispatch" onChange={(e) => setDateReceived(e.target.value) } />
           
          <input type="Number" value={Receivednumber} placeholder="Quantity" style={{fontSize:'19px'}}  onChange={(e) => setReceivednumber(e.target.value) }/>
           
          <Link to="/" style={{textDecoration:'none'}} onClick={handleUpdate} ><button type="submit">Gnerate QR</button></Link>
        </form>
      </div> 
      
    </>
  )
}

export default Edit;
