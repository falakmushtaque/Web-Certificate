import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-700 px-4">
      <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">Login</h2>

        <form className="space-y-5">
          <div>
            <label htmlFor="username" className="block text-white font-medium mb-1">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-950"
              placeholder="Your username"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-white font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-950"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-white font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-950"
              placeholder="Your password"
            />
          </div>

          <div className="flex justify-between text-sm">
            <a href="#" className="text-white hover:underline">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-gray-900 text-white py-2 rounded hover:bg-gray-950 transition duration-200"
          >
            Login
          </button>
        </form>

       <p className="text-center text-white mt-6">
  Don't have an account?{' '}
  <Link to="/signup" className="text-white hover:underline">Sign Up</Link>
</p>
      </div>
    </div>
  );
};

export default Login;
