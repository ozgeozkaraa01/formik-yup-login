import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import AOS from "aos";
import "aos/dist/aos.css";

const LoginPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("E-mail address is required"),
    password: Yup.string().required("Password is required"),
  });

  useEffect(() => {
    AOS.init({
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
    <div
      className="flex-1"
      data-aos="fade-up"
      data-aos-offset="180"
      data-aos-duration="600"
      data-aos-anchor-placement="top-bottom"
    >
      <div className="container text-center mx-auto mt-32 max-w-md w-screen">
        <h1 className="text-3xl font-semibold text-gray-700">
          Log in to your account
        </h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          <Form className="mt-10 flex flex-col space-y-6">
            <div className="flex flex-col items-start">
              <label className="mb-1 inline-block text-sm font-medium text-gray-700 select-none cursor-pointer">
                E-Mail
              </label>
              <Field
                className="block w-full appearance-none rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 sm:text-sm outline-none transition hover:border-gray-300 focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-indigo-500 disabled:border-gray-200 disabld:bg-gray-200 disabled:cursor-not-allowed disabled:text-gray-500"
                placeholder="username@example.com"
                type="email"
                name="email"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div className="flex flex-col items-start relative">
              <label className="mb-1 inline-block text-sm font-medium text-gray-700 select-none cursor-pointer">
                Password
              </label>
              <Field
                className="block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 sm:text-sm outline-none transition hover:border-gray-300 focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-indigo-500 disabled:border-gray-200 disabld:bg-gray-200 disabled:cursor-not-allowed disabled:text-gray-500"
                placeholder="Password"
                name="password"
                type={passwordVisible ? "text" : "password"}
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform focus:outline-none"
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-5 h-5 text-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2 4l2.585-2.585a1 1 0 011.414 0l1.328 1.327a1 1 0 010 1.414L4.414 7.757a1 1 0 01-1.414 0L2 6.343a1 1 0 010-1.414zm18 0l-2.585-2.585a1 1 0 00-1.414 0L17.657 3.95a1 1 0 000 1.414L19.95 6.343a1 1 0 001.414 0L22 4a1 1 0 000-1.414zM3 10V8a7 7 0 0114 0v2m-4 2v4m0 0H7m4 0h2"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                    />
                  </svg>
                )}
              </button>
            </div>
            <button
              className="relative inline-flex flex-col items-center group rounded-xl py-2 px-4 text-sm font-medium transition-all no-underline focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed bg-teal-500 text-white hover:text-gray-100 hover:bg-teal-500 active:bg-teal-800 active:text-blue-100 focus-visible:outline-teal-600 disabled:bg-teal-400 disabled:text-gray-100"
              type="submit"
            >
              <span className="flex items-center justify-center flex-nowrap flex-none space-x-2">
                <span>Login</span>
              </span>
            </button>
          </Form>
        </Formik>
        <div className="text-left mt-5">
          <p className="text-sm text-gray-500 ">
            Don’t have an account?{" "}
            <Link href="/register" className="text-blue-600 underline">
              Register{" "}
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
