import React, { useContext } from "react";
import "../../../src/App.css";
import PageRightbottom from "../PageRightbottom/PageRightbottom";
import Newleft from "../Open/Newleft";
import Head from "../Head/Head";
import NewleftHead from "../Head/NewleftHead";
import { Routes, Route } from "react-router-dom";
import DetailePage from "../DetailePage";
import Player from "../Player";
import  { playerc } from "../context/Playercontext";


// import Scrolltop from "../Scrolltop";
export default function Main() {
  const {audioRef,track}=useContext(playerc);
  return (
    <div>

    
      <div className="main-layout">
      {/* <Scrolltop/> */}
          <div className="chlid-compo -z-10 ">
         
            <div className="first-compo ">
              <Newleft />
            </div>
            <div className="second-compo">
              <NewleftHead />
              <Head />
            </div>
           
      
        </div>
        <div className="chlid-compo">
       
          <div className="anotherchild rounded-b-xl scroll-smooth ">
            <PageRightbottom />
            <Routes>
              <Route path="/album/:id" elemenent={<DetailePage />} />
            </Routes>
          </div>
        </div>
        
      </div>
      <div className="mt-[-11.5%] z-50 fixed">
    
              <Player />
              <audio ref={audioRef}  src={track.file} preload="auto"></audio>
            </div>
    </div>
  );
}
