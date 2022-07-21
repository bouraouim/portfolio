import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../img/sidebar.png";
import oppmanager from "../img/oppmanager.PNG";
import bodybuilding from "../img/bodybuilding.PNG";
import Ecommerce from "../img/ecommerce.png";
import HOC from "../img/hoc.png";
import MusicApp from "../img/musicapp.png";
import "swiper/css/pagination"
import { UilVideo } from '@iconscout/react-unicons'
import { UilGithub } from '@iconscout/react-unicons';
import { UilGlobe } from '@iconscout/react-unicons'
import { Pagination,Mousewheel, Forcetoaxis } from "swiper";

// import { themeContext } from "../Context";
const Portfolio = () => {
//   const theme = useContext(themeContext);
//   const darkMode = theme.state.darkMode;


  return (
    <div className="flex items-center justify-center  mb-7 flex-col h-[30rem] md:mt-16 portfolio" id="portfolio">
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
          className="w-[90%]  mySwiper "
      >
        <SwiperSlide >
          <div className="relative group">
          <img src={oppmanager}  className={`text-center object-fill w-full h-[100%]` }  alt="" />
          <div  className="absolute hidden items-center justify-around w-full group-hover:flex bottom-[10%] " >
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
          <img src={Sidebar}  className={`text-center` }  alt="" />
          <div  className="absolute hidden items-center justify-around w-full group-hover:flex bottom-[10%] " >
          <a href="https://google.com"target="_blank"  className={` flex transition duration-300  justify-center items-center bg-[#60A5FA] hover:bg-white text-white hover:text-[#60A5FA] w-10 h-10 rounded-full `} >
            <UilVideo size="20" />
            </a>
          <a href="https://google.com" target="_blank"  className={`flex transition duration-300  hover:bg-white justify-center items-center hover:text-[#60A5FA]  bg-[#60A5FA] w-10 h-10 rounded-full `} >
            <UilGithub size="20" />
            </a>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="relative group">
          <img src={bodybuilding}  className={`text-center` }  alt="" />
          <div  className="absolute hidden items-center justify-around w-full group-hover:flex bottom-[10%] " >
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
          <img src={Sidebar}  className={`text-center` }  alt="" />
          <div  className="absolute hidden items-center justify-around w-full group-hover:flex bottom-[10%] " >
          <a href="https://google.com"target="_blank"  className={` flex transition duration-300  justify-center items-center bg-[#60A5FA] hover:bg-white text-white hover:text-[#60A5FA] w-10 h-10 rounded-full `} >
            <UilVideo size="20" />
            </a>
          <a href="https://google.com" target="_blank"  className={`flex transition duration-300  hover:bg-white justify-center items-center hover:text-[#60A5FA]  bg-[#60A5FA] w-10 h-10 rounded-full `} >
            <UilGithub size="20" />
            </a>
          </div>
          </div>
        </SwiperSlide>
      </Swiper>
      </div>
  );
};

export default Portfolio;