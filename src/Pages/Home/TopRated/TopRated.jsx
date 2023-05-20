import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TopRated = () => {
  const [toys, setToys] = useState([]);
  const sliceData = toys.slice(0, 10);
  useEffect(() => {
    fetch("https://toy-tree-server.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);
  return (
    <div className="md:px-52 px-5 pt-20 md:pt-0 pb-20">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-6xl font-bold mb-3 text-gray-600">
          Top Rated Toys
        </h2>
        <p className="text-xs md:text-lg text-gray-600 max-w-2xl mx-auto">
          This is our best toy you can buy for your kid. Our every client give
          it most rating this toys.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <div className="grid md:grid-cols-2 gap-5">
          {sliceData.map((data) => {
            const { _id, name, photoUrl, price, rating } = data;
            return (
              <Link
                to={`/details/${_id}`}
                key={_id}
                className="flex items-center gap-5 cursor-pointer border"
              >
                <div className="bg-red-50 p-5">
                  <img
                    className="w-20 h-20 object-contain"
                    src={photoUrl}
                    alt=""
                  />
                </div>
                <div>
                  <h2 className="text-lg font-semibold">{name}</h2>
                  <p>Rating: ⭐{rating}</p>
                  <p className="text-orange-400 font-bold text-lg">
                    Price: ${price}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
        <div
          className="bg-orange-500 flex items-center justify-center py-20"
          data-aos="fade-left"
          data-aos-offset="500"
          data-aos-duration="1000"
        >
          <div className="flex flex-col items-center gap-10">
            <div className="text-center">
              <h2 className="text-3xl mb-5 underline font-bold text-white">
                Summer Sale
              </h2>
              <h3 className="text-white text-4xl max-w-xl">
                Up to 20% off only for all new customers
              </h3>
            </div>
            <img
              className="w-80"
              src="https://i.ibb.co/YdrgNGN/toycar.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopRated;
