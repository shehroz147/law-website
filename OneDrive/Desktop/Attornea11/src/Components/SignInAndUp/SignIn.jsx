import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function SignIn() {
    const history = useHistory();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const Login = async(e)=>{
        // Api Calling
        // e.preventDefault();
        const result = await fetch("http://localhost:4000/api/user/login",{
        method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({
            email,password
          })
      });
      const data = result.json();
      console.log(data);
        history.push('/');
    }
  return     <div className="container Signinbox">
  <div className="form-1">
    <h1>log In</h1>
    <p>A place to share knowledge and better understand the world</p>
    <div className="row">
      <div className="col">
        <button className="btn googlebtn">
          <i className="bi bi-google"></i>Continue with Google
        </button>
        <br />
        <button className="btn facebookbtn">
          <i className="bi bi-facebook"></i>Continue with facebook
        </button>
        <button className="btn emailbtn">SignUp with email</button>
        <hr />
        <p>
          By continuing you indicate that you agree to Quora’s Terms of
          Service and <a href="">Privacy Policy.</a>{" "}
        </p>
      </div>
      <div className="col col2">
      <h2>Login</h2>
        <hr />
        <div className="form-group">
        <label for="email" >Email</label><br />
        <input type="email" name="email" id="email" placeholder="Your email*" required
        value={email}
        onChange={(e)=>setEmail(e.target.value)} /><br />
        </div>
        <div className='form-group'>
        <label for="password">Password</label><br />
        <input type="password" name="password"  id="password" placeholder="Your Password*" required 
        value={password}
        onChange={(e)=>setPassword(e.target.value)}/>
        </div>
      <br />
        <span className="forgot">Forgot Password?</span>
        <button className="btn loginbtn" onClick={(e)=>Login()}>Login</button>
      </div>
    </div>
    <div className="footer2">
        <ul>
          <li>About</li>
          <li>Careers</li>
          <li>Privacy</li>
          <li>Contact</li>
          <li>Languages</li>
          <li>Your Ad Choices</li>
          <li>Press</li>
          <p>Inc.2022</p>
        </ul>
    </div>
  </div>
</div>;
}
