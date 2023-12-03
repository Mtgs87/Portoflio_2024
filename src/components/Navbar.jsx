import React, { useContext, useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { ThemeContext } from '../index.js'

function Navbar() {
    const [state, setState] = useContext(ThemeContext);

    function toggleTheme(){
        setState(state => ({
            ...state,
            theme: state.theme === 'black' ? 'light' : 'black'
          }))
    }
    return (
        <div className={`${state.themes[state.theme].backGroundColorRadiantRecap}`}>
            <div className={`ml-aut o`}>
                <button
                className={`h-10 w-10 bg-peach opacity-1 rounded-lg ml-aut o ${state.themes[state.theme].bg}`}
                onClick={()=>toggleTheme()}
                >
                    {state.theme === "light" ? (
                        <div>
                            <p>test</p>
                        <SunIcon color={"white"} boxSize={16} />
                        </div>
                        )
                        
                    :(
                        <div>
                        <p>tetatast</p>
                        <MoonIcon color={"black"} boxSize={16} />
                        </div>
                    )}
                </button>
                <button
                className=" h-10 w-10 bg-myPurple opacity-1 rounded-lg"
                onClick={() => setState(state => ({
                    ...state,
                    theme: state.theme === 'light' ? 'black' : 'light'
                  }))}
                >
                </button>
            </div>
        </div>
    )
}

export default Navbar;