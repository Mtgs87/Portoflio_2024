import React, { useState, useContext } from "react";
import { ThemeContext } from '../index.js'
import { Link } from "react-router-dom";
import { GoCodeReview } from "react-icons/go";
import emailjs from '@emailjs/browser';


function Footer() {

  const [state, setState] = useContext(ThemeContext);
  
  const sendEmail = (e) =>{
    e.preventDefault();
    emailjs.sendForm('service_k2mwtsl', 'template_6hsa59u', e.target, '-_BqGox_rUzdC7HyI');
  }

    return (
<div>            
<footer class={`block`}>
  <div class="py-16 md:py-16 lg:py-16 mx-auto w-full max-w-7xl px-5 md:px-10">
    <div class="flex-col flex items-center">
      <Link to="/" style={{textDecoration:'none'}} className={`${state.themes[state.theme].footerTextColor} mb-8 max-w-full font-spegiel-bold-nav font-card-title flex`}>Mtgs87<GoCodeReview className="mb-2" /></Link>
     
      <div class={`text-center font-semibold max-[991px]: max-[991px]:py-1 ${state.themes[state.theme].footerTextColor}`}>
        <span class={`inline-block px-6 py-2 font-normal  transition ${state.themes[state.theme].background_button_footer_hover}`}>Full-Stack</span>
        <span class={`inline-block px-6 py-2 font-normal  transition ${state.themes[state.theme].background_button_footer_hover}`}>Improve</span>
        <span class={`inline-block px-6 py-2 font-normal  transition ${state.themes[state.theme].background_button_footer_hover}`}>Works</span>
        <span class={`inline-block px-6 py-2 font-normal  transition ${state.themes[state.theme].background_button_footer_hover}`}>Communication</span>
      </div>
      <div className={`${state.themes[state.theme].background_footer_mail} border-purple-400 rounded-xl w-full md:w-2/4 mt-4`}>
        <form onSubmit={sendEmail}>
          <div className=" p-4 w-full md:flex flex-col justify-center items-center">
            <label className={`mr-2 ${state.themes[state.theme].background_label_footer_mail} text-white p-2 rounded-lg ${state.themes[state.theme].footerTextColor} font-spegiel-bold font-bold w-2/4 mb-2 md:mb-0 md:w-1/4`}> Your email :</label>
            <input type="email" name="email_form" className="rounded-xl p-2 font-spegiel-bold w-full "></input>
          </div>
          <div className=" p-4 w-full flex-col justify-center items-center">
          <label className={`mr-2 ${state.themes[state.theme].background_label_footer_mail} text-white p-2 rounded-lg ${state.themes[state.theme].footerTextColor} font-spegiel-bold font-bold w-2/4 md:w-1/4 mb-2`}> Your message :</label>
          <textarea type="text" name="message" className="rounded-xl p-2 font-spegiel-bold w-full h-40"></textarea>
          </div>
          <div className="flex justify-center items-center">
            <button type="submit" className={`button button--nina px-5 py-0 mb-4 place-self-center ${state.themes[state.theme].background_label_button_mail} ${state.themes[state.theme].footerTextColor} relative block focus:outline-none rounded text-2xl text-center font-spegiel-bold font-bold uppercase tracking-widest overflow-hidden md:w-2/5 h-10 hover:bg-[#392467] md:text-sm lg:text-base xl:text-lg`}>send</button>
          </div>
        </form>
      </div>
        <div class="mb-8 mt-8 [border-bottom:1px_solid_rgb(255,_255,_255)] w-48">
      </div>
    </div>
  </div>
</footer>
        </div>
    )
}

export default Footer;