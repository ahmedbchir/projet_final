import React, { useState } from "react";
import {useDispatch} from 'react-redux'
import Navbar from "./Navbar";
import Footer from "./Footer";


const SignUp = props=> {
  const {register} = props;
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [user, setUser] = useState({});
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

    
 
  function  UserValueHandler(attribute,value)  {
    
   setUser( u => ({ ...user, [attribute]: value}));
}

 

  // const handleRegister =()=>{
  //   console.log(user);
  //   axios({
  //     method: 'post',
  //     url: 'http://localhost:5000/user/addUser',
  //     data:{
  //       firstName: user.firstName,
  //       lastName: user.lastName,
  //       email: user.email,
  //       password:user.password
  //     }
  //   }).then((res)=>{
  //     console.log(res);
  //   }).catch((err)=>{
  //     console.log(err);
  //   })

  //   dispatch(
  //     register({
  //       firstName: user.firstName,
  //       lastName: user.lastName,
  //       email: user.email,
  //       password: user.password,
  //     })
  //   );

  // }

  return (

    <>
        <div className="gridy">
          <input type="text" placeholder="*First Name"  onChange={e => UserValueHandler('firstName',(e.target.value))}/>
          <input type="text" placeholder="*Last Name"  onChange={e => UserValueHandler('lastName',(e.target.value))}/>
          <input type="email" placeholder="*Email Address" autoComplete="off"  onChange={e => UserValueHandler('email',(e.target.value))}/>
        
        
          <input type="password" placeholder="*Password" onChange={e => UserValueHandler('password',(e.target.value))} />
          <input type="password" placeholder="*Confirm Password" />
          <button className="register-btn" onClick={() => register(user)}>
            Join Now
          </button>
        </div>
        </>
  );
};

export default SignUp;
