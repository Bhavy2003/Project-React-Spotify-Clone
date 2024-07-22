


// import React, { useState } from 'react';
// import "./Sider.css";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import DetailePage from '../DetailePage';

// const Sider = () => {

//     return (
//         <div>
           
//             <div className="jkp"></div>
//             {selectedItem ? (
//                 <DetailePage item={selectedItem} />
//             ) : (

//                 <div className="slider-container sid">

//                     <div className='ui'>
//                         <strong className='iop'>Popular Albums</strong>
//                         <strong className='gfd'>Show all</strong>
//                     </div>

//                     <div>
//                         <div
//                             id="slider"
//                             className='sider example'
//                         >
//                             <Slider {...settings}>

//                                 {

//                                     x.map((item) => (

//                                         <>
//                                             <div
//                                                 className='kkk '
//                                                 key={item}
//                                             ><div className="container" onClick={() => handleItemClick(item)}>
//                                                     <img src={item.image} className='sizeimg lo' alt="nck" />
//                                                     <img className="helloc" src={"https://www.pngall.com/wp-content/uploads/9/Spotify.gif"} alt="" />
//                                                 </div>

//                                                 <h3 >{item.title}</h3>

//                                                 <h5>


//                                                     {item.pro.slice(0, 20)}

//                                                 </h5>
//                                             </div>
//                                         </>

//                                     ))
//                                 }
//                             </Slider>

//                         </div>
//                     </div>
//                     <div className='ui'>
//                         <strong className='iop'>Popular Albums</strong>
//                         <strong className='gfd'>Show all</strong>
//                     </div>

//                     <div>
//                         <div
//                             id="slider"
//                             className='sider'
//                         >
//                             <Slider {...settings}>

//                                 {

//                                     y.map((item) => (

//                                         <>
//                                             <div
//                                                 className='kkk '
//                                                 key={item} onClick={() => handleItemClick(item)}
//                                             ><div className="container">
//                                                     <img src={item.image} className='sizeimg lo' alt="nck" />
//                                                     <img className="helloc" src={"https://www.pngall.com/wp-content/uploads/9/Spotify.gif"} alt="" />
//                                                 </div>

//                                                 <h3 >{item.title}</h3>

//                                                 <h5>


//                                                     {item.pro.slice(0, 17)}..

//                                                 </h5>
//                                             </div>
//                                         </>

//                                     ))
//                                 }
//                             </Slider>

//                         </div>
//                     </div>
//                     <div className='ui'>
//                         <strong className='iop'>Popular Albums</strong>
//                         <strong className='gfd'>Show all</strong>
//                     </div>

//                     <div>
//                         <div
//                             id="slider"
//                             className='sider example'
//                         >
//                             <Slider {...settings}>

//                                 {

//                                     g.map((item) => (

//                                         <>
//                                             <div
//                                                 className='kkk '
//                                                 key={item}
//                                             ><div className="container" onClick={() => handleItemClick(item)}>
//                                                     <img src={item.image} className='sizeimg lo' alt="nck" />
//                                                     <img className="helloc" src={"https://www.pngall.com/wp-content/uploads/9/Spotify.gif"} alt="" />
//                                                 </div>

//                                                 <h3 >{item.title}</h3>

//                                                 <h5>


//                                                     {item.pro.slice(0, 20)}

//                                                 </h5>
//                                             </div>
//                                         </>

//                                     ))
//                                 }
//                             </Slider>

//                         </div>
//                     </div>
//                     <div className='ui'>
//                         <strong className='iop'>Popular Albums</strong>
//                         <strong className='gfd'>Show all</strong>
//                     </div>

//                     <div>
//                         <div
//                             id="slider"
//                             className='sider'
//                         >
//                             <Slider {...settings}>

//                                 {

//                                     k.map((item) => (

//                                         <>
//                                             <div
//                                                 className='kkk '
//                                                 key={item} onClick={() => handleItemClick(item)}
//                                             ><div className="container">
//                                                     <img src={item.image} className='sizeimg lo' alt="nck" />
//                                                     <img className="helloc" src={"https://www.pngall.com/wp-content/uploads/9/Spotify.gif"} alt="" />
//                                                 </div>

//                                                 <h3 >{item.title}</h3>

//                                                 <h5>


//                                                     {item.pro.slice(0, 17)}..

//                                                 </h5>
//                                             </div>
//                                         </>

//                                     ))
//                                 }
//                             </Slider>

//                         </div>
//                     </div>
//                     <div className='ui'>
//                         <strong className='iop'>Popular Albums</strong>
//                         <strong className='gfd'>Show all</strong>
//                     </div>

//                     <div>
//                         <div
//                             id="slider"
//                             className='sider example'
//                         >
//                             <Slider {...settings}>

//                                 {

//                                     y.map((item) => (

//                                         <>
//                                             <div
//                                                 className='kkk '
//                                                 key={item}
//                                             ><div className="container" onClick={() => handleItemClick(item)}>
//                                                     <img src={item.image} className='sizeimg lo' alt="nck" />
//                                                     <img className="helloc" src={"https://www.pngall.com/wp-content/uploads/9/Spotify.gif"} alt="" />
//                                                 </div>

//                                                 <h3 >{item.title}</h3>

//                                                 <h5>


//                                                     {item.pro.slice(0, 20)}

//                                                 </h5>
//                                             </div>
//                                         </>

//                                     ))
//                                 }
//                             </Slider>

//                         </div>
//                     </div>



//                 </div>
//             )}
//         </div>
//     );
// };

// export default Sider;
