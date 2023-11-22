import React from "react";
import Navbar from "./Navbar";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'
const SignUp = () => {
const navigation = useNavigate()
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSignup = async () => {
    try {
      const result = await fetch(`http://${process.env.REACT_APP_URL}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      if (result.ok) {
        const data = await result.json();
        navigation("/login")
        
      } else {
        // Handle the error when the response is not okay (e.g., 404, 500, etc.)
        console.error('Server responded with an error:', result.status);
      }
    } catch (e) {
      console.error('Error during fetch:', e);
      // Handle fetch error
    }
  };
  
  return (
    <>
      <div class="bg-grey-lighter min-h-screen flex flex-col font-serif">
        <Navbar></Navbar>
        <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 class="mb-8 text-3xl text-center">Sign up</h1>
            <input
              type="text"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
            />

            <input
              type="text"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
              onChange={handleChange}
            />
            <input
              type="text"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="number"
              placeholder="Contact Number"
              onChange={handleChange}
            />

            <input
              type="password"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />
            <input
              type="password"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="confirm_password"
              placeholder="Confirm Password"
            />

            <button
              type="submit"
              class="w-full text-center py-3 rounded bg-indigo-600 text-white hover:bg-blue-700 focus:outline-none my-1"
              onClick={handleSignup}
            >
              Create Account
            </button>

            <div class="text-center text-sm text-grey-dark mt-4">
              By signing up, you agree to the
              <a
                class="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Terms of Service
              </a>{" "}
              and
              <a
                class="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Privacy Policy
              </a>
            </div>
          </div>

          <div class="text-grey-dark mt-6">
            Already have an account?
            <a
              class="no-underline border-b border-blue text-blue"
              href="/login"
            >
              Log in
            </a>
            .
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
