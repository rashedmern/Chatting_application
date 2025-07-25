import React from "react";
import { IoCreateOutline } from "react-icons/io5";
import { FaGoogle } from "react-icons/fa";

const LoginPage = () => {
  return (
    <div>
      <div className="min-h-screen w-full relative">
        <div className="absolute inset-0 z-0"
          style={{ background:"radial-gradient(125% 125% at 50% 90%, #000000 40%, #0d1a36 100%)",}}
        >
          <img className="max-w-[180px] ml-[350px] mt-[230px]" src="./images/logo.png" alt="" />
          <h1 className=" text-white ml-[380px] mt-[20px] -tracking-tighter font-semibold text-[20px]">অনিরুদ্ধ-৫৬</h1>
        </div>
      {/* right side start */}
       <div className="container">
          <div className="relative">
              <div>
            <div className="p-[122px] flex justify-end">
              <div className="w-[680px] h-full bg-[#000008]/30 backdrop-blur-sm rounded-lg  ">
                <h1 className="text-white font-primary text-[40px] text-center -tracking-tighter mt-[30px]">
                  Sign in{" "}
                </h1>
                <div class="mb-4">
                  <label
                    className="block text-sm font-medium text-white mb-[10px] mt-[20px] font-secondary ml-[100px]"
                    for="email"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-md border border-blue-900 text-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900 ml-[100px]"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-sm font-medium text-white mb-[10px] mt-[20px] font-secondary ml-[100px]"
                    for="email"
                  >
                    Password
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-md border border-blue-900  text-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900 ml-[100px]"
                  />
                </div>

                <div className="mb-4 flex items-center justify-between gap-[5px] ml-[100px] mb-[40px]">
                  <label className="flex items-center gap-[10px] text-sm text-gray-700">
                    <input
                      type="checkbox"
                      className=" h-4 w-4 text-blue-900 focus:ring-blue-900 border-gray-300 rounded"
                    />
                    Remember me
                  </label>
                  <a
                    href="#"
                    className="text-sm text-blue-900 hover:underline mr-[150px]"
                  >
                    Forgot password?
                  </a>
                </div>

                <div class="flex items-center my-6">
                  <div class="flex-grow h-px bg-blue-900"></div>
                  <span class="px-3 text-sm text-white">Or continue with</span>
                  <div class="flex-grow h-px bg-blue-900"></div>
                </div>

                <div class="flex space-x-4 mb-[40px] justify-center">
                  <button class="flex items-center justify-center w-1/4 border border-blue-900/40 py-2 rounded-md bg-blue-900/40 -tracking-tighter text-white text-[20px] gap-[10px]">
                    <FaGoogle />
                    <span class="text-sm text-white font-normal font-secondary">
                      Google
                    </span>
                  </button>
                  <button class="flex items-center justify-center w-1/4 border border-blue-900/40 py-2 rounded-md bg-blue-900/40 gap-[10px] -tracking-tighter text-white  text-[20px] font-bold">
                    <IoCreateOutline />

                    <span class="text-sm text-white font-normal font-secondary">
                      Create one
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      {/* right side end*/}
       
      </div>
    </div>
  );
};

export default LoginPage;
