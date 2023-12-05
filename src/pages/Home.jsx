import React, { useContext } from "react";
import { ThemeContext } from '../index.js';
import mtgs87 from "../assets/img/mtgs87.jpg";
import ethImg from "../assets/img/eth_logo.png";
import airplaneImg from "../assets/img/airplane.png";
import sportImg from "../assets/img/sport_logo.png";
import "./css/Home.css";
import "./css/Stats.css";

function Home() {
    const [state, setState] = useContext(ThemeContext);

     //On gère le style des balise <hr>
     const hrColor = {
        "display": "block", "height": "1px",
        "border": 0,
        "borderTop": state.themes[state.theme].borderTop,
        "margin": "1em 0",
    }

    return (
        <div className="flex justify-center">
        <div className=" xs:w-11/12 md:w-4/5">
            <div className="grid grid-rows-1 pt-4 md:pt-20">
                <div className="grid grid-cols-1  lg:grid-cols-2 w-full">
                    <div className="self-center">
                        <div className={`bg-gradient-to-r ${state.themes[state.theme].backGroundColorRadiantTopHome} background-animate  rounded-xl`}><p className={`${state.themes[state.theme].homeTextColor} flex justify-center lg:text-xl xl:text-2xl text-xl font-spegiel-bold`}>Welcome on my personal website ! 🙌</p></div>
                        <div className={`bg-gradient-to-r ${state.themes[state.theme].backGroundColorRadiantTopHome} background-animate  rounded-xl`}><p className={`${state.themes[state.theme].homeTextColor} flex justify-center lg:text-3xl xl:text-4xl text-2xl font-spegiel-bold`}>I'm IT Engineer Full-Stack</p></div>
                        <div className={`bg-gradient-to-r ${state.themes[state.theme].backGroundColorRadiantTopHome} background-animate  rounded-xl`}><p className={`${state.themes[state.theme].homeTextColor} flex justify-center lg:text-xl xl:text-2xl text-xl font-spegiel-bold italic`}>Passionné par l'envie d'apprendre</p></div>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <div className="w-10/12 flex justify-center">
                        <img
                            alt="" width={170}
                            src={mtgs87}
                            className="rounded-full place-self-center content-center justify-self-center box"
                        />
                        </div>
                    </div>
                </div>
            </div>
            <div className='px-16 py-6'>
                <hr className='mb-2' style={hrColor}></hr>
            </div> 
            <div>
                <p className="text-3xl text-gray-300 underline font-card-title">Bio - School</p>
                <div className="grid grid-cols-10 w-full gap-4">
                    <div className="col-span-1 grid grid-rows-4 items-center font-extrabold gap-4">
                        <div className={`bg-gradient-to-r ${state.themes[state.theme].backGroundColorRadiantHomeVignette} background-animate rounded-lg w-full shadow-md shadow-purple-500 justify-center flex`}><span className="text-xl text-gray-300 transform transition duration-500 hover:scale-110">2000</span></div>
                        <div className={`bg-gradient-to-l ${state.themes[state.theme].backGroundColorRadiantHomeVignette} background-animate rounded-lg w-full shadow-md shadow-purple-500 justify-center flex`}><span className="text-xl text-gray-300 transform transition duration-500 hover:scale-110">2020</span></div>
                        <div className={`bg-gradient-to-r ${state.themes[state.theme].backGroundColorRadiantHomeVignette} background-animate rounded-lg w-full shadow-md shadow-purple-500 justify-center flex`}><span className="text-xl text-gray-300 transform transition duration-500 hover:scale-110">2021</span></div>
                        <div className={`bg-gradient-to-l ${state.themes[state.theme].backGroundColorRadiantHomeVignette} background-animate rounded-lg w-full shadow-md shadow-purple-500 justify-center flex`}><span className="text-xl text-gray-300 transform transition duration-500 hover:scale-110">2023</span></div>


                    </div>
                    <div className="col-span-9 grid grid-rows-4 items-center gap-4">
                        <span className="text-xl md:text-2xl text-gray-200">Born in Lyon, France 🇫🇷</span>
                        <span className="text-xl md:text-2xl text-gray-200">Completed <span className="font-extrabold">IUT</span> Software at Lyon 1 University</span>
                        <span className="text-xl md:text-2xl text-gray-200">Completed IT Design and Building <span className="font-extrabold">Licence</span></span>
                        <span className="text-xl md:text-2xl text-gray-200">Completed <span className="font-extrabold">Master's</span> degree in IT Software <span className="italic">'Management project'</span> 🎓</span>
                    </div>
                </div>
            </div>
            <div className='px-16 py-6'>
                <hr className='mb-2' style={hrColor}></hr>
            </div> 
            <div>
                <p className="text-3xl text-gray-300 underline font-card-title">Bio - Work</p>
                <div className="grid grid-cols-10 w-full gap-4">
                    <div className="col-span-3 grid grid-rows-2 items-center font-extrabold gap-4">
                        <div className={`bg-gradient-to-r ${state.themes[state.theme].backGroundColorRadiantHomeVignette2} background-animate rounded-lg w-full shadow-md shadow-cyan-500 justify-center flex`}><span className="text-xs md:text-lg xl:text-xl text-gray-300 transform transition duration-500 hover:scale-110">April 2020 - June 2020</span></div>
                        <div className={`bg-gradient-to-l ${state.themes[state.theme].backGroundColorRadiantHomeVignette2} background-animate rounded-lg w-full shadow-md shadow-cyan-500 justify-center flex`}><span className="text-xs md:text-lg xl:text-xl text-gray-300 transform transition duration-500 hover:scale-110">October 2020 - October 2023</span></div>
                    </div>
                    <div className="col-span-7 grid grid-rows-2 items-center gap-4">
                        <span className="text-base md:text-lg xl:text-xl text-gray-200"> <span className="font-extrabold">GFI - </span>IT Developper full stack - Website. Stack : <span className="italic">(Java SpringBoot, Angular)</span></span>
                        <span className="text-base md:text-lg xl:text-xl text-gray-200"> <span className="font-extrabold">Sopra Steria - </span>IT developer full stack - Stream application and Web application. Stack : <span className="italic">(Java, ServiceMix and Camel)</span></span>
                    </div>
                </div>
            </div>
            <div className='px-16 py-6'>
                <hr className='mb-2' style={hrColor}></hr>
            </div>
            <div>
                <p className="text-3xl text-gray-300 underline font-card-title">Hobbies ♥︎</p>
                <div class="grid grid-cols-1 gap-4 sm:gap-4 lg:grid-cols-3 lg:gap-12">
                    <div class="relative mb-8 w-8/12 lg:w-full lg:h-full place-self-center flex flex-col rounded-2xl border border-solid border-white p-8 [box-shadow:rgb(255,_255,_255)_9px_9px] lg:mb-4 transform transition duration-500 hover:scale-105">
                        <div class="absolute -top-8 bottom-auto left-auto right-4 flex h-16 w-16 flex-col items-center justify-center rounded-full border border-solid border-[#9b9b9b] bg-white [box-shadow:rgb(0,_0,_0)_0px_5px] lg:right-8">
                        <img src={sportImg} alt="" class="relative z-10 inline-block h-8" />
                        <div class="absolute z-0 h-8 w-8 rounded-full border border-[#c0d1ff] bg-[#c0d1ff]"></div>
                        </div>
                        <p class="mb-4 text-3xl lg:text-xl xl:text-2xl font-semibold text-gray-200 font-texxt">Sport</p>
                        <p className="text-xl lg:text-sm xl:text-xl  text-gray-200 font-spegiel-bold">I'm football fan and i love play and watch it ! ⚽️</p>
                    </div>
                    <div class="relative mb-8 w-8/12 lg:w-full lg:h-full place-self-center flex flex-col rounded-2xl border border-solid border-white p-8 [box-shadow:rgb(255,_255,_255)_9px_9px] lg:mb-4 transform transition duration-500 hover:scale-105">
                        <div class="absolute -top-8 bottom-auto left-auto right-4 flex h-16 w-16 flex-col items-center justify-center rounded-full border border-solid border-[#9b9b9b] bg-white [box-shadow:rgb(0,_0,_0)_0px_5px] lg:right-8">
                        <img src={airplaneImg} alt="" class="relative z-10 inline-block h-8" />
                        <div class="absolute z-0 h-8 w-8 rounded-full border border-[#c0d1ff] bg-[#c0d1ff]"></div>
                        </div>
                        <p class="mb-4 text-3xl lg:text-xl xl:text-2xlfont-semibold text-gray-200 font-texxt">Travels</p>
                        <p className="text-xl lg:text-sm xl:text-xl text-gray-200 font-spegiel-bold">I love to travel and discover new cultures. I have been able to travel to Europe, North America, Africa, and Asia ! 🌍</p>
                    </div>
                    <div class="relative mb-8 w-8/12 lg:w-full lg:h-full place-self-center flex flex-col rounded-2xl border border-solid border-white p-8 [box-shadow:rgb(255,_255,_255)_9px_9px] lg:mb-4 transform transition duration-500 hover:scale-105">
                        <div class="absolute -top-8 bottom-auto left-auto right-4 flex h-16 w-16 flex-col items-center justify-center rounded-full border border-solid border-[#9b9b9b] bg-white [box-shadow:rgb(0,_0,_0)_0px_5px] lg:right-8">
                        <img src={ethImg} alt="" class="relative z-10 inline-block h-8" />
                        <div class="absolute z-0 h-8 w-8 rounded-full border border-[#c0d1ff] bg-[#c0d1ff]"></div>
                        </div>
                        <p class="mb-4 text-3xl lg:text-xl xl:text-2xl font-semibold text-gray-200 font-texxt">Cryptocurrency</p>
                        <p className="text-xl lg:text-sm xl:text-xl text-gray-200 font-spegiel-bold">I love learning about cryptocurrencies since 2018. There is so much to discover in this exciting field ! 🧐</p>
                    </div>
                    </div>
            </div>
            
            </div>
        </div>
    )
}

export default Home;