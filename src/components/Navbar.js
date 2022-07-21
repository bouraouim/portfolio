import React from "react";
// import Toggle from "../Toggle/Toggle";
import { Link } from "react-scroll";
const navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-20 flex items-center justify-between px-12 mb-8 h-14 backdrop-blur-lg " id="Navbar">
      {/* left */}
      <div className="items-center self-center justify-start flex-1 gap-8 sm:flex">
        <div className="text-2xl font-bold">BouraouiDev</div>
        {/* <Toggle /> */}
      </div>
      {/* right */}
      <div className="hidden font-normal sm:flex :items-center :justify-end :flex-1 n-right ">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }} className="flex gap-8 mr-16 ">
            <li>
              <Link to="services" spy={true} className="cursor-pointer hover:text-[#60A5FA]" smooth={true}>
                Serivces
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} className="cursor-pointer hover:text-[#60A5FA]" smooth={true}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="contact" spy={true} className="cursor-pointer hover:text-[#60A5FA] " smooth={true}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default navbar;