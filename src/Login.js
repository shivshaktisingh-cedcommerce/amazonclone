import React,{useContext} from 'react';
import './Login.css';
import { UserContext } from './Mycontext';
import { Navigate } from "react-router-dom";

const Login = () => {
    // User Login
    const obj=useContext(UserContext);
    const login=()=>{
        let text=document.getElementById("email").value;
        let password=document.getElementById("password").value;
       
    if(text === "" || password === ""){
      alert("Please provide input")
    }
    else{
        console.log(obj.userDetail.email);
        if(obj.userDetail.email === text && obj.userDetail.password === parseInt(password)){
            obj.setloggedin(true);
        }
        else{
            alert("Please enter, email = abc@gmail.com , password = 12345 ");
        }
    }
    }
  return (
    <>
        {obj.loggedin && (<Navigate to="/" replace="true"/>)}
        <div>
        <img src="https://cdn.iconscout.com/icon/free/png-256/amazon-1869030-1583154.png" alt="png" style={{width:"10%"}} className="loginlogo"/>
            <div className='loginDiv'>
                <h1>Sign-In</h1>
                <p><b>Email or mobile phone number</b></p>
                <input type="text" id="email"/>
                <p><b>Password</b></p>
                <p><input type="password" id="password"/></p>
                <button onClick={login}>Login</button>
            </div>
        </div>
      
    </>
  )
}
export default Login;