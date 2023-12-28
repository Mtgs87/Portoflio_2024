import React, { useContext, useEffect } from "react";
import { ThemeContext } from '../index.js';
import "./css/Stats.css";
import codesWarsImg from "../assets/img/codewars.png";
import rootMeImg from "../assets/img/rootme.png";
import codesWarsLogoImg from "../assets/img/codewars_logo.svg";
import rootMeLogoImg from "../assets/img/rootme_logo.png";

function Stats(){
    const [state, setState] = useContext(ThemeContext);

    useEffect(()=> {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className='flex justify-center'>
            <div className=' w-4/5'>
                <div className="boxStats">
                    <h2 className={`text-center text-3xl font-bold md:text-5xl ${state.themes[state.theme].statsTextTopColor}`}>Applications Trainings</h2>
                </div>
                <section className="">
                <div class="mx-auto w-full max-w-7xl px-5 py-8 md:px-4 md:py-4 lg:pt-0">
                    <div class="mx-auto grid justify-items-stretch gap-4 md:grid-cols-1 lg:gap-10">
                    <a href="https://www.codewars.com/users/Mtgs87_" class="relative flex h-[300px] items-end transform transition duration-500 hover:scale-105">
                        <img src={codesWarsImg} alt="" class="inline-block h-full w-full rounded-lg object-cover" />
                        <div class="absolute bottom-5 left-5 flex flex-col justify-center rounded-lg bg-gray-700 px-8 py-4">
                        <div className="flex gap-2">
                            <p class="text-sm items-center self-center font-medium sm:text-xl text-gray-300 font-texxt font-spegiel-bold">Code Wars</p>
                            <img width={60} className="items-center rounded-full" alt="" src={codesWarsLogoImg} />
                        </div>                        
                        <p class="text-sm sm:text-base text-gray-300 font-texxt font-spegiel-bold">Algorithme training</p>
                        </div>
                    </a>
                    <a href="https://www.root-me.org/mtgs87-716292?lang=fr#5eba1f9695a48a016f4277f7747ba2de" class="relative flex h-[300px] items-end transform transition duration-500 hover:scale-105">
                        <img src={rootMeImg} alt="" class="inline-block h-full w-full rounded-lg object-cover" />
                        <div class="absolute bottom-5 left-5 flex flex-col justify-center rounded-lg bg-gray-700 px-8 py-4">
                        <div className="flex gap-2">
                            <p class="text-sm items-center self-center font-medium sm:text-xl text-gray-300 font-texxt font-spegiel-bold">Rootme</p>
                            <img alt="" width={60} className="items-center rounded-full" src={rootMeLogoImg} />
                        </div>
                        <p class="text-sm sm:text-base text-gray-300 font-texxt font-spegiel-bold">Cybersecurity training</p>
                        </div>
                    </a>
                    </div>
                </div>
                </section>
            </div>
        </div>
    )
}

export default Stats;