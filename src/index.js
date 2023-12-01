import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route, Outlet} from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';


function Layout(){
  return (
    <div  className="min-h-full w-full">
        <Navbar />
        <Outlet />
        <Footer className="" />
    </div>
  );
}
ReactDOM.render(
  <React.StrictMode>
    <div className="Container mx-auto">
      <div className="place-items-center">
        <BrowserRouter className=''>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Home />} />
              </Route>
            </Routes>
        </BrowserRouter>
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);