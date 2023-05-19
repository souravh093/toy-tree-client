import React from "react";
import { toast } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const UpdateToy = () => {
  const updateToysData = useLoaderData();
  const { _id, name, price, availableQuantity, detailsDescription } =
    updateToysData;
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

    fetch(`http://localhost:5000/update/${_id}`, {
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
    <div className="min-h-screen  bg-gray-200 flex justify-center items-center">
      <div className="bg-white w-6/12 p-8 rounded-md shadow-lg">
        <h2 className="text-2xl font-semibold mb-6">Update Toy Information</h2>
        <h2 className="text-2xl font-semibold mb-6 bg-orange-400 py-2 px-3 text-white rounded-md inline-block">
          Toy Name: {name}
        </h2>
        <form onSubmit={handleUpdate}>
          <div className="mb-4">
            <label htmlFor="price" className="text-lg font-medium mb-2 block">
              Price:
            </label>
            <input
              type="text"
              id="price"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              name="price"
              required
              defaultValue={price}
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
              defaultValue={availableQuantity}
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
              defaultValue={detailsDescription}
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
    </div>
  );
};

export default UpdateToy;
