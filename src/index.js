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
        background: "linear-gradient(342deg, rgba(57,36,103,1) 0%, rgba(57,36,103,1) 50%, rgba(57,36,103,1) 100%)",
        backgroundFooter: "linear-gradient(342deg, rgba(255,209,227,1) 0%, rgba(255,209,227,1) 50%, rgba(255,209,227,1) 100%)",
        homeTextColor: "text-gray-200",
        borderImageMtgs: "from-purple-200 via-purple-600 to-purple-400",
        borderTop:"1px solid #C5C5C7",
        backGroundColorRadiantTopHome: "from-[#5D3587] via-[#A367B1] to-[#5D3587]",
        backGroundColorRadiantHomeVignette1: "from-[#A367B1] via-[#A367B1] to-[#A367B1]",
        backGroundColorRadiantHomeVignette2: "from-[#A367B1] via-[#A367B1] to-[#A367B1]",
        backGroundColorRadiantHomeVignette3: "from-[#A367B1] via-[#A367B1] to-[#A367B1]",
        backGroundColorRadiantHomeVignette4: "from-[#A367B1] via-[#A367B1] to-[#A367B1]",
        backGroundColorRadiantHomeVignetteUnder1: "from-[#A367B1] via-[#A367B1] to-[#A367B1]",
        backGroundColorRadiantHomeVignetteUnder2: "from-[#A367B1] via-[#A367B1] to-[#A367B1]",
        shadow_home:"shadow-[#FFD1E3]",
        backGroundColorRadiantWorksProject: "from-purple-400 via-purple-600 to-purple-700",
        homeHobbiesCards: "border-[#31343b] bg-[#31343b]",
        homeHobbiesCardsBorder: "border border-solid",
        homeHobbiesCardsShadow: "[box-shadow:rgb(255,_255,_255)_9px_9px]",
        worksTextTopColor: "text-purple-300",
        worksTextTopSubColor: "text-[#bbb7b7]",
        worksTextColor: "text-gray-200",
        statsTextTopColor: "text-purple-300",
        background_hobbies_img:"bg-white",
        background_button_home:"bg-[#A367B1]",
        background_button_home_hover:"hover:bg-[#FFD1E3]",
        background_footer_mail:"bg-[#FFD1E3]",
        title_works:"text-[#A367B1]",
        title_stats:"text-[#A367B1]",        
        footerTextColor: "text-gray-200",
        footerTextColorMtgs:"text-gray-200",
        background_button_footer_hover:"hover:text-[#FFD1E3]",
        background_label_footer_mail:"bg-[#A367B1]",
        background_label_button_mail:"bg-[#A367B1]",
      },
      light: {
        //Commun
        backGroundColorRadiantNavbar: "from-cyan-300 via-cyan-500 to-cyan-300",
        background: "linear-gradient(342deg, rgba(76,185,231,1) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 100%)",
        backgroundTheme: "bg-orange-300",
        navbarTextColor: "text-gray-700",
        navbarLogo: "black",
        borderBottomNavbar: "border-b border-solid	border-gray-700",
        borderImageMtgs: "from-purple-200 via-purple-600 to-purple-400",
        borderTop:"1px solid #4A4A4B",
        homeTextColor: "text-gray-600",
        backGroundColorRadiantTopHome: "from-cyan-500 via-[#4CB9E7] to-cyan-500",
        backGroundColorRadiantHomeVignette1: "from-[#4CB9E7] via-[#4CB9E7] to-[#4CB9E7]",
        backGroundColorRadiantHomeVignette2: "from-[#4CB9E7] via-[#4CB9E7] to-[#4CB9E7]",
        backGroundColorRadiantHomeVignette3: "from-[#4CB9E7] via-[#4CB9E7] to-[#4CB9E7]",
        backGroundColorRadiantHomeVignette4: "from-[#4CB9E7] via-[#4CB9E7] to-[#4CB9E7]",
        backGroundColorRadiantHomeVignetteUnder1: "from-[#4CB9E7] via-[#4CB9E7] to-[#4CB9E7]",
        backGroundColorRadiantHomeVignetteUnder2: "from-[#4CB9E7] via-[#4CB9E7] to-[#4CB9E7]",
        shadow_home:"shadow-[#4CB9E7]",
        backGroundColorRadiantWorksProject: "from-purple-100 via-purple-300 to-purple-500",
        homeHobbiesCards: "border-[#c0d1ff] bg-[#c0d1ff]",
        homeHobbiesCardsBorder: "border border-solid border-gray-300",
        homeHobbiesCardsShadow: "[box-shadow:rgb(255,_255,_255)_9px_9px]",
        worksTextTopColor: "text-[#4CB9E7]",
        worksTextTopSubColor: "text-[#515050]",
        worksTextColor: "text-gray-600",
        statsTextTopColor: "text-[#4CB9E7]",
        background_hobbies_img:"bg-[#4CB9E7]",
        background_button_home:"bg-[#4CB9E7]",
        background_button_home_hover:"hover:bg-cyan-500",
        background_footer_mail:"bg-[#FFECD6]",
        footerTextColor:"text-white-600",
        footerTextColorMtgs:"text-gray-800",
        background_button_footer_hover:"hover:text-cyan-500",
        background_label_footer_mail:"bg-[#4CB9E7]",
        background_label_button_mail:"bg-[#4CB9E7]",
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
