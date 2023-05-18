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

const Banner = () => {
  return (
    <div className="grid grid-cols-2 items-center h-[700px] bg-red-50 px-52">
      <div>
        <h2 className="text-7xl font-bold">
          ToyTree: Explore our top picks for endless fun!
        </h2>
        <p className="flex items-center text-lg gap-2 my-5">
          Welcome to the ToyTree: Where Dreams Come to Life! Unleash the Magic
          of Childhood: Embark on an Extraordinary Toy Journey!
        </p>
        <button className="bg-orange-400 py-5 px-10 rounded-md text-white text-xl font-bold">
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
          className="mySwiper"
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
