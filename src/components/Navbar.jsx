import React, { useState, useContext } from "react";
import { ThemeContext } from '../index.js'
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { GoGitBranch, GoCodeReview } from "react-icons/go";
import {Link} from "react-router-dom";

import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  OpenLinksButton,
  NavLink,
  NavLinkBlack,
  NavbarLinkExtended,
  NavbarToggleButton
} from "./NavbarStyle";
import './Navbar.css';

function Navbar() {
  const [extendNavbar, setExtendNavbar] = useState(false);
  const [state, setState] = useContext(ThemeContext);

  return (
    <NavbarContainer className={`${state.themes[state.theme].borderBottomNavbar} backdrop-blur sticky`} extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
      <LeftContainer>
          <Link to="/" className={`logo__link font-spegiel-bold-nav font-card-title flex ${state.themes[state.theme].navbarTextColor}`}>Mtgs87<GoCodeReview className="mb-2" /></Link>
        </LeftContainer>
        <RightContainer>
        <NavbarLinkContainer>
        {state.theme === "black" ?
            <div className="flex">
                <NavLinkBlack to="/works"  className={`navbar__link font-texxt ${state.themes[state.theme].navbarTextColor}`}>Works</NavLinkBlack>
                <NavLinkBlack to="/stats" className={`navbar__link font-texxt ${state.themes[state.theme].navbarTextColor}`}>Stats</NavLinkBlack>
                <NavLinkBlack to="/other"  className={`navbar__link font-texxt flex ${state.themes[state.theme].navbarTextColor}`}>Github<GoGitBranch /></NavLinkBlack>
            </div>  
          :
            <div className="flex">
              <NavLink to="/works"  className={`navbar__link font-texxt ${state.themes[state.theme].navbarTextColor}`}>Works</NavLink>
              <NavLink to="/stats" className={`navbar__link font-texxt ${state.themes[state.theme].navbarTextColor}`}>Stats</NavLink>
              <NavLink to="/other"  className={`navbar__link font-texxt flex ${state.themes[state.theme].navbarTextColor}`}>Github<GoGitBranch /></NavLink>
            </div>
      }
            <NavbarToggleButton className="justify-self-start">
                <label className="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100">
                <MoonIcon color={`${state.themes[state.theme].navbarLogo}`} boxSize={16} />
                <span className="relative">
                <input id="Toggle1" type="checkbox" className="hidden peer"  onClick={() => setState(state => ({
                    ...state,
                    theme: state.theme === 'black' ? 'light' : 'black'
                }))}/>
                <div className="w-10 h-6 rounded-full shadow-inner bg-purple-400 peer-checked:bg-yellow-400"></div>
                <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-gray-800"></div>
                </span>
                <SunIcon color={`${state.themes[state.theme].navbarLogo}`} boxSize={16} />
                </label>
            </NavbarToggleButton>
            <OpenLinksButton
                onClick={() => {
                    setExtendNavbar((curr) => !curr);
                }}
                >
                {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
              </OpenLinksButton>
              
          </NavbarLinkContainer>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended style={{textDecoration: 'none'}} onClick={() => {setExtendNavbar((curr) => !curr)}} to="/"  className={`navbar__link ${state.themes[state.theme].navbarTextColor}`}> Home</NavbarLinkExtended>
          <NavbarLinkExtended style={{textDecoration: 'none'}} onClick={() => {setExtendNavbar((curr) => !curr)}} to="/works"  className={`navbar__link ${state.themes[state.theme].navbarTextColor}`}> Works</NavbarLinkExtended>
          <NavbarLinkExtended style={{textDecoration: 'none'}} onClick={() => {setExtendNavbar((curr) => !curr)}} to="/stats"  className={`navbar__link ${state.themes[state.theme].navbarTextColor}`} >Stats</NavbarLinkExtended>
          <NavbarLinkExtended style={{textDecoration: 'none'}} onClick={() => {setExtendNavbar((curr) => !curr)}} to="/" className={`navbar__link ${state.themes[state.theme].navbarTextColor}`}> Github</NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
     
    </NavbarContainer>
  );
}

export default Navbar;