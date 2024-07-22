import React, { FormControl,Button, InputLabel, OutlinedInput } from '@mui/material';
import './Signup.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Typography from '@mui/material/Typography';

export default function SignUp() {
  const navigate = useNavigate();
  const [isSpiconEnabled, setIsSpiconEnabled] = useState(false);
  const [isCardVisible, setIsCardVisible] = useState(true);
  const enableSpicon = () => {
    setIsSpiconEnabled(true);
    setIsCardVisible(false);
  };
  const handleLoginRedirect = () => {
    navigate('/login');
  };
 
  return (
    <>
  
      <div className={`spicon ${isSpiconEnabled ? '' : 'disabled'}`} >
        <div className="start off">
          <img src={"https://cdn-icons-png.flaticon.com/128/3671/3671955.png"} alt="" />
          <p className='pl-5'>Sign Up To Start <span className='oof'>listening</span></p>
          <div className="cardf">
          <FormControl className='djh djhe las  ' sx={{ m: 1, width: '25ch', color: "white", borderColor: "white" }}>
            <div className="cardh">
            <InputLabel htmlFor="outlined-adornment" sx={{ color: "white",width:"25ch"}}   value="email">
              Username or Email
            </InputLabel>
            </div>
            
            <OutlinedInput sx={{ color: "white" }}
              label="Username Or Email"
              className='bjk las'
            />
          </FormControl>
          </div>
          <h5>Use a phone number instead?</h5>
          <div className="asd">
            <Button sx={{ color: "black", background: "#1ed760", borderRadius: "92px", width: "80%", marginTop: "5%", marginLeft: "10%", fontWeight: "bold", fontSize: "14px", padding: "10px" }} variant="outlined" size="medium">
              Log In
            </Button>
            <div className="ht">
              <hr />or <hr />
            </div>
            <div className="conlog gf">
              <button className="btn"><img src={"https://cdn-icons-png.flaticon.com/128/2702/2702602.png"} alt="" /> Continue with Google</button>
              <button className="btn"> <img src={"https://cdn-icons-png.flaticon.com/128/5968/5968764.png"} alt="" />Continue with Facebook</button>
              <button className="btn" ><img src={"https://cdn-icons-png.flaticon.com/128/160/160139.png"} className="kmk" alt="" /> Continue with Apple</button>
            </div>
          </div>
          <div className="ytr">
            <hr />
          </div>
          <h4 className='fg'>Already have an account?  <span  onClick={handleLoginRedirect}>Log in here.</span></h4>
          <h6 className='fg yt'>This site is protected by reCAPTCHA and the Google<span> Privacy Policy</span>
            and <span >Terms of Service </span> apply.</h6>
        </div>
            <p className='flex gap-3 items-center justify-center'>Move to home page <span onClick={() => navigate('/')} className='underline cursor-pointer'>Click here</span> </p>
        
      </div>
     
      <div>
      {isCardVisible && (
        <div className="cards">
        <Card sx={{ maxWidth: 390, zIndex: "1", position: "absolute", top: "34%", left: "37%", height: "26%" ,backgroundColor:"rgb(212, 210, 208)",color:"black"}}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Hello,user!!!
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Already Created Account!
              Click On <span className='it'>Login</span> else Click on <span className='it'>Sign Up</span>
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" variant="outlined" onClick={enableSpicon}>SignUp</Button>
            <Button size="small"  variant="outlined"  onClick={handleLoginRedirect}>Login</Button>
          </CardActions>
        </Card>
        </div>
      )}
      </div>
      
                
           
    
    </>
  );
}
