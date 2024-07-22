import React from 'react'
import './Head.css'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';

import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
// import Player from '../Player';
const Head = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpenT = () => {
    setOpen(true);
  };

  const handleCloseF = () => {
    setOpen(false);
  };
  return (
    <>
      <div className='flex flex-col gap-10 mt-5'>
        <div className='loou' >
          <p>Legal</p>
          <p>Safety& Privacy Centre</p>
          <p>Privacy Policy</p>
          <p>Cookies</p>
          <p>About Ads</p>
          <p>Accessibility</p>
        </div>
        <div className='flex  gap-1 hhjj ml-4 ' >
          <img className="dfg h-6 invert cursor-pointer " src={"https://cdn-icons-png.flaticon.com/128/1246/1246334.png"} alt="" onClick={handleClickOpenT}/>
          <button type="button" className='cf'onClick={handleClickOpenT} >English</button>


          <Dialog
            open={open}
            onClose={handleCloseF}
            className='mt-[-75%] ml-[-95%] backdrop-blur-sm dialogback'
          >
            <div className='bg-[#3b3b3b] rounded '>



              <DialogTitle className="text-white m-[-3%]" id="alert-dialog-title">
                {"Choose Language"}
                <Button onClick={handleCloseF}> <img className="h-5 w-5 ml-[970%] mt-[10%]" src={"https://cdn-icons-png.flaticon.com/128/3416/3416079.png"} alt="" /></Button>
                <br />
                {"This updates what you read on open.spotify.com"}
                <hr className='w-full ml-[-2%]' />
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description" className='grid grid-cols-3  gap-10 p-5 h-60 overflow-auto cursor-pointer scrollcontainer'>
                  <div>
                     <p className='text-white'>English</p> 
                     <p className='text-gray-500'>English</p>
                     </div>
                  <div> 
                    <p className='text-white'>हिंदी</p>
                     <p className='text-gray-500'>Hindi</p> 
                     </div>
                  <div> 
                     <p className='text-white'>
                    தமிழ்</p> 
                       <p className='text-gray-500'>Tamil</p> 
                       </div>
                       <div>
                     <p className='text-white'>English</p> 
                     <p className='text-gray-500'>English</p>
                     </div>
                  <div> 
                    <p className='text-white'>हिंदी</p>
                     <p className='text-gray-500'>Hindi</p> 
                     </div>
                  <div> 
                     <p className='text-white'>
                    தமிழ்</p> 
                       <p className='text-gray-500'>Tamil</p> 
                       </div>
                       <div>
                     <p className='text-white'>English</p> 
                     <p className='text-gray-500'>English</p>
                     </div>
                  <div> 
                    <p className='text-white'>हिंदी</p>
                     <p className='text-gray-500'>Hindi</p> 
                     </div>
                  <div> 
                     <p className='text-white'>
                    தமிழ்</p> 
                       <p className='text-gray-500'>Tamil</p> 
                       </div>
                       <div>
                     <p className='text-white'>English</p> 
                     <p className='text-gray-500'>English</p>
                     </div>
                  <div> 
                    <p className='text-white'>हिंदी</p>
                     <p className='text-gray-500'>Hindi</p> 
                     </div>
                  <div> 
                     <p className='text-white'>
                    தமிழ்</p> 
                       <p className='text-gray-500'>Tamil</p> 
                       </div>
                       <div>
                     <p className='text-white'>English</p> 
                     <p className='text-gray-500'>English</p>
                     </div>
                  <div> 
                    <p className='text-white'>हिंदी</p>
                     <p className='text-gray-500'>Hindi</p> 
                     </div>
                  <div> 
                     <p className='text-white'>
                    தமிழ்</p> 
                       <p className='text-gray-500'>Tamil</p> 
                       </div>
                       <div>
                     <p className='text-white'>English</p> 
                     <p className='text-gray-500'>English</p>
                     </div>
                  <div> 
                    <p className='text-white'>हिंदी</p>
                     <p className='text-gray-500'>Hindi</p> 
                     </div>
                  <div> 
                     <p className='text-white'>
                    தமிழ்</p> 
                       <p className='text-gray-500'>Tamil</p> 
                       </div>
                       <div>
                     <p className='text-white'>English</p> 
                     <p className='text-gray-500'>English</p>
                     </div>
                  <div> 
                    <p className='text-white'>हिंदी</p>
                     <p className='text-gray-500'>Hindi</p> 
                     </div>
                  <div> 
                     <p className='text-white'>
                    தமிழ்</p> 
                       <p className='text-gray-500'>Tamil</p> 
                       </div>
                       <div>
                     <p className='text-white'>English</p> 
                     <p className='text-gray-500'>English</p>
                     </div>
                  <div> 
                    <p className='text-white'>हिंदी</p>
                     <p className='text-gray-500'>Hindi</p> 
                     </div>
                  <div> 
                     <p className='text-white'>
                    தமிழ்</p> 
                       <p className='text-gray-500'>Tamil</p> 
                       </div>
                       <div>
                     <p className='text-white'>English</p> 
                     <p className='text-gray-500'>English</p>
                     </div>
                  <div> 
                    <p className='text-white'>हिंदी</p>
                     <p className='text-gray-500'>Hindi</p> 
                     </div>
                  <div> 
                     <p className='text-white'>
                    தமிழ்</p> 
                       <p className='text-gray-500'>Tamil</p> 
                       </div>

                </DialogContentText>
              </DialogContent>

            </div>
          </Dialog>

        </div>
       
      </div>
      {/* <Player/> */}
    </>
  )
}

export default Head