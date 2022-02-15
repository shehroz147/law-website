import React,{useState} from 'react';
import './SignUp.css';
import img from '../pictures/signup.jpg';
import TextField from "@mui/material/TextField";
import { useHistory } from "react-router";

export default function SignuUp() {
  const history = useHistory()
  const [user,setUser] = useState({
    name:"",
    email:"",
    password:"",
  });
let name ,value;
const handleInputs=(e)=>{
  console.log(e);
  name=e.target.name;
  value=e.target.value;

  setUser({...user,[name]:value});
}
const postData = async(e)=>{
    e.preventDefault();
    const {name,email,password}=user;
   const result = await fetch("http://localhost:4000/api/user/signup",{
     method: "POST",
     headers: {
       "Content-Type":"application/json"
     },
     body: JSON.stringify({
       email,
       password
     })
   });
   console.log(result.status)
   if(result.status===200){
     history.push("/Signin");
   }
    
}
 
return <div className='container signupbox'>
<div className="row">
    <div className="col-md-3">
        <img src={img} alt="" width={550} />
    </div>
    <div className="col-md-4 formsignup">
    <h1>SignUp</h1>
    <form className="form-group " id="register-form">
      <div className="form-group">
        <label htmlFor='name'>
        <i className='zmdi zmdi-account material-icons-name'></i>
        </label>
        <input type="text" name="name" id="name" autoComplete='off'
        value={user.name}
        onChange={handleInputs}
        placeholder="Enter Your Name Here"/>
        {/* onChange={(e)=>SetEmail(e.target.value)}
          label="Email"
          className = "textfield"
          variant="standard"
          required
          fullWidth
          inputProps={{ pattern: ".+@gmail.com" }}
          placeholder="XYZ@gmail.com"
        /> */}
        </div>
      <div className="form-group">
        <label htmlFor='email'>
        <i className='zmdi zmdi-account material-icons-name'></i>
        </label>
        <input type="text" name="email" id="email" autoComplete='off'
        value={user.email}
        onChange={handleInputs}
        placeholder="Enter Your Email Here"/>
        </div>
        <div className="form-group">
        <label htmlFor='password'>
        <i className='zmdi zmdi-account material-icons-name'></i>
        </label>
        <input type="text" name="password" id="password" autoComplete='off'
        value={user.password}
        onChange={handleInputs}
        placeholder="Enter Your Password Here"/>
        </div>
             <button className='btn signupBtn' onClick={postData}>Register</button>
        </form>
    </div>
    
</div>

</div>;
}
