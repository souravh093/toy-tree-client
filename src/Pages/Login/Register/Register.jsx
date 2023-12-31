import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import useTitle from "../../../hooks/useTitle";
import { toast } from "react-hot-toast";

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [error, setError] = useState("");

  useTitle("Register");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const url = form.photoUrl.value;


    createUser(email, password)
      .then((result) => {
        const newUser = result.user;
        console.log(newUser);
        updateUserProfile(name, url).then(() => {});
        toast.success("successfully Registered");
        navigate("/");
      })
      .catch((error) => setError(error.message));
  };
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-74.81px)] bg-gray-100">
      <div className="bg-white w-96 shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-6">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
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
            <label htmlFor="email" className="block font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
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
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md w-full"
          >
            Register
          </button>
        </form>
        <p className="mt-4 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 underline">
            Login here
          </Link>
        </p>
        <h2 className="text-red-500 font-semibold">{error}</h2>
      </div>
    </div>
  );
};

export default Register;
