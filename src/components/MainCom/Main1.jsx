import React from 'react';
import "../../../src/App.css";
import PageRightbottom from '../PageRightbottom/PageRightbottom';
import Newleft from '../Open/Newleft';
import Head from '../Head/Head';
import NewleftHead from '../Head/NewleftHead';
import { Routes, Route } from 'react-router-dom';
import DetailePage from '../DetailePage';
// import Scrolltop from '../Scrolltop';



export default function Main1() {
    return (
        <div>
        {/* <div className='main-layout'  > */}
        <div  className='flex flex-wrap h-screen'>
          
                <div className="chlid-compo">
                
                    <div className="first-compo ">
                    <Newleft/>
                    </div>
                    <div className="second-compo ">
                 
                  <NewleftHead/>
                  <Head/>
                    </div>
                </div>
                <div className="chlid-compo">
               
                   <div className="anotherchild rounded-b-xl scroll-smooth ">
                       <PageRightbottom/>
                       <Routes>
                      
                       <Route path='/album/:id' elemenent={<DetailePage/>}/>
                       </Routes>
                        
                   </div>
                
                    
                   
                </div>
            </div>
            </div>
        // </div>
    );
}
