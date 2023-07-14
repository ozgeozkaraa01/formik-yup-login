import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div className="flex-1 bg-gradient-to-r from-teal-400 to-blue-500">
      <div className="container mx-auto flex justify-center items-center h-screen space-x-10">
        <Link href="/login">
          <div className="relative transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
            <img src="/assets/bg1.svg" alt="photo" />
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center font-display text-lg">
              Sign In
            </span>
          </div>
        </Link>
        <Link href="/register">
          <div className="relative transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
            <img src="/assets/bg2.svg" alt="photo" />
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center font-display text-lg">
              Sign Up
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
