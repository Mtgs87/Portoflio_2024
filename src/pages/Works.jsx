import React, { useContext } from "react";
import { CDBProgress, CDBBadge, CDBContainer } from 'cdbreact';
import { ThemeContext } from '../index.js';
import quizzlolImg from "../assets/img/quizzlol.png";
import healthyImg from "../assets/img/healthy_app.png";

function Works(){
    
    const [state, setState] = useContext(ThemeContext);

    return(
        <div className='flex justify-center'>
        <div className=' w-4/5'>
            <section>
            <div class="mx-auto w-full max-w-7xl px-5 py-6 md:px-10 md:py-16 lg:py-22">
                <h2 class="text-center text-3xl font-bold md:text-5xl text-purple-300">Portfolio</h2>
                <p class="msm:text-base mb-4 text-center text-sm text-[#bbb7b7] md:mb-12 lg:mb-16">Project i did in my personnal time</p>
                <div class="mx-auto grid justify-items-stretch gap-4 md:grid-cols-2 lg:gap-10">
                <a href="https://quizzlol.fr" class="relative flex h-[300px] items-end">
                    <img src={quizzlolImg} alt="" class="inline-block h-full w-full rounded-lg object-cover" />
                    <div class={`absolute bottom-5 left-5 w-3/5 flex flex-col justify-center rounded-lg bg-gradient-to-r ${state.themes[state.theme].backGroundColorRadiantNavbar} background-animate px-8 py-4`}>
                        <p class="text-sm font-medium sm:text-xl text-gray-300 font-texxt font-spegiel-bold">QuizzLOL</p>
                        <p class="text-sm sm:text-base text-gray-300">React / SpringBoot</p>
                        <CDBContainer className="flex">
                            <CDBBadge className="justify-center text-gray-200 font-spegiel-bold w-full transform transition duration-500 hover:scale-105" color="success" borderType="pill">
                                Link enable
                            </CDBBadge>
                        </CDBContainer>
                    </div>
                </a>
                <a href="#" class="relative flex h-[300px] items-end">
                    <img src={healthyImg} alt="" class="inline-block h-full w-full rounded-lg object-cover" />
                    <div class={`absolute bottom-5 left-5 w-3/5 flex flex-col justify-center rounded-lg bg-gradient-to-l ${state.themes[state.theme].backGroundColorRadiantNavbar} background-animate px-8 py-4`}>
                        <p class="text-sm font-medium sm:text-xl text-gray-300 font-texxt font-spegiel-bold">Healthy</p>
                        <p class="text-sm sm:text-base text-gray-300">Angular / Flask</p>
                        <CDBContainer className="flex ">
                            <CDBBadge className="justify-center text-gray-200 font-spegiel-bold w-full transform transition duration-500 hover:scale-105" color="danger" borderType="pill">
                                Link disable
                            </CDBBadge>
                        </CDBContainer>
                    </div>
                </a>
                
                </div>
            </div>
            </section>
            <p className="text-3xl text-gray-300 underline font-card-title">Stack coding</p>
            <div className="grid grid-cols-12">
                <CDBContainer className="col-start-1 col-end-6">
                    <div className="flex flex-row  items-center">
                        <CDBBadge className="text-gray-200 place-content-center font-spegiel-bold w-4/12 transform transition duration-500 hover:scale-105" color="primary" borderType="pill">
                        HTML 5
                        </CDBBadge>
                        <CDBProgress
                            className="ml-2"
                            value={90}
                            colors="primary"
                        />
                    </div>
                    <br></br>
                    <br></br>
                    <div className="flex flex-row items-center">
                        <CDBBadge className="text-gray-200 place-content-center font-spegiel-bold w-4/12 transform transition duration-500 hover:scale-105" color="secondary" borderType="pill">
                        CSS
                        </CDBBadge>
                        <CDBProgress
                            className="ml-2"
                            value={90}
                            colors="secondary"
                        />
                    </div>
                    <br></br>
                    <br></br>
                    <div className="flex flex-row items-center">
                        <CDBBadge className="text-gray-200 place-content-center font-spegiel-bold w-4/12 transform transition duration-500 hover:scale-105" color="primary" borderType="pill">
                        Javascript
                        </CDBBadge>
                        <CDBProgress
                            className="ml-2"
                            value={90}
                            colors="primary"
                        />
                    </div>
                    <br></br>
                    <br></br>
                    <div className="flex flex-row items-center">
                        <CDBBadge className="text-gray-200 place-content-center font-spegiel-bold w-4/12 transform transition duration-500 hover:scale-105" color="secondary" borderType="pill">
                        React
                        </CDBBadge>
                        <CDBProgress
                            className="ml-2"
                            value={90}
                            colors="secondary"
                        />
                    </div>
                    <br></br>
                    <br></br>
                    <div className="flex flex-row items-center">
                        <CDBBadge className="text-gray-200 place-content-center font-spegiel-bold w-4/12 transform transition duration-500 hover:scale-105" color="primary" borderType="pill">
                        Angular
                        </CDBBadge>
                        <CDBProgress
                            className="ml-2"
                            value={90}
                            colors="primary"
                        />
                    </div>
                    </CDBContainer>
                    <div className="col-start-6 col-end-7 place-self-center h-full border-l border-gray-500 ">

                    </div>
                    <CDBContainer className="col-start-7 col-end-12">
                            <div className="flex flex-row  items-center">
                                <CDBBadge className="text-gray-200 place-content-center font-spegiel-bold w-4/12 transform transition duration-500 hover:scale-105" color="primary" borderType="pill">
                                Java
                                </CDBBadge>
                                <CDBProgress
                                    className="ml-2"
                                    value={90}
                                    colors="primary"
                                />
                            </div>
                            <br></br>
                            <br></br>
                            <div className="flex flex-row items-center">
                                <CDBBadge className="text-gray-200 place-content-center font-spegiel-bold w-4/12 transform transition duration-500 hover:scale-105" color="secondary" borderType="pill">
                                Linux
                                </CDBBadge>
                                <CDBProgress
                                    className="ml-2"
                                    value={90}
                                    colors="secondary"
                                />
                            </div>
                            <br></br>
                            <br></br>
                            <div className="flex flex-row items-center">
                                <CDBBadge className="text-gray-200 place-content-center font-spegiel-bold w-4/12 transform transition duration-500 hover:scale-105" color="primary" borderType="pill">
                                PostgreSQL
                                </CDBBadge>
                                <CDBProgress
                                    className="ml-2"
                                    value={90}
                                    colors="primary"
                                />
                            </div>
                            <br></br>
                            <br></br>
                            <div className="flex flex-row items-center">
                                <CDBBadge className="text-gray-200 shadow-[0_30px_30px_30px_rgba(97,76,161,0.3)] place-content-center font-spegiel-bold w-4/12 transform transition duration-500 hover:scale-105" color="secondary" borderType="pill">
                                Solidity
                                </CDBBadge>
                                <CDBProgress
                                    className="ml-2 shadow-[0_2px_2px_2px_rgba(97,76,161,0.3)]"
                                    value={90}
                                    colors="secondary"
                                />
                            </div>
                            <br></br>
                            <br></br>
                            <div className="flex flex-row items-center">
                                <CDBBadge className="text-gray-200 place-content-center font-spegiel-bold w-4/12 transform transition duration-500 hover:scale-105" color="primary" borderType="pill">
                                Python
                                </CDBBadge>
                                <CDBProgress
                                    className="ml-2 shadow-[0_2px_2px_2px_rgba(41,96,198,0.3)]"
                                    value={90}
                                    colors="primary"
                                />
                            </div>
                    </CDBContainer>
                </div>
        </div>
        </div>
    )
}
export default Works;