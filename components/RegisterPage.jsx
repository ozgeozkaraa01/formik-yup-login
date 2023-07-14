import React from "react";

const RegisterPage = () => {
  return (
    <div className="flex-1">
      <div className="container text-center mx-auto mt-32 max-w-md">
        <form className="mt-10 flex flex-col space-y-6">
          <div className="flex flex-col items-start">
            <label className="mb-1 inline-block text-sm font-medium text-gray-700 select-none cursor-pointer">
              E-Mail
            </label>
            <input
              className="block w-full appearance-none rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 sm:text-sm outline-none transition hover:border-gray-300 focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-indigo-500 disabled:border-gray-200 disabld:bg-gray-200 disabled:cursor-not-allowed disabled:text-gray-500"
              placeholder="username@example.com"
              type="email"
            />
          </div>
          <div className="flex flex-col items-start">
            <label className="mb-1 inline-block text-sm font-medium text-gray-700 select-none cursor-pointer">
              Password
            </label>
            <input
              className="block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 sm:text-sm outline-none transition hover:border-gray-300 focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-indigo-500 disabled:border-gray-200 disabld:bg-gray-200 disabled:cursor-not-allowed disabled:text-gray-500"
              placeholder="Password"
              type="password"
            />
          </div>
          <button
            className="relative inline-flex flex-col items-center group rounded-xl py-2 px-4 text-sm font-medium transition-all no-underline focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed bg-indigo-700 text-white hover:text-gray-100 hover:bg-indigo-500 active:bg-indigo-800 active:text-blue-100 focus-visible:outline-indigo-600 disabled:bg-indigo-400 disabled:text-gray-100"
            type="submit"
          >
            <span className="flex items-center justify-center flex-nowrap flex-none space-x-2">
              <span>Register</span>
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
