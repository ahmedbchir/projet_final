import React, {useState} from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { AddUser } from "../store";
import { useDispatch } from "react-redux";

const Auth = () => {
  const [hasAccount, setHasAccount] = useState(true);
  const dispatchor= useDispatch()
  function handleRegister (user) {

    dispatchor(AddUser(user))
  }
  

  return (
    <main>
      <Navbar />

      <div className="register-content">
        <button className="sign-toggle-box">
          {
            <span
              className={`sign-toggle sign-toggle-${hasAccount}`}
              onClick={(e) => setHasAccount(!hasAccount)}
            ></span>
          }
        </button>
        {hasAccount ? <SignIn/> : <SignUp register={handleRegister}/>}
        
      </div>
      <Footer />
    </main>
  );
};

export default Auth;
