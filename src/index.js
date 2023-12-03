import React, { useState, createContext } from "react";
import './index.css';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route, Outlet} from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

const ThemeContext = createContext();

function Layout(){

  const [state, setState] = useState({
    theme: 'light',
    themes: {
      light: {
        backGroundColorRadiantRecap: "bg-purple-600",
        bg: "bg-red-200",
      },
      black: {
        //Commun
        backGroundColorRadiantRecap: "bg-purple-200",
        bg: "bg-red-800",
      },
    },
  });

  return (
    <div  className="min-h-full w-full">
        <ThemeContext.Provider value={[state, setState]}>
          <Navbar />
          <Outlet />
          <Footer className="" />
        </ThemeContext.Provider>
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

export { ThemeContext };