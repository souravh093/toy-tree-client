import React from "react";
import { Link } from "react-router-dom";

const SingleRow = ({ data, index }) => {
    const {_id, sellerName, name, subcategory, price, availableQuantity} = data;
  return (
    <tr>
      <th>{index+1}</th>
      <td>{sellerName}</td>
      <td>{name}</td>
      <td>{subcategory}</td>
      <td>{price}</td>
      <td>{availableQuantity}</td>
      <td><Link to={`/details/${_id}`} className="btn btn-warning">View Details</Link></td>
    </tr>
  );
};

export default SingleRow;
