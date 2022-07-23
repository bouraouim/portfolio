import React, { useContext } from "react";
// import "./Intro.css";
// import Vector1 from "../../img/Vector1.png";
// import Vector2 from "../../img/Vector2.png";
// import boy from "../../img/boy.png";
// import glassesimoji from "../../img/glassesimoji.png";
// import thumbup from "../../img/thumbup.png";
// import crown from "../../img/crown.png";
// // import FloatinDiv from "../FloatingDiv/FloatingDiv";
// import Github from "../../img/github.png";
// import LinkedIn from "../../img/linkedin.png";
// import Instagram from "../../img/instagram.png";
// import { UilLinkedin } from '@iconscout/react-unicons'
// import { UilGithub } from '@iconscout/react-unicons';
// import boubou from "../../img/boubou.png";
// import boubou1 from "../../img/boubou1.jpg";
// import boubou2 from "../../img/boubou2.png";
import boubou12 from "../../img/boubou12.jpg";
import boubou122 from "../../img/boubou122.png";
import blob from "../../img/blob.gif";
import { UilFile } from '@iconscout/react-unicons'
import resume from '../../Bouraoui Med Resume.pdf'
// import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { UilAngleDoubleDown } from '@iconscout/react-unicons'
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  return (
    <motion.div className="flex flex-col items-center gap-3 px-12 mt-24 h-[40rem] md:flex-row md:h-8/12 "  initial={{y:70,opacity:0}} whileInView={{y:0,opacity:1}}
    viewport={{ once: true }}
    transition={{delay:0.25,duration:0.75}} id="Intro">
      {/* left name side */}
      <div className="relative flex flex-col items-center gap-1 pl-3 md:flex-1">
        <div className="flex flex-col gap-1 text-left md:justify-start">
          {/* yahan change hy darkmode ka */}
          <span  className=" titel2">HII 👋! I Am Mohamed Bouraoui </span>
          <span className=" titels">Full-Stack Developer </span>
          <span className="description">
           <span className="underline decoration-wavy decoration-[#60A5FA]"> </span> with high level of experience in web designing
            and development, producting the Quality work
          </span>
        </div>
        <div className="z-10 flex items-center justify-start gap-2">
        <Link to="portfolio" smooth={true} spy={true}>
          <button className="flex  hover:bg-white text-xs hover:text-[#0077FF]  items-center justify-center h-10 lg:px-2 md:px-3 py-3 lg:text-base text-white  bg-[#0077FF]  transition duration-500  rounded-3xl">Check my work <UilAngleDoubleDown size="20" className="ml-1"/>   </button>
        </Link>
        <a href={resume} download to="contact" smooth={true} spy={true}>
          <button className="flex hover:bg-white hover:text-[#0077FF]  items-center justify-center h-10 px-6 py-3 text-xs lg:text-base text-white w-25 bg-[#0077FF]  transition duration-500  rounded-3xl">Check my resume <UilFile size="15" className="ml-1"/></button>
        </a>
        </div>
      </div>
      {/* right image side */}
      <div className="relative flex items-center justify-center md:flex-1">
        
        <img className="absolute w-[60%] h-full rounded-full right-5 -top-14 md:h-96 md:ml-5" src={blob} alt="" />
        <img className="z-10 border-2 border-blue-400 rounded-full h-72 lg:h-92 md:ml-5" src={boubou122} alt="" />
        
        {/* <div className="h-full rounded-full z-1 bg-gradient-to-r from-white via-green-400 to-blue-500 blur-2xl -z-10" ></div> */}
        {/* animation */}
        {/* <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        /> */}

        {/* <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Web" text2="Developer" />
        </motion.div> */}

        {/* animation */}
        {/* <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        > */}
          {/* floatinDiv mein change hy dark mode ka */}
          {/* <FloatinDiv img={thumbup} text1="Best Design" text2="Award" />
        </motion.div> */}

        {/* <div className="absolute w-80 h-56  rounded-full bg-[#edd0ff] blur-3xl	 -z-10   top-18% left-56%  " style={{ background: "rgb(238 210 255)" }}></div>
        <div 
          className="absolute blur -z-10 "
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div> */}
      </div>
    </motion.div>
  );
};

export default Intro;