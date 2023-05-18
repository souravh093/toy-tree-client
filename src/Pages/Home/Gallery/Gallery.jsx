import React from "react";
import gallery1 from "../../../assets/gallery1.png";
import gallery2 from "../../../assets/gallery2.png";
import gallery3 from "../../../assets/gallery3.jpg";
import gallery4 from "../../../assets/gallery4.png";

const Gallery = () => {
  return (
    <div className="px-52 my-24">
      <div className="text-center mb-10">
        <h2 className="text-6xl font-bold mb-3 text-gray-600">Our Toys Gallery</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">Here some discount to our toys you can buy this toys. Discount date is available only 2 more days buy now </p>
      </div>
      <div className="grid grid-cols-2">
        <div>
          <img src={gallery1} alt="" />
        </div>
        <div>
          <div className="grid grid-cols-2">
            <div>
              <img className="h-full object-cover" src={gallery2} alt="" />
            </div>
            <div>
              <img src={gallery4} alt="" />
            </div>
          </div>
          <div>
            <img src={gallery3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
