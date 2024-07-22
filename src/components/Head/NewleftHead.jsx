import React from 'react'
import './Head.css'
import { useRef } from 'react';

const NewleftHead = () => {
    const scrollContainerRef = useRef(null);


    const first=[{id:0,no:"Create Your First playlist",yup:"It's easy,we'll help you",value:"Create playlist"},{id:1,no:"Let's find some podcasts to follow",yup:"We'll keep you updated on new episodes",value:"Browse Podcasts"}]
  return (
   <>
   <div>
   <div className="yourlibrary flex">
    <img src={"https://static.thenounproject.com/png/2942307-200.png"}  className="h-10 w-10 -ml-10 mt-3 hover:bg-white hover:drop-shadow-2xl rounded-full" alt="" />
  <span className="your mt-3 decoration-solid">Your Library</span>
  <span className="your yourk ml-20 mt-3">+</span>
 
</div>
   </div>
 <div className="kj scroll-container flex flex-col gap-7 ml-4 mt-5 scroll-smooth focus:scroll-auto"  ref={scrollContainerRef}
              >

{first.map((first)=>(
  <>
  <div className=' oiy p-5 scroll-smooth'>
  <div className="textg rt mn bg-red flex flex-col gap-4" key="first.id">

<h4 >{first.no}</h4>
<h5 >{first.yup}</h5>
<button type="button" className='nn bg-white text-black'>{first.value}</button>

</div>
  </div>
  </>
))}



</div>
   </>
  )
}

export default NewleftHead