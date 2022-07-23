import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import oppmanager from "../img/oppmanager.PNG";
import bodybuilding from "../img/bodybuilding.PNG";
import bookmark from "../img/bookmark.PNG";
import fastFood from "../img/fast-food.PNG";
import "swiper/css/pagination"
import { UilVideo } from '@iconscout/react-unicons'
import { UilGithub } from '@iconscout/react-unicons';
import { UilGlobe } from '@iconscout/react-unicons'
import { Pagination,Mousewheel } from "swiper";
import { motion } from "framer-motion";


// import { themeContext } from "../Context";
const Portfolio = () => {
//   const theme = useContext(themeContext);
//   const darkMode = theme.state.darkMode;


  return (
    <motion.div initial={{y:100,opacity:0}} whileInView={{y:0,opacity:1}}
    viewport={{ once: true,amount:0.5 }}
    transition={{delay:0.2,duration:0.75}} className="flex items-center justify-center  mb-7 flex-col h-[30rem] md:mt-16 portfolio" id="portfolio">
      {/* heading */}
      {/* <span style={{color: darkMode?'white': ''}}>Recent Projects</span> */}
      <span className="pb-2 titel2" >Some Recent</span>
      <span className="pb-6 titels" >Projects</span>
      

      {/* slider */}
      <Swiper
        // spaceBetween={30}
        // slidesPerView={2}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
            0:{
                slidesPerView: 1,
                spaceBetween: 20,
              },
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          Mousewheel={{ invert: true} }
          mousewheel={{  
            invert: true,
           }}
          modules={[Pagination,Mousewheel]}
          className="w-[90%]  mySwiper overflow-hidden"
      >
        <SwiperSlide >
          <div className="relative group">
          <img src={oppmanager}  className={`text-center object-fill w-full h-[100%]` }  alt="" />
          <div  className="absolute xl:hidden items-center justify-around w-full flex group-hover:flex bottom-[10%] " >
          <a href="https://drive.google.com/file/d/1AIOn6owAFAZFW9d046H7be3mDulgozVm/view?usp=sharing"target="_blank"  className={` flex transition duration-300  justify-center items-center bg-[#60A5FA] hover:bg-white text-white hover:text-[#60A5FA] w-10 h-10 rounded-full `} >
            <UilVideo size="20" />
            </a>
          <a href="https://github.com/bouraouim/opportunity-manager" target="_blank"  className={`flex transition duration-300  hover:bg-white justify-center items-center hover:text-[#60A5FA]  bg-[#60A5FA] w-10 h-10 rounded-full `} >
            <UilGithub size="20" />
            </a>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="relative group">
          <img src={fastFood}  className={`text-center` }  alt="" />
          <div  className="absolute xl:hidden items-center justify-around w-full flex group-hover:flex bottom-[10%]" >
          <a href="https://bouraouim.github.io/fast-food/"target="_blank"  className={` flex transition duration-300  justify-center items-center bg-[#60A5FA] hover:bg-white text-white hover:text-[#60A5FA] w-10 h-10 rounded-full `} >
            <UilGlobe size="20" />
            </a>
          <a href="https://github.com/bouraouim/fast-food" target="_blank"  className={`flex transition duration-300  hover:bg-white justify-center items-center hover:text-[#60A5FA]  bg-[#60A5FA] w-10 h-10 rounded-full `} >
            <UilGithub size="20" />
            </a>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="relative group">
          <img src={bodybuilding}  className={`text-center` }  alt="" />
          <div  className="absolute xl:hidden items-center justify-around w-full flex group-hover:flex bottom-[10%] " >
          <a href="https://bouraouim.github.io/tailwindCSS-website-for-body-building/"target="_blank"  className={` flex transition duration-300  justify-center items-center bg-[#60A5FA] hover:bg-white text-white hover:text-[#60A5FA] w-10 h-10 rounded-full `} >
            <UilGlobe size="20" />
            </a>
          <a href="https://github.com/bouraouim/tailwindCSS-website-for-body-building" target="_blank"  className={`flex transition duration-300  hover:bg-white justify-center items-center hover:text-[#60A5FA]  bg-[#60A5FA] w-10 h-10 rounded-full `} >
            <UilGithub size="20" />
            </a>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="relative group">
          <img src={bookmark}  className={`text-center` }  alt="" />
          <div  className="absolute xl:hidden items-center justify-around w-full flex group-hover:flex bottom-[10%]" >
          <motion.a href="https://bouraouim.github.io/bookmark-tailwind-website/"target="_blank"  className={` flex transition duration-300  justify-center items-center bg-[#60A5FA] hover:bg-white text-white hover:text-[#60A5FA] w-10 h-10 rounded-full `} 
          >
            <UilGlobe size="20" />
            </motion.a>
          <a href="https://github.com/bouraouim/bookmark-tailwind-website" target="_blank"  className={`flex transition duration-300  hover:bg-white justify-center items-center hover:text-[#60A5FA]  bg-[#60A5FA] w-10 h-10 rounded-full `} >
            <UilGithub size="20" />
            </a>
          </div>
          </div>
        </SwiperSlide>
      </Swiper>
      </motion.div>
  );
};

export default Portfolio;