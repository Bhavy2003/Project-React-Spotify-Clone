
import './Pageleft.css'
import Head from '../Head/Head'
import * as React from 'react';






const Pageleft = () => {

  const first=[{id:0,no:"Create Your First playlist",yup:"It's easy,we'll help you",value:"Create playlist"},{id:1,no:"Let's find some podcasts to follow",yup:"We'll keep you updated on new episodes",value:"Browse Podcasts"}]
  return (
    <>
    <div className="gt z-10 mt-20">
      
    <div className="kj scroll-container">

{first.map((first)=>(
  <>
  <div className="textg rt mn " key="first.id">

    <h4 >{first.no}</h4>
    <h5 >{first.yup}</h5>
    <button type="button" className='nn'>{first.value}</button>

  </div>
  
  </>
))}

</div>
<div className="fax">
<Head/>
<img  className="dfg" src={"https://cdn-icons-png.flaticon.com/128/1246/1246334.png"} alt="" />
<button type="button" className='cf'>English</button>
</div>
<div className="yourlibrary">
  <span className="your">Your Library</span>
  <span className="your youp">+</span>
 
</div>
</div>

    </>
  )
}


export default Pageleft