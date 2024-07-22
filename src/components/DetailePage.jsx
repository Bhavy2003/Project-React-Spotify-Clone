
import React, { useContext } from 'react';
import './details.css';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { playerc } from './context/Playercontext';
import '../App.css'


const options = [
    'Follow Artist',
    'Go to Artist radio',
    'Report',
    'Share'
];

const ITEM_HEIGHT = 48;

const DetailePage = ({ item, previousClick, nextClick }) => {
    const {playwithid} = useContext(playerc);
    const {setvisible} =useContext(playerc);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const songs=[{ id: 0, imag: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKJtHhS898IV1G6FDF4mxCfh3awSfABIQ8uw&s", titl: "Ed sheeran", pr: "Top hits",num:"1" },
        { id: 1, imag: 'https://m.media-amazon.com/images/I/41Wz05FGSAL._AC_UF894,1000_QL80_.jpg', titl: "Sidhu Mosewala", pro: "Top hits Music" ,num:"2"},
        { id: 2, imag: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT37q1qSwtZfyAfs37x316wBR0utrilbOINuA&s", titl: "A.p Dhillon", pr: "Trendings",num:"3" },
        { id: 3, imag: "https://w0.peakpx.com/wallpaper/97/713/HD-wallpaper-arjith-singh-bollywood-singer.jpg", titl: "Arijit Singh", pr: "Top 100s",num:"4" },
        { id: 4, imag: "https://media.vanityfair.com/photos/63d16b6b14e07ec307e8d624/1:1/w_1997,h_1997,c_limit/GettyImages-1414522654.jpg", titl: "Justein Bieber", pr: "Top trends",num:"5" },
        { id: 5, imag: "https://blackhattalent.com/wp-content/uploads/2023/09/B-Praak-.jpg", titl: "B praak", pr: "Hits",num:"6" },
        { id: 6, imag: "https://static.toiimg.com/thumb/msid-53654315,width-400,resizemode-4/53654315.jpg", titl: "Sachin-Jigar", pr: "Top Hits",num:"7" }];

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    if (!item) {
        return null;
    }

    return (
        <>
            <div className='jkp '>
                <img src={item.image} alt="{item.title}" className="" />
                <div className="containerq  hehe flex flex-col gap-7 mt-5 backdrop-opacity-20 ">
                    <p className="titleq mt-5">
                        <img src={"https://cdn-icons-png.flaticon.com/128/15050/15050690.png"} alt="" />
                        <p className='-mt-3'> Verified Artist</p>
                    </p>
                    <p className='re -mt-2'>{item.title}</p>
                    <p style={{ marginTop: '-4%', fontSize: '20px' }}>
                        3,50,70,060 monthly listeners
                    </p>
                    <p className="-mt-9">{item.pro}</p>
                </div>
                <div className="qwp mt-3">
                    <div className=' gap-10 ml-5 llkk hidden lg:flex'>
                    
                    <img src={"https://img.icons8.com/?size=80&id=HjshNnQcOEkl&format=png"} className="imq" alt="" />
                    <button type="button" className="btn btn-outline-secondary p-4 hover:bg-slate-100 hover:text-black">Follow</button>
                    <IconButton
                        aria-label="more"
                        id="long-button"
                        aria-controls={open ? 'long-menu' : undefined}
                        aria-expanded={open ? 'true' : undefined}
                        aria-haspopup="true"
                        onClick={handleClick}
                    >
                        <MoreVertIcon />
                    </IconButton>
                    <Menu
                        id="long-menu"
                        MenuListProps={{
                            'aria-labelledby': 'long-button',
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        PaperProps={{
                            style: {
                                maxHeight: ITEM_HEIGHT * 4.5,
                                width: '20ch',
                            },
                        }}
                    >
                        {options.map((option) => (
                            <MenuItem key={option} onClick={handleClose}>
                                {option}
                            </MenuItem>
                        ))}
                    </Menu>
                   
                    </div>
                    <div className="font-bold cursor-pointer text-2xl m-4">
                        Popular
                    </div>
                    <div className="flex flex-col gap-6 mt-7 z-0">
                    {

songs.map((songs) => (

    <>
  <div className="onseen " onClick={() => playwithid(songs.id)}>

    <div key={songs} className='flex gap-6 ml-9 onseen scroll-smooth mb-10 ' onClick={() =>setvisible(true)} >
        <p className='hover:cursor-pointer'>{songs.num}</p>
        <img src={songs.imag}  className="h-10 w-10 rounded-md -mt-1 flex"alt="" />
        <p className="text-md w-[40%] hover:underline cursor-pointer">{songs.titl}</p>
        <p className='followers'>1,20,70,389</p>
        <img src={"https://cdn-icons-png.flaticon.com/128/1077/1077035.png"} className=' hidden lg:flex w-5 h-5 ml-[20%] cursor-pointer mt-[0.4%] '  alt="" />
        <p>2.56</p>
    </div>
  </div>
    </>

))
}

                    </div>
          
            <div className="grid grid-cols-4 mt-[5%] ml-[5%] gap-2  text-black">
                <p className='font-bold text-white'>Company</p>
                <p className='font-bold text-white'>Jobs</p>
                <p className='font-bold text-white'>Help</p>
                <p className='font-bold text-white'>Mobile</p>
                <p>Legal</p>
                <p>Privacy Center</p>
                <p>Privacy Policy</p>
                <p>Cookies</p>
                <p>Ad Choices</p>
                <p>Advertising</p>
                <p>Parental Controls</p>
                <p>Brand Guidelines</p>
                <p>Community Guidelines</p>
                <p>Press</p>
                <p>Install Guide</p>
            </div>
            <div className="flex gap-4 h-10 w-10 ml-[77%] pb-3  mt-[-1%] icons ">

                <img src={"https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Twitter5_svg-128.png"} alt="" />
                <img src={"https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Instagram_svg-128.png"} alt="" />
                <img src={'https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Facebook_svg-128.png'} alt="" />
            </div>
        
                
                </div>
            </div>
        </>
    );
};

export default DetailePage;


