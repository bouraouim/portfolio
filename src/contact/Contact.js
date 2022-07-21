import React, { useContext, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { UilLinkedin } from '@iconscout/react-unicons'
import { UilGithub } from '@iconscout/react-unicons';
// import { themeContext } from "../../Context";
const Contact = () => {
//   const theme = useContext(themeContext);
//   const darkMode = theme.state.darkMode;

  const form = useRef();
  const [done, setDone] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1g24u7p",
        "template_r0rv18l",
        form.current,
        "9l9OCQrgbmYxj1O7b"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          form.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
    <div className="flex pt-8 mt-12 md:flex-row bg-bg2 " id="contact">
      {/* left side copy and paste from work section */}
        <div className="flex flex-col px-5 text-left md:pl-32 basis-1/3 w-left awesome">
          {/* darkMode */}
          {/* <span style={{color: darkMode?'white': ''}}>Get in Touch</span> */}
          <span className=" titel2" >Let's get in </span>
          <span className=" titels">TOUCH</span>
         <span className="description"> If you need me you are welcome to contact me and say a big hello at anytime via email.</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      {/* right side form */}
      <div className="relative flex justify-center basis-2/3">
        <form ref={form} onSubmit={sendEmail} className="flex flex-col w-[60%] rounded-2xl gap-8  justify-center items-center	 bg-[#1E2B48] " >
          <input type="email" name="user_email" className="user textinput " required  placeholder="Email"/>
          <input type="text" name="from_name" className="user textinput " required placeholder="Object"/>
          <textarea  name="message" className="h-32 user textinput" placeholder="Message"/>
          <button type="submit" value="Send" className="btn">Send</button>
          <span className="description " >{done && "Thanks for Contacting me ❤"}</span>
          
        </form>
      </div>
    </div>
    <div className="flex flex-col items-center justify-center text-center" >
    <span className="text-lg titel2" >You can also check my Github or message me on LinkedIn</span>
    <div className="flex gap-4">
    <a href="https://github.com/bouraouim" target="_blank"><UilGithub size="50" color="#60A5FA" /></a>
      <a href="https://www.linkedin.com/in/mohamed-bouraoui/" target="_blank"><UilLinkedin size="50" color="#60A5FA" /></a>
      </div>
    </div>
    </>
  );
};

export default Contact;