import { asset } from '../components/assets/assets';
import React, { useContext} from 'react';
import { playerc } from './context/Playercontext';


const Player = () => { 
    const { track, seekbar, seekbg, isPlaying, play, pause, time,previous,next,seeksong,visible,setvisible} = useContext(playerc);
    
    // Default values for time
    const closeall = ()=>{
        
        if (!isPlaying) {
            setvisible(!visible);
        }
        else{
            alert("Please pause the song then and only then you can close the player")
        }
    }
    

    return (
        <>
        {visible && <div className="mt-[111px] bg-[#1a1818] w-full playercar  ">
            <div className='flex flex-row gap-3 ml-5 h-[65px] w-[1497px] playertrack '>
              

                <img src={track.image} alt="" className='w-10 h-10 mt-3 cursor:pointer back' />
                <div className='flex flex-col mt-2 w-[10%]'>
                    <p>{track.title.slice(0,10)}..</p>
                    <p>{track.pro.slice(0, 17)}...</p>
                </div>
                
                <div className='flex flex-row gap-3 h-5 mt-2 ml-[30%] content-center align-items-center cursor:pointer onpaper'>
                    <img src={asset.shuffle_icon} alt="" />
                    <img src={asset.prev_icon}  onClick={previous} alt="" />
                    {isPlaying ? <img onClick={pause} src={asset.pause_icon} alt="" /> : <img onClick={play} src={asset.play_icon} alt="" />}
                    <img src={asset.next_icon}  onClick={next} alt="" />
                    <img src={asset.loop_icon} alt="" />  
                    <img src={'https://cdn-icons-png.flaticon.com/128/2734/2734822.png'} alt="" className='invert clop ' onClick={closeall} />       
                </div>
                <div className='flex flex-row gap-3 mt-9 ml-[-26%] ofpaper'>
                    <p>{time.currenttime.minute}:{time.currenttime.second}</p>
                    <div ref={seekbg}  onClick={seeksong} className='h-1 bg-white rounded-full w-[500px] mt-3'>
                        <hr ref={seekbar} className="h-1 border-none w-0 bg-green-800 ml-0 rounded-full" />
                    </div>
                    <p>{time.totaltime.minute}:{time.totaltime.second}</p>
                </div>

                <div className=' flex flex-row gap-3 mt-6 ml-[9%] h-5 cursor-pointer closef '>
                    <div className='hidden lg:flex gap-3'>
                    <img src={asset.plays_icon} alt="" />
                    <img src={asset.mic_icon} alt="" />
                    <img src={asset.queue_icon} alt="" />
                    <img src={asset.speaker_icon} alt="" />
                    <img src={asset.volume_icon} alt="" />
                    <div className='w-20 h-1 bg-white rounded-full mt-2'>
                        <hr />
                    </div>
                    <img src={asset.mini_player_icon} alt="" />
                    <img src={asset.zoom_icon} alt="" />
                    </div>
                    <img src={'https://cdn-icons-png.flaticon.com/128/2734/2734822.png'} alt="" className='invert ' onClick={closeall} />
                </div>
            </div>
        </div> }
       
        
        </>
    );
};

export default Player;



