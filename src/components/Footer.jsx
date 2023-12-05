import React from "react";
import { Link } from "react-router-dom";
import { GoCodeReview } from "react-icons/go";


function Footer() {
    return (
        <div>
            
<footer class="block">
  <div class="py-16 md:py-24 lg:py-32 mx-auto w-full max-w-7xl px-5 md:px-10">
    <div class="flex-col flex items-center">
      <Link to="/" style={{textDecoration:'none'}} className="text-gray-200 mb-8 max-w-full font-spegiel-bold-nav font-card-title flex">Mtgs87<GoCodeReview className="mb-2" /></Link>
     
      <div class="text-center font-semibold max-[991px]: max-[991px]:py-1">
        <span class="inline-block px-6 py-2 font-normal text-gray-200 transition hover:text-[#c248e7]">Full-Stack</span>
        <span class="inline-block px-6 py-2 font-normal text-gray-200 transition hover:text-[#c248e7]">Improve</span>
        <span class="inline-block px-6 py-2 font-normal text-gray-200 transition hover:text-[#c248e7]">Works</span>
        <span class="inline-block px-6 py-2 font-normal text-gray-200 transition hover:text-[#c248e7]">Communication</span>
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