import React, { useContext } from "react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { ThemeContext } from '../index.js';
import {Link} from "react-router-dom";
import githubImg from "../assets/img/github_icon.png";
import "./Navbar.css";

function Navbar() {
    const [state, setState] = useContext(ThemeContext);

    function toggleTheme(){
        setState(state => ({
            ...state,
            theme: state.theme === 'black' ? 'light' : 'black'
          }))
    }
    return (
        <nav className={`bg-gradient-to-r ${state.themes[state.theme].backGroundColorRadiantNavbar} ${state.themes[state.theme].navbarTextColor} font-spegiel-bold`}>
            <div className={`ml-aut o grid grid-rows-1 grid-cols-5`}>
                <div className={`${state.themes[state.theme].navbarTextColor} col-start-1 col-end-3`}>
                    <Link style={{ textDecoration: 'none' }} className={` ${state.themes[state.theme].navbarTextColor} text-2xl  font-bold`} to="/"> &lt; Mtgs87 &#x2F;&gt; </Link>
                    <Link style={{ textDecoration: 'none' }} className={`${state.themes[state.theme].navbarTextColor} p-2 text-xl`} to="/works"> Works </Link>
                    <Link style={{ textDecoration: 'none' }} className={`${state.themes[state.theme].navbarTextColor} p-2 text-xl`} to="/"> Stats </Link>
                    <Link style={{ textDecoration: 'none' }} className={`${state.themes[state.theme].navbarTextColor} p-2 text-xl`} href="https://github.com/MaxenceGlt"> Github <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"></svg> </Link>
                </div>
                <div className="col-start-5 col-end-5 p-2">
                    <button
                    className={`h-10 w-10 bg-peach opacity-1 rounded-lg ml-aut o ${state.themes[state.theme].backgroundTheme}`}
                    onClick={()=>toggleTheme()}
                    >
                        {state.theme === "light" ? (
                            <div>
                                <MoonIcon color={"black"} boxSize={16} />
                            </div>
                            )
                            
                        :(
                            <div>
                                <SunIcon color={"white"} boxSize={16} />
                            </div>
                        )}
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;