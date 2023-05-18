import React from "react";
import { Link } from "react-router-dom";

const SubCategory1 = ({ display }) => {
  const {_id, name, photoUrl, price, rating } = display;
  
  return (
    <div className="card w-full bg-base-100 border-2 border-orange-400">
      <figure>
        <img
          src={photoUrl}
          alt="Shoes"
          className="object-contain bg-red-50 w-full h-96"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Price: ${price}</p>
        <p>Rating: ⭐{rating}</p>
        <Link className="btn btn-error text-white" to={`/details/${_id}`}>View Details</Link>
      </div>
    </div>
  );
};

export default SubCategory1;
