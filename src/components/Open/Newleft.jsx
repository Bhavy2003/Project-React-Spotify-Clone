import React from 'react';
import './Open.css';
import { useNavigate } from 'react-router-dom';

const Newleft = () => {
  const navigate = useNavigate();


  const homepage = () => {
    console.log('jcsj');
navigate('/');
  }
  return (
    <div className="koi">
      <div className="fact flex">
        <img src="https://cdn-icons-png.flaticon.com/128/2111/2111685.png" className="as" alt="" />
        <h3 className='bh'>Spotify</h3>
      </div>
      <div className="fact flex">
        <img src="https://cdn-icons-png.flaticon.com/128/15971/15971217.png" className="as" alt="" />
        <h3 className='bh' onClick={homepage}>Home</h3>
      </div>
      <div className="fact flex">
        <img src="https://cdn-icons-png.flaticon.com/128/149/149852.png" className="as" alt="" />
        <h3 className='bh'>Search</h3>
      </div>
    </div>
  );
}

export default Newleft;
