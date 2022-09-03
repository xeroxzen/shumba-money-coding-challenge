import React from "react";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import "../dist/output.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { authActions } from "../store";
import { useNavigate } from "react-router-dom";

export default function Auth() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [inputs, setInputs] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    countryOfResidence: "",
    phoneNumber: "",
    password: "",
  });

  const sendRequest = async (type = "login") => {
    const res = await axios
      .post(`http://localhost:5001/api/v1/customers/${type}`, {
        firstName: inputs.firstName,
        lastName: inputs.lastName,
        email: inputs.email,
        countryOfResidence: inputs.countryOfResidence,
        phoneNumber: inputs.phoneNumber,
        password: inputs.password,
      })
      .catch((err) => console.log(err));

    const data = await res.data;
    console.log(data);
    return data;
  };

  const [isRegister, setIsRegister] = React.useState(false);
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    if (isRegister) {
      sendRequest("register")
        .then((data) => localStorage.setItem("userId", data.customers._id))
        .then(() => dispatch(authActions.login()))
        .then(() => navigate("/"))
        .then((data) => console.log(data));
    } else {
      sendRequest()
        .then((data) => localStorage.setItem("userId", data.customers._id))
        .then(() => dispatch(authActions.login()))
        .then(() => navigate("/recipients"))
        .then((data) => console.log(data));
    }
  };

  // use lazy loaders

  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="./assets/shumba-money-brand-logo.png"
              alt="Shumba Money"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              {isRegister ? "Ready to send money?" : "Welcome Back"}
            </h2>
          </div>
          <form
            className="mt-8 space-y-6"
            onSubmit={handleSubmit}
            method="POST"
          >
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              {/* {isRegister ? "Sign Up" : "Login"} */}
              <div>
                <label htmlFor="first-name" className="sr-only">
                  First name
                </label>
                {isRegister ? (
                  <input
                    id="first-name"
                    name="firstName"
                    type="text"
                    onChange={handleChange}
                    value={inputs.firstName}
                    autoComplete="off"
                    required
                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Andile"
                  />
                ) : null}
              </div>
              <div>
                <label htmlFor="middle-name" className="sr-only">
                  Middle name
                </label>
                {isRegister ? (
                  <input
                    id="middle-name"
                    name="middleName"
                    onChange={handleChange}
                    value={inputs.middleName}
                    type="text"
                    autoComplete="off"
                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Jaden"
                  />
                ) : null}
              </div>
              <div>
                <label htmlFor="last-name" className="sr-only">
                  Last name
                </label>
                {isRegister ? (
                  <input
                    id="last-name"
                    name="lastName"
                    type="text"
                    onChange={handleChange}
                    value={inputs.lastName}
                    autoComplete="off"
                    required
                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Mbele"
                  />
                ) : null}
              </div>
              <div>
                <label htmlFor="country" className="sr-only">
                  Country of Residence
                </label>
                {isRegister ? (
                  <input
                    id="country-of-residence"
                    name="country"
                    type="text"
                    onChange={handleChange}
                    value={inputs.countryOfResidence}
                    autoComplete="off"
                    required
                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="New Zealand"
                  />
                ) : null}
              </div>
              <div>
                <label htmlFor="phone-number" className="sr-only">
                  Phone number
                </label>
                {isRegister ? (
                  <input
                    id="phone-number"
                    name="phoneNumber"
                    onChange={handleChange}
                    value={inputs.phoneNumber}
                    type="tel"
                    autoComplete="off"
                    required
                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="+61 621 123 4567"
                  />
                ) : null}
              </div>

              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>

                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="off"
                  onChange={handleChange}
                  value={inputs.email}
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  onChange={handleChange}
                  value={inputs.password}
                  type="password"
                  autoComplete="off"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  onChange={handleChange}
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="/auth"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                color="warning"
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                {isRegister ? "Register" : "Login"}
              </button>
            </div>
            <button
              onClick={() => setIsRegister(!isRegister)}
              color="warning"
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <LockClosedIcon
                  className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  aria-hidden="true"
                />
              </span>
              {isRegister ? "Login" : "Register"} Instead
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
