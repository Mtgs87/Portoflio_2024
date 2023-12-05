import React, { useState, createContext } from "react";
import './index.css';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route, Outlet} from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Works from "./pages/Works";

const ThemeContext = createContext();

function Layout(){

  const [state, setState] = useState({
    theme: 'light',
    themes: {
      light: {
        backGroundColorRadiantNavbar: "from-purple-700 via-purple-600 to-purple-400",
        navbarTextColor: "text-gray-200",
        backgroundTheme: "bg-gray-200",
        background: "linear-gradient(342deg, rgba(50,50,54,1) 0%, rgba(30,34,54,1) 50%, rgba(32,32,35,1) 100%)",
        homeTextColor: "text-gray-200",
        borderImageMtgs: "from-purple-200 via-purple-600 to-purple-400",
        borderTop:"1px solid #7E7E89",
        backGroundColorRadiantTopHome: "from-purple-700 via-purple-600 to-purple-400",
        backGroundColorRadiantHomeVignette: "from-purple-400 via-purple-600 to-purple-700",
        backGroundColorRadiantHomeVignette2: "from-cyan-400 via-cyan-600 to-cyan-700",
        backGroundColorRadiantWorksProject: "from-purple-400 via-purple-600 to-purple-700",


      },
      black: {
        //Commun
        backGroundColorRadiantNavbar: "from-purple-700 via-purple-600 to-purple-400",
        background: "linear-gradient(342deg, rgba(129,29,213,1) 0%, rgba(119,49,177,1) 50%, rgba(220,200,61,1) 100%)",
        backgroundTheme: "bg-orange-300",
        navbarTextColor: "text-gray-100",
        borderImageMtgs: "from-purple-200 via-purple-600 to-purple-400",
        borderTop:"1px solid #7E7E89",
        backGroundColorRadiantTopHome: "from-purple-700 via-purple-600 to-purple-400",
        backGroundColorRadiantHomeVignette: "from-purple-400 via-purple-600 to-purple-700",
        backGroundColorRadiantHomeVignette2: "from-cyan-400 via-cyan-600 to-cyan-700",
        backGroundColorRadiantWorksProject: "from-purple-400 via-purple-600 to-purple-700",

      },
    },
  });
  let styleBackground;
    styleBackground = {
      "backgroundImage": state.themes[state.theme].background,
      "backgroundSize": 'cover',
      "minHeight": "100%",
      "backgroundPosition": "center center",
      "backgroundRepeat": "no-repeat",
      "min-height": "100vh"
    }
  return (
    <div style={styleBackground} className="min-h-full w-full">
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
                <Route path="/works" element={<Works />} />
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