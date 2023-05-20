import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-hot-toast";

const AddToy = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const handleAddToy = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    const sellerName = user?.displayName;
    const sellerEmail = user?.email;
    const subcategory = form.subcategory.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const availableQuantity = form.availableQuantity.value;
    const detailsDescription = form.detailsDescription.value;

    const newToy = {
      name,
      photoUrl,
      sellerName,
      sellerEmail,
      subcategory,
      price,
      rating,
      availableQuantity,
      detailsDescription,
    };
    console.log(newToy);

    fetch("https://toy-tree-server.vercel.app/addToys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        form.reset();
        toast.success("Successfully add Toy");
      });
  };
  return (
    <div className="flex py-10 items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg w-8/12 p-6">
        <h2 className="text-2xl font-bold mb-6">Add New Toy</h2>
        <form onSubmit={handleAddToy} className="space-y-4">
          <div>
            <label htmlFor="name" className="block font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              required
            />
          </div>
          <div>
            <label htmlFor="photoUrl" className="block font-medium">
              Photo URL
            </label>
            <input
              type="text"
              id="photoUrl"
              name="photoUrl"
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              required
            />
          </div>
          <div>
            <label htmlFor="sellerName" className="block font-medium">
              Seller Name
            </label>
            <input
              type="text"
              id="sellerName"
              name="sellerName"
              defaultValue={user.displayName}
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              required
              disabled
            />
          </div>
          <div>
            <label htmlFor="sellerEmail" className="block font-medium">
              Seller Email
            </label>
            <input
              type="email"
              id="sellerEmail"
              name="sellerEmail"
              defaultValue={user.email}
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              required
              disabled
            />
          </div>
          <div>
            <label htmlFor="subcategory" className="block font-medium">
              Subcategory
            </label>
            <input
              type="text"
              id="subcategory"
              name="subcategory"
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              required
            />
          </div>
          <div>
            <label htmlFor="price" className="block font-medium">
              Price
            </label>
            <input
              type="text"
              id="price"
              name="price"
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              required
            />
          </div>
          <div>
            <label htmlFor="rating" className="block font-medium">
              Rating
            </label>
            <input
              type="text"
              id="rating"
              name="rating"
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              required
            />
          </div>
          <div>
            <label htmlFor="availableQuantity" className="block font-medium">
              Available Quantity
            </label>
            <input
              type="number"
              id="availableQuantity"
              name="availableQuantity"
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              required
            />
          </div>
          <div>
            <label htmlFor="detailsDescription" className="block font-medium">
              Details Description
            </label>
            <textarea
              id="detailsDescription"
              name="detailsDescription"
              rows="4"
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-2xl font-bold text-white px-4 py-2 rounded-md"
            >
              Add Toy
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddToy;
