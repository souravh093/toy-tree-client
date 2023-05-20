import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, FreeMode, Pagination } from "swiper";
import { Link } from "react-router-dom";

const Trending = () => {
  const [sliderData, setSliderData] = useState([]);
  const sliceData = sliderData.slice(0, 10);
  useEffect(() => {
    fetch("https://toy-tree-server.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => setSliderData(data));
  }, []);
  return (
    <div className="px-5 py-5 md:px-52 md:py-24">
      <div className="text-center mb-10">
        <h2 className="md:text-6xl text-2xl font-bold mb-3 text-gray-600">
          Trending Toys
        </h2>
        <p className="md:text-lg text-xs text-gray-600 max-w-2xl mx-auto">
          Here some Trending toys can buy this toys. Now this toys is available
          to our website.
        </p>
      </div>

      <div
        className="gap-3"
        data-aos="fade-right"
        data-aos-offset="500"
        data-aos-duration="1000"
      >
        <Swiper
        breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3
            },
            1280: {
                slidesPerView: 4
            }
          }}
        //   slidesPerView={4}
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          freeMode={true}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[FreeMode, Autoplay, Navigation, Pagination]}
          className="mySwiper"
        >
          {sliceData.map((data) => {
            const { _id, name, photoUrl, price, rating } = data;
            return (
              <SwiperSlide key={data._id}>
                <div className="card w-full bg-base-100 shadow-xl border-2 border-orange-400">
                  <figure>
                    <img
                      src={photoUrl}
                      alt="Shoes"
                      className="h-96 w-full object-contain bg-red-50"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <div className="flex justify-between">
                      <div>Price: ${price}</div>
                      <div>Rating: ⭐{rating}</div>
                    </div>
                    <div className="card-actions justify-end"></div>
                    <Link to={`/details/${_id}`} className="btn btn-error">Details</Link>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Trending;
