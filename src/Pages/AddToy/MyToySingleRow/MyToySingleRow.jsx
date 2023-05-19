import React from "react";
import { Link } from "react-router-dom";

const MyToySingleRow = ({ data, index, handleDelete }) => {
  const { _id, sellerName, name, subcategory, price, availableQuantity } = data;
  
  return (
    <>
      <tr>
        <th>{index + 1}</th>
        <td>{sellerName}</td>
        <td>{name}</td>
        <td>{subcategory}</td>
        <td>{price}</td>
        <td>{availableQuantity}</td>
        <td className="flex items-center gap-2">
          <Link
            to={`/update/${_id}`}
            htmlFor="my-modal-6"
            className="btn btn-warning"
          >
            Update
          </Link>
          <button onClick={() => handleDelete(_id)} className="btn btn-error">
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default MyToySingleRow;
