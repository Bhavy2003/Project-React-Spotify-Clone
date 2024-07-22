import React, {  useState} from 'react';
import './PageRightbottom.css';
import '../Sider/Sider.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DetailePage from '../DetailePage';
import { useNavigate } from 'react-router-dom';
import '../Page-right/Pageright.css'
import song1 from  '../assets/song1.mp3'
import song2 from  '../assets/song2.mp3'
import song3 from  '../assets/song3.mp3'
// import { playerc } from '../context/Playercontext';


 export const x = [
    { id: 0, image: "https://i.scdn.co/image/ab67706c0000da843e28d43b9aa9e172d5724676", title: "Atif Aslam", pro: "Artist" ,file:song1},
    { id: 1, image: 'https://i.scdn.co/image/ab6761610000e5eb0261696c5df3be99da6ed3f3', title: "Arijit Singh", pro: "Artist",file:song2 },
    { id: 2, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn4rMO831YBR7U4TI0bX4OHKRBhkR7G1nmLg&s", title: "Badshah", pro: "Artist",file:song3 },
    { id: 3, image: "https://i.scdn.co/image/ab6761610000e5ebbf753c009fd9c2d53351dd3c", title: "Alan Walker", pro: "Artist",file:song1 },
    { id: 4, image: "https://i.scdn.co/image/ab6761610000e5eb36a7262247318ff0f1ad00da", title: "Shreya Ghoshal", pro: "Artist",file:song2 },
    { id: 5, image: "https://i.scdn.co/image/ab67706f00000002a9264ca6ea088f884331fec5", title: "Neha Kakkar", pro: "Artist",file:song3 },
    { id: 6, image: "https://i.scdn.co/image/ab67616d00001e02fb5edfa73e2c4be0db5e87fa", title: "Lata Mangheshkar", pro: "Artist",file:song3 }
];
export const g = [
    { id: 0, image: "https://www.shutterstock.com/shutterstock/photos/2099958544/display_1500/stock-vector-top-teen-music-logo-with-eps-format-2099958544.jpg", title: "Top Music 10", pro: "Your Daily update",file:song1 },
    { id: 1, image: 'https://media.istockphoto.com/id/857802870/vector/top-20-black-and-white-round-icon-simple-laconic-style-for-sport-music-business-web-design.jpg?s=612x612&w=0&k=20&c=SCgya9NPDUB_lltTmU3OOHNvoAKCr2wKVP5GEurqufc=', title: "Top Music 20", pro: "Your weekly update",file:song2 },
    { id: 2, image: "https://www.shutterstock.com/image-vector/top-30-music-hits-sign-600w-671305198.jpg", title: "Top Music 30", pro: "Your Daily update" ,file:song1},
    { id: 3, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwzNbiJgvsv9n_TR3ZzmT_JjXSApNa33E6pQ&s", title: "Top Music 40", pro: "Your weekly update" },
    { id: 4, image: "https://media.istockphoto.com/id/509119682/vector/top-fifty-sign.jpg?s=612x612&w=0&k=20&c=nffsOaW5_eqDOWgm_6DxBlBK0bFK_ZME_Hhc9-zUkCw=", title: "Top Music 50", pro: "Your Daily update",file:song3 },
    { id: 5, image: "https://play-lh.googleusercontent.com/hccIQcnOsrbEmpLLNr3qaxGjFS8-uAMrkdbeXvl-FDmA8iHCwfLmlWB1tnPlqeoyL6Ha=w240-h480-rw", title: "Top Music 60", pro: "Your Daily update",file:song2 },
    { id: 6, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzDUaw26vaX-QNAt40peV0gUJ2A0yWPF_VRA&s", title: "Top Music 70", pro: "Your weekly update",file:song2 }
];
 export const k = [
    { id: 0, image: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKJtHhS898IV1G6FDF4mxCfh3awSfABIQ8uw&s", title: "Ed sheeran", pro: "Top hits",file:song1 },
    { id: 1, image: 'https://m.media-amazon.com/images/I/41Wz05FGSAL._AC_UF894,1000_QL80_.jpg', title: "Sidhu Mosewala", pro: "Top hits Music",file:song2 },
    { id: 2, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT37q1qSwtZfyAfs37x316wBR0utrilbOINuA&s", title: "A.p Dhillon", pro: "Trendings" ,file:song3},
    { id: 3, image: "https://w0.peakpx.com/wallpaper/97/713/HD-wallpaper-arjith-singh-bollywood-singer.jpg", title: "Arijit Singh", pro: "Top 100s",file:song1 },
    { id: 4, image: "https://media.vanityfair.com/photos/63d16b6b14e07ec307e8d624/1:1/w_1997,h_1997,c_limit/GettyImages-1414522654.jpg", title: "Justein Bieber", pro: "Top trends",file:song2 },
    { id: 5, image: "https://blackhattalent.com/wp-content/uploads/2023/09/B-Praak-.jpg", title: "B praak", pro: "Hits",file:song3 },
    { id: 6, image: "https://static.toiimg.com/thumb/msid-53654315,width-400,resizemode-4/53654315.jpg", title: "Sachin-Jigar", pro: "Top Hits",file:song2 }
];

export const y = [
    { id: 0, image: " https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQxk9rkmGc2FQDNu5nyz0wtUKuEc6VNUoga2usbl1ziXrW26f_R",file:song1, title: "Animal", pro: "Manan Bharadwaj,Vishal Mishra" },
    { id: 1, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAjNHoVb21be4XAkGvxZqt0i_enYEWv5hXJw&s', title: "Aashiqui", pro: "Arijit Singh",file:song2 },
    { id: 2, image: "https://upload.wikimedia.org/wikipedia/en/1/15/Yeh_jawani_hai_deewani.jpg", title: "YJHD", pro: "Neha kakkar",file:song3 },
    { id: 3, image: "https://m.media-amazon.com/images/M/MV5BODA4MjM2ODk4OF5BMl5BanBnXkFtZTcwNDgzODk1OQ@@._V1_FMjpg_UX1000_.jpg", title: "YJHD", pro: "Shreya Ghoshal",file:song1 },
    { id: 4, image: "https://m.media-amazon.com/images/M/MV5BOGM4ZjFkZjktMTEwMS00NWNmLWI1NTAtYTAwYWNhNzAxMjA2XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg", title: "Koi mil Gaya", pro: "Kumar Sanu" ,file:song2},
    { id: 5, image: "https://upload.wikimedia.org/wikipedia/en/0/07/Kuch_Kuch_Hota_Hai_poster.jpg", title: "Kuch hota hai", pro: "Drake" ,file:song3},
    { id: 6, image: "https://upload.wikimedia.org/wikipedia/en/0/07/Kuch_Kuch_Hota_Hai_poster.jpg", title: "Adipurush", pro: "BTS",file:song1 }
];


const PageRightbottom = () => {
    const navigate = useNavigate();
    // const {playwithid} = useContext(playerc);

    const [selectedItem, setSelectedItem] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
   

 
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
    };
 

   
    const handleItemClick = (item, index) => {
        setSelectedItem(item);
        setCurrentIndex(index);
    };

    const previousClick = () => {
        const newIndex = (currentIndex - 1 + x.length) % x.length;
        setSelectedItem(x[newIndex]);
        setCurrentIndex(newIndex);
    };
    
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
        <img  src={"https://cdn-icons-png.flaticon.com/128/2732/2732652.png"}   className='leftclick cursor-pointer shadow-gray-200'  onClick={previousClick} alt="" />
        <img src={"https://cdn-icons-png.flaticon.com/128/2722/2722985.png"} disabled   className='rightclick cursor-pointer opacity-50'  alt="" />
      </div>

    </div>
    {/* <Player /> */}
    
    {selectedItem ? (

                <DetailePage item={selectedItem}  previousClick={previousClick}/>
            ) : (<div className="aside rounded-b-lg ">
   <div className='mainpage '>
   <div className="contain ">
   <div className='ui '>
                        <strong className='iop'>Popular Artists</strong>
                        <strong className='gfd'>Show all</strong>
                    </div>
   </div>
   <div className=''>
                        <div
                         className='side1' 
                         
                        >
                            <Slider {...settings} >

                                {

                                    x.map((item) => (

                                        <>
                                            <div
                                                className='kkk'
                                                key={item} 
                                            ><div className="container" onClick={() => handleItemClick(item)}>
                                                    <img src={item.image} className='sizeimg lo' alt="nck" />
                                                    <img className="helloc" src={"https://www.pngall.com/wp-content/uploads/9/Spotify.gif"} alt="" />
                                                </div>

                                                <h3 >{item.title}</h3>

                                                <h5>


                                                    {item.pro.slice(0, 20)}

                                                </h5>
                                            </div>
                                        </>

                                    ))
                                }
                            </Slider>

                        </div>
                    </div>
                    
   </div>
   <div className='mainpage'>
   <div className="contain">
   <div className='ui'>
                        <strong className='iop'>Popular Albums</strong>
                        <strong className='gfd'>Show all</strong>
                    </div>
   </div>
   <div>
                        <div
                         className='side1' 
                         
                        >
                            <Slider {...settings}>

                                {

                                    y.map((item) => (

                                        <>
                                            <div
                                                className='kkk '
                                                key={item}
                                            ><div className="container" onClick={() => handleItemClick(item)}>
                                                    <img src={item.image} className='sizeimg lo' alt="nck" />
                                                    <img className="helloc" src={"https://www.pngall.com/wp-content/uploads/9/Spotify.gif"} alt="" />
                                                </div>

                                                <h3 >{item.title}</h3>

                                                <h5>


                                                    {item.pro.slice(0, 20)}

                                                </h5>
                                            </div>
                                        </>

                                    ))
                                }
                            </Slider>

                        </div>
                    </div>
                    
   </div>
   <div className='mainpage'>
   <div className="contain">
   <div className='ui'>
                        <strong className='iop'>Popular Radio</strong>
                        <strong className='gfd'>Show all</strong>
                    </div>
   </div>
   <div>
                        <div
                         className='side1' 
                         
                        >
                            <Slider {...settings}>

                                {

                                    g.map((item) => (

                                        <>
                                            <div
                                                className='kkk '
                                                key={item}
                                            ><div className="container" onClick={() => handleItemClick(item)}>
                                                    <img src={item.image} className='sizeimg lo' alt="nck" />
                                                    <img className="helloc" src={"https://www.pngall.com/wp-content/uploads/9/Spotify.gif"} alt="" />
                                                </div>

                                                <h3 >{item.title}</h3>

                                                <h5>


                                                    {item.pro.slice(0, 20)}

                                                </h5>
                                            </div>
                                        </>

                                    ))
                                }
                            </Slider>

                        </div>
                    </div>
                    
   </div>
   <div className='mainpage'>
   <div className="contain">
   <div className='ui'>
                        <strong className='iop'>Featured Charts</strong>
                        <strong className='gfd'>Show all</strong>
                    </div>
   </div>
   <div>
                        <div
                         className='side1' 
                         
                        >
                            <Slider {...settings}>

                                {

                                    k.map((item) => (

                                        <>
                                            <div
                                                className='kkk '
                                                key={item}
                                            ><div className="container" onClick={() => handleItemClick(item)}>
                                                    <img src={item.image} className='sizeimg lo' alt="nck" />
                                                    <img className="helloc" src={"https://www.pngall.com/wp-content/uploads/9/Spotify.gif"} alt="" />
                                                </div>

                                                <h3 >{item.title}</h3>

                                                <h5>


                                                    {item.pro.slice(0, 20)}

                                                </h5>
                                            </div>
                                        </>

                                    ))
                                }
                            </Slider>

                        </div>
                    </div>
                    
   </div>
   <div className='mainpage'>
   <div className="contain">
   <div className='ui'>
                        <strong className='iop'>Spotify Playlists</strong>
                        <strong className='gfd'>Show all</strong>
                    </div>
   </div>
   <div>
                        <div
                         className='side1' 
                         
                        >
                            <Slider {...settings}>

                                {

                                    x.map((item) => (

                                        <>
                                            <div
                                                className='kkk '
                                                key={item}
                                            ><div className="container" onClick={() => handleItemClick(item)}>
                                                    <img src={item.image} className='sizeimg lo' alt="nck" />
                                                    <img className="helloc" src={"https://www.pngall.com/wp-content/uploads/9/Spotify.gif"} alt="" />
                                                </div>

                                                <h3 >{item.title}</h3>

                                                <h5>


                                                    {item.pro.slice(0, 20)}

                                                </h5>
                                            </div>
                                        </>

                                    ))
                                }
                            </Slider>

                        </div>
                    </div>
                    
                      
   </div>
   </div>
            )} 
   </>
  )
}

export default PageRightbottom