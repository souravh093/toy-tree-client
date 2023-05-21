import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import useTitle from "../../../hooks/useTitle";

const Modal = ({ id, onClose }) => {
  useTitle('UpdateToys')
  const [allData, setAllDates] = useState([]);
  useEffect(() => {
    fetch("https://toy-tree-server.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => setAllDates(data));
  }, []);
  const updateData = allData.find((data) => data._id === id);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const price = form.price.value;
    const availableQuantity = form.availableQuantity.value;
    const detailsDescription = form.detailsDescription.value;

    const updateToy = {
      price,
      availableQuantity,
      detailsDescription,
    };

    fetch(`https://toy-tree-server.vercel.app/update/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        form.reset();
        toast.success("Successfully Updated Toy");
      });
  };
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        {/* <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div> */}

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-2xl border-2 border-orange-500 transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white p-8 rounded-md">
            <h2 className="text-2xl font-semibold mb-6">
              Update Toy Information
            </h2>
            <h2 className="text-2xl font-semibold mb-6 bg-orange-400 py-2 px-3 text-white rounded-md inline-block">
              Toy Name: {updateData?.name}
            </h2>
            <form onSubmit={handleUpdate}>
              <div className="mb-4">
                <label
                  htmlFor="price"
                  className="text-lg font-medium mb-2 block"
                >
                  Price:
                </label>
                <input
                  type="text"
                  id="price"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  name="price"
                  required
                  defaultValue={updateData?.price}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="availableQuantity"
                  className="text-lg font-medium mb-2 block"
                >
                  Available Quantity:
                </label>
                <input
                  type="number"
                  id="availableQuantity"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  name="availableQuantity"
                  required
                  defaultValue={updateData?.availableQuantity}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="detailsDescription"
                  className="text-lg font-medium mb-2 block"
                >
                  Details Description:
                </label>
                <textarea
                  cols="30"
                  rows="10"
                  id="detailsDescription"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  required
                  name="detailsDescription"
                    defaultValue={updateData?.detailsDescription}
                />
              </div>
              <button
                type="submit"
                className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600"
              >
                Update
              </button>
            </form>
          </div>

          <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              onClick={onClose}
              className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
