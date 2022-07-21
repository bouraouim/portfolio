import React from "react";

const Card = ({emoji, heading, detail, color}) => {
  return (
    <div className=" flex flex-col items-center w-72 gap-4 text-center bg-[#1E2B48]  shadow-lg	 shadow-[#43A5E3]  card  rounded-2xl " > 
      <img src={emoji}  className="w-20 mt-6" alt="" />
      <span>{heading}</span>
      <span className="px-5 pb-2 text-customgray" >{detail}</span>
    </div>
  );
};

export default Card;