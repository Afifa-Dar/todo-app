import React from "react";

export const Signup = () => {
 return (
    <div className="flex flex-col items-center justify-center m-10 space-y-5">
    <div className="w-full">
      <label htmlFor="name" className="text-gray-800 italic py-3">
        Name
      </label><p className="text-red-600 inline mx-2">*</p>
      <input
        type="text"
        name="name"
        required
        id="1"
        className="rounded-full p-3 text-gray-800 w-full hover:border-purple-950 border-2"
        placeholder="Enter Your Name"
      />
    </div>
    <div className="w-full">
      <label htmlFor="email" className="text-gray-800 italic py-3">
        Email
      </label><p className="text-red-600 inline mx-2">*</p>
      <input
        type="email"
        name="email"
        id="2"
        required
        className="rounded-full p-3 text-gray-800 w-full  hover:border-purple-950 border-2"
        placeholder="Enter Your Email"
      />
    </div>
    <div className="w-full">
      <label htmlFor="password" className="text-gray-800 italic py-3 ">
        Password
      </label><p className="text-red-600 inline mx-2">*</p>
      <input
        type="password"
        name="password"
        id="3"
        required
        className="rounded-full p-3 text-gray-800 w-full hover:border-purple-950 border-2"
        placeholder="Enter Password"
      />
    </div>
    <div className="w-full text-center">
      <button
        type="submit"
        className=" m-5 py-3 px-5 bg-purple-950 text-purple-200 text-lg font-bold rounded-3xl hover:bg-purple-400"
      >
        Signup
      </button>
    </div>
  </div>
 )
}