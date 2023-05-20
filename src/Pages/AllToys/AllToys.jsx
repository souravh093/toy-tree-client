import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import SingleRow from "./SingleRow/SingleRow";
import useTitle from "../../hooks/useTitle";

const AllToys = () => {
  const allData = useLoaderData();
  const [searchKey, setSearchKey] = useState("");
  const [toys, setToys] = useState(allData);

  useTitle('AllToys')

  const handleSearch = () => {
    fetch(`https://toy-tree-server.vercel.app/searchByTitle/${searchKey}`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  };
  return (
    <div className="px-5 md:px-52 min-h-[calc(100vh-299px)]">
      <div className="form-control my-5">
        <div className="input-group">
          <input
            onChange={(e) => setSearchKey(e.target.value)}
            type="text"
            placeholder="Search…"
            className="input input-bordered"
          />
          <button
            onClick={handleSearch}
            className="btn btn-warning text-white btn-square"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th></th>
              <th>Seller</th>
              <th>Toy Name</th>
              <th>Sub Category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {toys.map((data, index) => (
              <SingleRow key={data._id} index={index} data={data} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
