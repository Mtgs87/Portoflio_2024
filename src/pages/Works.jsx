import React, { useContext, useEffect } from "react";
import { CDBBadge, CDBContainer } from 'cdbreact';
import { ThemeContext } from '../index.js';
import quizzlolImg from "../assets/img/quizzlol.png";
import healthyImg from "../assets/img/healthy_app.png";
import './css/Works.css'
import ProgressBar from "../components/ProgressBar.jsx";

function Works(){
    
    const [state, setState] = useContext(ThemeContext);

    useEffect(()=> {
        window.scrollTo(0, 0);
    }, [])

    //On gère le style des balise <hr>
    const hrColor = {
        "display": "block", "height": "1px",
        "border": 0,
        "borderTop": state.themes[state.theme].borderTop,
        "margin": "1em 0",
    }

    return(
        <div className='flex justify-center'>
        <div className='w-4/5'>
            <section>
            <div class="mx-auto w-full max-w-7xl px-5 py-6 md:px-10 md:py-16 lg:py-2">
                <div className="box">
                    <h2 class={`text-center text-3xl font-bold md:text-5xl ${state.themes[state.theme].worksTextTopColor}`}>Portfolio</h2>
                    <p class={`sm:text-base text-center text-sm ${state.themes[state.theme].worksTextTopSubColor} font-texxt`}>Project i did in my personnal time</p>
                </div>
               <div class="mx-auto grid justify-items-stretch gap-4 lg:grid-cols-2 lg:gap-10">
                <a href="https://quizzlol.fr" class="relative flex h-[300px] items-end transform transition duration-500 hover:scale-105">
                    <img src={quizzlolImg} alt="" class="inline-block h-full w-full rounded-lg object-cover" />
                    <div class={`absolute bottom-5 left-5 w-4/5 md:w-3/5 flex flex-col justify-center rounded-lg bg-gradient-to-r ${state.themes[state.theme].backGroundColorRadiantNavbar} ${state.themes[state.theme].worksTextColor} background-animate px-8 py-4 hover:opacity-70`}>
                        <p class="text-sm font-medium sm:text-xl  font-texxt font-spegiel-bold">QuizzLOL</p>
                        <p class="text-sm sm:text-base ">React / SpringBoot</p>
                        <CDBContainer className="flex">
                            <CDBBadge className="justify-center text-gray-200 font-spegiel-bold w-full" color="success" borderType="pill">
                                <span className="text-xxs">Link enable</span>
                            </CDBBadge>
                        </CDBContainer>
                    </div>
                </a>
                <a href="#" class="relative flex h-[300px] items-end transform transition duration-500 hover:scale-105">
                    <img src={healthyImg} alt="" class="inline-block h-full w-full rounded-lg object-cover" />
                    <div class={`absolute bottom-5 left-5 w-4/5 md:w-3/5 flex flex-col justify-center rounded-lg bg-gradient-to-l ${state.themes[state.theme].backGroundColorRadiantNavbar} ${state.themes[state.theme].worksTextColor} background-animate px-8 py-4 hover:opacity-70`}>
                        <p class="text-sm font-medium sm:text-xl font-texxt font-spegiel-bold">Healthy</p>
                        <p class="text-sm sm:text-base">Angular / Flask</p>
                        <CDBContainer className="flex ">
                            <CDBBadge className="justify-center text-gray-200 font-spegiel-bold w-full" color="danger" borderType="pill">
                            <span className="text-xxs">Link disable</span>
                            </CDBBadge>
                        </CDBContainer>
                    </div>
                </a>
                
                </div>
            </div>
            </section>
            <div className='px-16 py-2'>
                <hr className='mb-2' style={hrColor}></hr>
            </div> 
            <p className={`text-3xl ${state.themes[state.theme].worksTextColor} underline font-card-title`}>Stack coding</p>
            <div className="flex flex-col gap-4 lg:grid lg:grid-cols-12">
                <CDBContainer className="lg:col-start-1 lg:col-end-6">
                    <ProgressBar color="primary" language="HTML 5" value={90}/>
                    <br></br>
                    <br></br>
                    <ProgressBar color="secondary" language="Tailwind" value={75}/>
                    <br></br>
                    <br></br>
                    <ProgressBar color="primary" language="Javascript" value={70}/>
                    <br></br>
                    <br></br>
                    <ProgressBar color="secondary" language="React" value={70}/>
                    <br></br>
                    <br></br>
                    <ProgressBar color="primary" language="Angular" value={70}/>
                    </CDBContainer>
                    <div className="separate--bar--div col-start-6 col-end-7 place-self-center h-full border-l border-gray-500 ">

                    </div>
                    <CDBContainer className="lg:col-start-7 lg:col-end-12 progress--bar--div2">
                        <ProgressBar color="primary" language="Java" value={75}/>
                        <br></br>
                        <br></br>
                        <ProgressBar color="secondary" language="Linux" value={50}/>
                        <br></br>
                        <br></br>
                        <ProgressBar color="primary" language="PostgreSQL" value={70}/>
                        <br></br>
                        <br></br>
                        <ProgressBar color="secondary" language="Solidity" value={15}/>
                        <br></br>
                        <br></br>
                        <ProgressBar color="primary" language="Python" value={60}/>
                    </CDBContainer>
                    <CDBContainer className="lg:col-start-7 lg:col-end-12 progress--bar--div">
                        <ProgressBar color="secondary" language="Java" value={75}/>
                        <br></br>
                        <br></br>
                        <ProgressBar color="primary" language="Linux" value={50}/>
                        <br></br>
                        <br></br>
                        <ProgressBar color="secondary" language="PostgreSQL" value={70}/>
                        <br></br>
                        <br></br>
                        <ProgressBar color="primary" language="Solidity" value={15}/>
                        <br></br>
                        <br></br>
                        <ProgressBar color="secondary" language="Python" value={60}/>
                    </CDBContainer>
                </div>
        </div>
        </div>
    )
}
export default Works;