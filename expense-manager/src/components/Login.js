import React from 'react';
import './Login.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {useCookies} from 'react-cookie'
export default function Login() {
  //const navigate = useNavigate();

  const navigate = useNavigate();
  
  const[myemail,setMyemail] = useCookies(['myemail'])
  const submitForm = async (e) =>{
    e.preventDefault();

    const formData = new FormData(e.target);    
  const userEmail = formData.get("email");
    console.log(formData.get("email"));

    await axios.post('http://127.0.0.1:8000/token', formData, {headers:{'Content-Type':'application/json'}, withCredentials: true})
   .then((response) =>{
    if(response.status === 200){
      
      localStorage.clear();
      localStorage.setItem("access_token", response.data["access"]);
      //localStorage.setItem("refresh_token", response.data["refresh"]);
      axios.defaults.headers.common["Authorization"] = `Bearer ${response.data['access']}`;
      console.log("ok");
      setMyemail(['myemail'],userEmail)
      navigate(`/Home/${userEmail}`, { replace: true });
    }
   })
   .catch((error)=> {
    console.log(error?.response?.status);
   }
   );
   }
    
  


  return (
    <div>
      <div class="login-page">
      <div class="form container">
      <p>Login</p>
      <div>
        <img src="/Mobile login-rafiki.png" alt="Mobile Login" width="250px" height="250px" />
          </div>
          <form class="login-form" onSubmit={(e) => submitForm(e)}>
        <input type="text" placeholder="email" name="email"/>
        <input type="password" placeholder="password" name="password"/>
        <button type="submit">Login</button>
        <p class="message">Already registered? <a href="signup.html">Sign Up</a></p>
      </form>

      </div>
      </div>
    </div>
  )
  };

