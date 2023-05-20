import React, { useState } from "react";
import Modal from "../../UpdateToy/Modal/Modal";

const MyToySingleRow = ({ data, index, handleDelete }) => {
  const { _id, sellerName, name, subcategory, price, availableQuantity } = data;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  }

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
          <div>
            <button
              onClick={openModal}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Update
            </button>
            {isModalOpen && <Modal id={_id}  onClose={closeModal} />}
          </div>
          <button
            onClick={() => handleDelete(_id, data)}
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default MyToySingleRow;
