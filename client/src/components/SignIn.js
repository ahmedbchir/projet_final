import React, {useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../features/user';

const SignIn = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()
    const dispatch= useDispatch()

    const handleLogin =()=>{
        console.log(email);
        console.log(password);
        axios({
            method:"post",
            url:"http://localhost:5000/user/signin",
            data: {
                email:email,
                password: password
            }
        }).then((res)=>{
            console.log(res);
            navigate('/')
        }).catch((err)=>{
            console.log(err);
        })
        dispatch(
          login({
            email: email,
            password: password,
          })
        );
    }

  return (
    <div className="gridy">
            <input
          type="email"
          placeholder="*Email Address"
          onChange={(e) => setEmail(e.target.value)}
          autoComplete={"off"}
        />
                <input
          type="password"
          placeholder="*Password"
          onChange={(e) => setPassword(e.target.value)}
        /> 
         <button className="register-btn" onClick={handleLogin}>
          Log In
        </button>
    </div>
  )
}

export default SignIn



