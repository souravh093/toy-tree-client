import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import toy1 from "../../../assets/toy1.png";
import toy2 from "../../../assets/toy2.png";
import toy3 from "../../../assets/toy3.png";
import toy4 from "../../../assets/toy4.png";
import toy5 from "../../../assets/toy5.png";
import toy6 from "../../../assets/toy6.png";
import toy7 from "../../../assets/toy7.png";
import toy8 from "../../../assets/toy8.png";


const gradientBg = {
  backgroundColor: 'rgb(224, 231, 255)',
  backgroundImage:
    'radial-gradient(at 54% 54%, rgb(229, 229, 229) 0, transparent 70%), ' +
    'radial-gradient(at 6% 91%, rgb(236, 252, 203) 0, transparent 67%), ' +
    'radial-gradient(at 3% 64%, rgb(194, 65, 12) 0, transparent 45%), ' +
    'radial-gradient(at 69% 78%, rgb(30, 64, 175) 0, transparent 59%), ' +
    'radial-gradient(at 17% 88%, rgb(212, 212, 212) 0, transparent 14%), ' +
    'radial-gradient(at 91% 95%, rgb(244, 63, 94) 0, transparent 62%)'
};

const Banner = () => {
  return (
    <div style={gradientBg} className="md:grid md:grid-cols-2 py-10 md:py-0 items-center md:h-[700px] px-5 md:px-52">
      <div className="py-5 md:py-0">
        <h2 className="md:text-7xl text-2xl font-bold">
          ToyTree: Explore our top picks for endless fun!
        </h2>
        <p className="flex items-center text-lg gap-2 my-5">
          Welcome to the ToyTree: Where Dreams Come to Life! Unleash the Magic
          of Childhood: Embark on an Extraordinary Toy Journey!
        </p>
        <button className="bg-orange-400 hover:bg-orange-500 hover:shadow-md py-5 px-10 rounded-md text-white text-xl font-bold">
          Get Started
        </button>
      </div>
      <div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper w-full"
        >
          <SwiperSlide>
            <img src={toy1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={toy2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={toy3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={toy4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={toy5} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={toy6} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={toy7} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={toy8} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;


