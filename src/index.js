import React, { useState, createContext } from "react";
import './index.css';
import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route, Outlet} from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Works from "./pages/Works";
import Stats from "./pages/Stats";

const ThemeContext = createContext();

function Layout(){

  const [state, setState] = useState({
    theme: 'black',
    themes: {
      black: {
        backGroundColorRadiantNavbar: "from-purple-700 via-purple-600 to-purple-400",
        navbarTextColor: "text-gray-200",
        navbarLogo: "white",
        borderBottomNavbar: "border-b border-solid	border-white",
        backgroundTheme: "bg-gray-200",
        background: "linear-gradient(342deg, rgba(50,50,54,1) 0%, rgba(30,34,54,1) 50%, rgba(32,32,35,1) 100%)",
        homeTextColor: "text-gray-200",
        borderImageMtgs: "from-purple-200 via-purple-600 to-purple-400",
        borderTop:"1px solid #C5C5C7",
        backGroundColorRadiantTopHome: "from-purple-700 via-purple-600 to-purple-400",
        backGroundColorRadiantHomeVignette: "from-purple-400 via-purple-600 to-purple-700",
        backGroundColorRadiantHomeVignette2: "from-cyan-400 via-cyan-600 to-cyan-700",
        backGroundColorRadiantWorksProject: "from-purple-400 via-purple-600 to-purple-700",
        homeHobbiesCards: "border-[#31343b] bg-[#31343b]",
        homeHobbiesCardsBorder: "border border-solid",
        homeHobbiesCardsShadow: "[box-shadow:rgb(255,_255,_255)_9px_9px]",
        worksTextTopColor: "text-purple-300",
        worksTextTopSubColor: "text-[#bbb7b7]",
        worksTextColor: "text-gray-200",
        statsTextTopColor: "text-purple-300",
      },
      light: {
        //Commun
        backGroundColorRadiantNavbar: "from-purple-700 via-purple-600 to-purple-400",
        background: "linear-gradient(342deg, rgba(129,29,213,1) 0%, rgba(133,130,140,1) 50%, rgba(229,228,232,1) 100%)",
        backgroundTheme: "bg-orange-300",
        navbarTextColor: "text-gray-700",
        navbarLogo: "black",
        borderBottomNavbar: "border-b border-solid	border-gray-700",
        borderImageMtgs: "from-purple-200 via-purple-600 to-purple-400",
        borderTop:"1px solid #4A4A4B",
        homeTextColor: "text-gray-600",
        backGroundColorRadiantTopHome: "from-purple-500 via-purple-300 to-purple-100",
        backGroundColorRadiantHomeVignette: "from-purple-200 via-purple-400 to-purple-600",
        backGroundColorRadiantHomeVignette2: "from-cyan-100 via-cyan-300 to-cyan-500",
        backGroundColorRadiantWorksProject: "from-purple-100 via-purple-300 to-purple-500",
        homeHobbiesCards: "border-[#c0d1ff] bg-[#c0d1ff]",
        homeHobbiesCardsBorder: "border border-solid border-gray-300",
        homeHobbiesCardsShadow: "[box-shadow:rgb(255,_255,_255)_9px_9px]",
        worksTextTopColor: "text-purple-600",
        worksTextTopSubColor: "text-[#515050]",
        worksTextColor: "text-gray-600",
        statsTextTopColor: "text-purple-600",
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
      "minHeight": "100vh"
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

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
  <React.StrictMode>
    <div className="Container mx-auto">
      <div className="place-items-center">
        <BrowserRouter className=''>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/works" element={<Works />} />
                <Route path="/stats" element={<Stats />} />
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