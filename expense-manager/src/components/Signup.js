import React from 'react'
import './Signup.css'
import axios from "axios"
//import {useNavigate} from "react-router-dom"

export default function Signup() {
   //const navigate = useNavigate();

   const submitForm = async (e) =>{
    e.preventDefault();
   
    const formData = new FormData(e.target);
    formData.append("submit","signup");

    await axios
    .post("http://127.0.0.1:8000/api/validate_signup", formData)
    .then((respose) => {
      if(respose.status === 201){
        //navigate("/login",{replace:true});
        console.log("ok");
      }else if (respose.status === 500){
        console.log("error");
      }else{
        console.log("invalid");
      }
    })
    .catch((error)=>{
      console.log(error?.respose?.status);
    });
   };

  return (
    <div>
      <div class="login-page">
        <div class="form container">
        <p>Sign Up</p>
        <div>
        <img src="/Mobile login-pana (1).png" alt="Mobile Login" width="250px" height="250px" />
          </div>
        <form class="login-form" onSubmit={(e) => submitForm(e)}>
          <input type="text" placeholder="first name" name='first_name'/>
          <input type="text" placeholder="last name" name='last_name'/>
          <input type="text" placeholder="email" name='email'/>
          <input type="password" placeholder="password" name='password'/>
          
          <button type='submit'>Sign Up</button>
          <p class="message">Already registered? <a href="Login.js">Login</a></p>
      </form>
        </div>

      </div>
    </div>
  )
}
