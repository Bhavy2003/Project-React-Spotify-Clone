

import React, { useEffect, useRef, useState } from 'react'
import { createContext } from 'react'
import { k } from '../PageRightbottom/PageRightbottom';

export const playerc=createContext();
const Playercontext = (props) => {
    const audioRef = useRef();
    const seekbg = useRef();
    const seekbar = useRef();
    const[visible,setvisible]=useState(false);
    
    const[track,settrack]=useState(k[0]);
    const [isPlaying,setisPlaying]=useState(false);
         const [time,settime]=useState({
             currenttime:{
                 second:'0',
                 minute:'0'
             },
             totaltime:{
                second:'0',
                 minute:'0'
         }
    
         })
             
            const playwithid= async(id)=>{
        await settrack(k[id]);
        await audioRef.current.play();
         setisPlaying(true);
    }
    const seeksong= async(e)=>{
       audioRef.current.currentTime=((e.nativeEvent.offsetX/seekbg.current.offsetWidth)*audioRef.current.duration);
       setisPlaying(true);
    }
        const previous= async ()=>{
        if(track.id>0){
             await settrack(k[track.id-1]);
            await audioRef.current.play();
            setisPlaying(true);
        }

    }

    const next= async ()=>{
        if(track.id<k.length-1){
             await settrack(k[track.id+1]);
            await audioRef.current.play();
            setisPlaying(true);
        }

    }
    const close=()=>{
        setvisible(false);
    }

        const play=()=>{
            audioRef.current.play();
            setisPlaying(true);
        
    }
useEffect(()=>{
        setTimeout(()=>{
            audioRef.current.ontimeupdate=()=>{
                seekbar.current.style.width =`${(audioRef.current.currentTime/audioRef.current.duration)*100}%`;
                settime({
                    currenttime:{
                        second:Math.floor(audioRef.current.currentTime%60),
                        minute:Math.floor(audioRef.current.currentTime/60)
                    },
                    totaltime:{
                        second:Math.floor(audioRef.current.duration % 60),
                        minute:Math.floor(audioRef.current.duration/60)
                    }
                })
            }
         })
     },[audioRef])

    const pause=()=>{
        audioRef.current.pause();
        setisPlaying(false);
    }
    const contextvalue={
      
        audioRef,seekbg,
        seekbar,track,settrack,
         isPlaying,setisPlaying,
         time,settime,
         play,pause,playwithid,
        next,previous,seeksong,
        visible,setvisible,close
    }

  return (
    <>
    <playerc.Provider value={contextvalue}>
        {props.children}
    </playerc.Provider>
    </>
  )
}

export default Playercontext

