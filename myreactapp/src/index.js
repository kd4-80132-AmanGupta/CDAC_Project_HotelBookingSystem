import React from 'react';
import ReactDOM from 'react-dom/client';
//import Launcher from './Launcher';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './Component/Home';
import axios from 'axios';

debugger
const axiosInstance = axios.create();
// Add a request interceptor
axiosInstance.interceptors.request.use((config)=>{
  const token = sessionStorage.getItem('jwttoken');
  if(token){
    config.headers.Authorization = `Bearer ${token}`;
   
  }
  return config;
},
error => { return Promise.reject(error) });
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
            <BrowserRouter>
            {/*<Launcher></Launcher>*/}
            <Home></Home>
            </BrowserRouter>);


