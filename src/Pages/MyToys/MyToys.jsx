import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import SingleRow from "../AllToys/SingleRow/SingleRow";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/myToys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, [user]);
  return (
    <div className="px-52">
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
            {myToys.map((data, index) => (
              <SingleRow key={data._id} index={index} data={data} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
