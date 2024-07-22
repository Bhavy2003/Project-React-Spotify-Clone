import * as React from 'react';

import IconButton from '@mui/material/IconButton';

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';

import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import "./Login.css";

import Switch from '@mui/material/Switch';

  const label = { inputProps: { 'aria-label': 'Color switch demo' } };

export default function Register() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    
      <div className='pp'>
        {/* <div className="emailw"> */}
        <div className="email">

         <FormControl className='djh dj' sx={{ m: 1, width: '25ch' ,color:"white",bordercolor:"white"}} >
          <InputLabel htmlFor="outlined-adornment"  sx={{color:"white"}} className='pp'>Username or Email</InputLabel>
          <OutlinedInput  sx={{color:"white"}}  
            label="Username Or Email"
            />
        </FormControl>
            </div>
            <div className="email">
        <FormControl className='djh dj' sx={{ m: 1, width: '25ch' ,color:"white",bordercolor:"white"}} >
          <InputLabel htmlFor="outlined-adornment-password"   className='pp ' sx={{color:"white"}}>Password</InputLabel>
          <OutlinedInput  sx={{color:"white"}}
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
         
            endAdornment={
              <InputAdornment position="end"  sx={{color:"white"}} className='lmp'>
                <div className="pass">
                <IconButton className='MuiIconButton-root '
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"  sx={{color:"white",marginLeft:"430px",marginTop:"-20px" }} 
                
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </div>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        </div>
        {/* </div> */}
        <div>
            <div className="lom">

      <Switch {...label} defaultChecked color="success" />
      <span className="iu"><strong >Remember me</strong></span>
            </div>
            <div className="asd">
            <Button  sx={{color:"black",background:"#1ed760",borderRadius:"92px", width: "142%",marginTop: "10%",
    marginLeft: "10%",fontWeight:"bold",fontSize:"14px",padding:"10px"}} variant="outlined" size="medium">
         Login In
        </Button>
            </div>
      
           
     
    
    
      
    </div>
   
      </div>
     


  );
}