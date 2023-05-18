import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const { signInUser, googleSignInUser } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error.message));
  };

  const handleGoogleLogin = () => {
    googleSignInUser()
      .then((result) => {
        const googLogged = result.user;
        console.log(googLogged);
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-74.81px)] bg-gray-100">
      <div className="bg-white w-96 shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
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
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md w-full"
          >
            Login
          </button>
          <div className="flex items-center justify-center">
            <hr className="w-2/5 border-gray-300" />
            <p className="mx-4 text-gray-500">or</p>
            <hr className="w-2/5 border-gray-300" />
          </div>
        </form>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-md w-full"
          onClick={handleGoogleLogin}
        >
          Sign in with Google
        </button>
        <p className="mt-4 text-sm">
          Don not have an account?{" "}
          <Link to="/register" className="text-blue-500 underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
