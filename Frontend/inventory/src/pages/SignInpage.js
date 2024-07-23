import React,{useState , useEffect} from 'react';
import { Link , useNavigate} from 'react-router-dom';
import axios from 'axios';

const SignInpage = () => {
  const navigate = useNavigate();
  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("");
  //const [auth,setAuth] = useState("");

  //default axios
  //axios.defaults.headers.common["Authorization"] = auth?.token;
  
   

  //handlesubmit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const user = await axios.post("http://localhost:8080/app/v1/auth/signin",{email,password});
      console.log("11111111111111",user);

      if(user && user.data && user.data.token){
        console.log("8888888888888",user.data.token)
        //setAuth({token:user.data.token})
        //setAuth({token:`Bearer ${token}`})
        localStorage.setItem('auth',JSON.stringify(user.data.token));
        alert("Loggin Successfully");
        navigate("/")
      } else {
        alert("Failed to login");
      }
      
    } catch (error) {
      console.log(error);
      alert('failed to signin')
      
    }
  };
  // useEffect(() => {
  //   const data = localStorage.getItem('auth');
  //   if(data){
  //     const parseData = JSON.parse(data);
  //     setAuth({token:user.data.token});
  //     //axios.defaults.headers.common["Authorization"] = `Bearer ${parseData}`;
  //     console.log("222222222222",data)
  //   }
  // },[])
  return (
    <>
      <div className="register-card">
        <h1>Sign in</h1>
        <h2>Welcome , Login to continue</h2>
        <form onSubmit={handleSubmit}>
          
          <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
          <input type="password" placeholder="Enter password"onChange={(e) => setPassword(e.target.value)} />
           
          <button type="submit">Sign in</button>
        </form>
        <div className="notaccount">
            <p>Don't have an account?
            <Link to="/register">Register here</Link></p>
        </div>
      </div> 
    </>
  )
}

export default SignInpage;
