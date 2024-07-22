import React from 'react'
import { useNavigate } from 'react-router-dom'; 
import './Pageright.css'

const Pageright = () => {
    const navigate = useNavigate();
    const handleLoginClick = () => {
        navigate('/login');
      };
    
      const handleSignUpClick = () => {
        navigate('/signup');
      };
  return (
    <>
    <div className='ghj'>
      <div className='uip'> 
      </div>
      <div className='kl op'>
      </div>
      <div className="signlogin">
      <button type="button" className='signu' onClick={handleSignUpClick}>Sign Up</button>
      <button type="button" className='logi' onClick={handleLoginClick}>Login</button>
      </div>
      <div className="leftright navigation-buttons">
        <img  src={"https://cdn-icons-png.flaticon.com/128/2732/2732652.png"}   className='leftclick cursor-pointer shadow-gray-200'  onClick={()=>navigate(-1)} alt="" />
        <img src={"https://cdn-icons-png.flaticon.com/128/2722/2722985.png"}    className='rightclick cursor-pointer' onClick={()=>navigate(1)} alt="" />
      </div>

    </div>
    </>
  )
}

export default Pageright