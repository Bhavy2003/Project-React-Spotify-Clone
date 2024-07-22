import './Login.css';
import React from 'react';
import Register from './Register';
import { useNavigate } from 'react-router-dom';


function Login() {
  const navigate = useNavigate();
  
  const handleSignup = () => {
    navigate('/signup');
  };

 

  return (
    <>
      <div className="logbar">
        <p>
          <img src="https://cdn-icons-png.flaticon.com/128/3671/3671955.png" alt="" />
        </p>
        <p className="loginto">Log In To Spoyify</p>
        <div className="conlog">
          <button className="btn">
            <img src="https://cdn-icons-png.flaticon.com/128/2702/2702602.png" alt="" /> Continue with Google
          </button>
          <button className="btn">
            <img src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png" alt="" /> Continue with Facebook
          </button>
          <button className="btn">
            <img src="https://cdn-icons-png.flaticon.com/128/160/160139.png" className="kmk" alt="" /> Continue with Apple
          </button>
          <button className="btn mlp"> Continue with Email or Phone number</button>
        </div>
        <hr />
        <Register />
        <div className="passcode">Forget Your Password?</div>
        <hr />
        <p className="cb">
          Don't have an account? 
          <span onClick={handleSignup} className="sp" style={{textDecoration: "underline", cursor: "pointer", fontWeight: "bold"}}>
            Sign Up for Spotify
          </span>
        </p>
      </div>
      <div className="footerl">
        <p>
          This site is protected by reCAPTCHA and the Google 
          <span>Privacy Policy</span> and 
          <span style={{ cursor: "pointer" }}>Terms of Service</span> apply.
        </p>
        <p >Already login to Spotify? <span  onClick={() => navigate('/')} className='underline cursor-pointer'>Back to home page</span></p>
      </div>
    
    </>
  );
}

export default Login;
