import React, {useState} from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Auth = () => {
  const [hasAccount, setHasAccount] = useState(true);

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
        {hasAccount ? <SignIn/> : <SignUp/>}
        
      </div>
      <Footer />
    </main>
  );
};

export default Auth;
