import React, { useContext } from "react";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
// import { themeContext } from "../../Context";
// import { motion } from "framer-motion";
// import {Link} from 'react-scroll'
const Works = () => {
  // context
//   const theme = useContext(themeContext);
//   const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="relative items-center  flex flex-col gap-5 h-[55rem] lg:flex-row lg:h-[30rem] md:h-[40rem] pb-5 mt-28 px-10" id="works">
      {/* left side */}
        <div className="flex flex-col items-center flex-1 gap-2 md:mb-10 md:relative lg:text-left ">
          <span className="titels lg:text-7xl" >
            Work for All these
          </span>
          <span className="titel2">Tools & Technologies </span>
          <span className="description" >
          I'm working on a lot of types of projects and as you can see there are some of the services that I can offer in my freelance projects if you want to ask about any other service just contact me
          </span>
          {/* <Link to="contact" smooth={true} spy={true}> */}
            <button className="btn">Hire Me</button>
          {/* </Link> */}
        </div>

        {/* right side */}
      <div className="relative flex-1 md:mr-5 ">
        {/* <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="relative rounded-full w-mainCircle left-36 w-72 h-72 top-2rem bg-slate-800 z-2 "
        > */}
        <div className="relative rounded-full scale-62 xl:scale-100 lg:left-36 w-96 h-96 lg:top-2rem bg-slate-800 z-2">
          <div className="absolute w-secCircle -top-12 left-36 ">
            <img src={Upwork} alt="" className="scale-67" />
          </div>
          <div className="absolute w-secCircle -left-12 top-32">
            <img src={Fiverr} alt="" className="scale-67" />
          </div>
          <div className="absolute w-secCircle left-36 top-32">
            <img src={Amazon} alt="" className="scale-67" />
          </div>{" "}
          <div className="absolute w-secCircle left-80 top-32 ">
            <img src={Shopify} alt="" className="scale-67" />
          </div>
          <div className="absolute w-secCircle left-36 top-80">
            <img src={Facebook} alt="" className="scale-67" />
          </div>
          </div>
        {/* </motion.div> */}
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;