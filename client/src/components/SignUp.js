import React, { useState } from "react";
import {useDispatch} from 'react-redux'
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";
import { register } from "../features/user";

const SignUp = (e) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const dispatch = useDispatch()
  
  const handleRegister =()=>{
    console.log(firstName+ lastName+email+password);
    axios({
      method: 'post',
      url: 'http://localhost:5000/user/addUser',
      data:{
        firstName: firstName,
        lastName: lastName,
        email: email,
        password:password
      }
    }).then((res)=>{
      console.log(res);
    }).catch((err)=>{
      console.log(err);
    })

    dispatch(
      register({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      })
    );

  }

  return (

    <>
        <div className="gridy">
          <input type="text" placeholder="*First Name" onChange={(e)=>setFirstName(e.target.value)}/>
          <input type="text" placeholder="*Last Name" onChange={(e)=>setLastName(e.target.value)}/>
          <input type="email" placeholder="*Email Address" autoComplete="off" onChange={(e) => setEmail(e.target.value)}/>
        
        
          <input type="password" placeholder="*Password" onChange={(e) => setPassword(e.target.value)} />
          <input type="password" placeholder="*Confirm Password" />
          <button className="register-btn" onClick={handleRegister}>
            Join Now
          </button>
        </div>
        </>
  );
};

export default SignUp;
