import React, { useContext } from "react";
// import "./Services.css";
import Card from "../card/Card";
// import Glasses from "../../img/glasses.png";
// import HeartEmoji from "../../img/heartemoji.png";
import Monitor from "../../img/monitor.png";
import ecomerce from "../../img/ecomerce.png";
import landing from "../../img/landing.png";
// import Humble from "../../img/humble.png";
// import wave from '../../img/wave-haikei.svg'

// import { themeContext } from "../../Context";
import { motion } from "framer-motion";
// import Resume from './resume.pdf';

const Services = () => {
  // context
  // const theme = useContext(themeContext);
  // const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="relative">
    <motion.div  initial={{y:100,opacity:0}} whileInView={{y:0,opacity:1}}
        viewport={{ once: true }}
        transition={{delay:0.25,duration:1,amount:0.5 }} className="flex  flex-col h-[70rem] xl:flex-row gap-3 w-full xl:h-[30rem] px-12  mb-8 bg-bg2 lg md:mt-20 mt-40" id="services" >
      
      {/* left side */}
      <div className="relative flex flex-col items-center flex-1 gap-5 ">
        <span className="pb-5 titels ">My services</span>
        <span className="mb-5 text-xl font-bold lg:text-left text-customgray ">
        I'm working on a lot of types of projects and as you can see there are some of the services that I can offer in my freelance projects if you want to ask about any other service just contact me</span>
              </div>
      {/* right */}
      <div className="flex flex-col flex-wrap items-center flex-1 gap-5 md:relative">
        {/* first card */}
        {/* <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        > */} 
        <div className="flex-1 xl:absolute h-[50rem] xl:-top-20 xl:right-[2%] " >
          <Card
            emoji={Monitor}
            heading={"Dashbords"}
            detail={"i can help you for build an dashboard to manage any data for your project"}
          />
          </div>
        {/* </motion.div> */}
        {/* second card */}
        {/* <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        > */}
        <div className="flex-1 xl:absolute xl:top-[10rem] xl:left-[1rem] ">
          <Card
            emoji={ecomerce}
            heading={"Ecommerce"}
            detail={"i can help you for build an ecommerce web application with all the advanced features ( PWA , RESPONSIVE , ... )"}
          />
          </div>
        {/* </motion.div> */}
        {/* 3rd */}
        {/* <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        > */}
        <div className="flex-1   xl:absolute xl:top-64 xl:-right-[5%] ">
          <Card
            emoji={landing}
            heading={"landing pages"}
            detail={
              "if you looking for a landing page for your company i will help you in that in less than 3 days and it will be so performed page and also a responsive page"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
          </div>
        {/* </motion.div> */}
        {/* <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div> */}
      </div>
    </motion.div>
    </div>
  );
};

export default Services;