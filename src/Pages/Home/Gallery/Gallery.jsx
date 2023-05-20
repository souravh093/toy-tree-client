import React from "react";
import gallery1 from "../../../assets/gallery1.png";
import gallery2 from "../../../assets/gallery2.png";
import gallery3 from "../../../assets/gallery3.jpg";
import gallery4 from "../../../assets/gallery4.png";

const Gallery = () => {
  return (
    <div className="md:px-52 px-5 my-24">
      <div className="text-center mb-10">
        <h2 className="md:text-6xl text-2xl font-bold mb-3 text-gray-600">
          Our Toys Gallery
        </h2>
        <p className="md:text-lg text-xs text-gray-600 max-w-2xl mx-auto">
          Here some discount to our toys you can buy this toys. Discount date is
          available only 2 more days buy now{" "}
        </p>
      </div>
      <div className="grid grid-cols-2">
        <div
          data-aos="fade-right"
          data-aos-offset="500"
          data-aos-duration="1000"
          className="relative overflow-hidden bg-cover bg-no-repeat"
        >
          <img
            className="transition duration-300 ease-in-out hover:scale-110 cursor-pointer"
            src={gallery1}
            alt=""
          />
        </div>
        <div
          data-aos="fade-left"
          data-aos-offset="500"
          data-aos-duration="1000"
        >
          <div className="grid grid-cols-2">
            <div className="relative overflow-hidden bg-cover bg-no-repeat">
              <img
                className="h-full object-cover transition duration-300 ease-in-out hover:scale-110 cursor-pointer"
                src={gallery2}
                alt=""
              />
            </div>
            <div className="relative overflow-hidden bg-cover bg-no-repeat">
              <img
                className="transition duration-300 ease-in-out hover:scale-110 cursor-pointer"
                src={gallery4}
                alt=""
              />
            </div>
          </div>
          <div className="relative overflow-hidden bg-cover bg-no-repeat">
            <img
              className="transition duration-300 ease-in-out hover:scale-110 cursor-pointer"
              src={gallery3}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
