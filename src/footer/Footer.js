import React from "react";
import Wave from "../img/wave-haikei.svg";
// import Insta from "@iconscout/react-unicons/icons/uil-instagram";
// import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
// import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="relative flex items-start justify-start bg-white h-60 footer ">
    <img src={Wave} className="w-full " alt="" />
      <div className="absolute w-full top-[60%] md:top-[70%]  bg-white f-content">
        <span className=" description" >This Portfolio is made with ❤️ like all my projects</span><br/>
        <span className="text-base description" >PS: This website is responsive</span>
        <div className="f-icons">
          {/* <Insta color="white" size={"3rem"} />
          <Facebook color="white" size={"3rem"} />
          <Gitub color="white" size={"3rem"} /> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;