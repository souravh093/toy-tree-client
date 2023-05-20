import React from "react";

const MyToySingleRow = ({ data, index, handleDelete, handleUpdate }) => {
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
          <button
            // to={`/update/${_id}`}
            htmlFor="my-modal-6"
            className="btn btn-warning"
            onClick={() => handleUpdate(_id)}
          >
            Update
          </button>
          <button onClick={() => handleDelete(_id, data)} className="btn btn-error">
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default MyToySingleRow;
