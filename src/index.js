import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.js';
import Playercontext from './components/context/Playercontext.jsx';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 
 <BrowserRouter>
 <Playercontext>
    <App />
 </Playercontext>
  </BrowserRouter>
   

 
  {/* <script src="https://unpkg.com/react-router-dom/umd/react-router-dom.min.js"></script> */}
  </React.StrictMode>
);
