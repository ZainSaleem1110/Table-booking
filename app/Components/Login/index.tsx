import React, { Fragment, useRef, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { AiOutlineClose } from "react-icons/ai";
import Image from "next/image";

function Login({ show, onClose, openSignup }: any) {
  const cancelButtonRef = useRef(null);
  return (
    <Transition.Root show={show} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={() => onClose()}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full justify-center p-4 text-center items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div
                ref={cancelButtonRef}
                className="flex justify-center items-center sm:px-10 px-2"
              >
                <Dialog.Panel className="relative transform rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 realtive">
                  <div className="bg-white flex md:gap-10 md:pl-0 pl-10 pr-10 rounded-md md:w-[800px] sm:w-[400px]">
                    <Image
                      src="/Images/restaurant.jpg"
                      alt=""
                      width={300}
                      height={700}
                      style={{ objectFit: "cover" }}
                      className="md:flex hidden rounded-tl-md rounded-bl-md"
                    />
                    <div className="flex flex-col gap-4 w-full">
                      <div
                        className="flex justify-end items-center pt-5 pr-5"
                        onClick={() => {
                          onClose();
                        }}
                      >
                        <AiOutlineClose />
                      </div>
                      <div className="pb-8 flex flex-col gap-4 text-[#003b95] w-full">
                        <h2 className="text-[#003b95] text-[24px] font-bold mb-4">
                          Sign In
                        </h2>
                        <div className="flex flex-col gap-2 w-full">
                          <label htmlFor="" className="font-semibold">
                            <span className="text-[red] pr-1">*</span>
                            Email
                          </label>
                          <input
                            type="text"
                            className="w-full h-[40px] border border-[#003b95] rounded-md pl-2"
                            placeholder="Enter email"
                          />
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                          <label htmlFor="" className="font-semibold">
                            <span className="text-[red] pr-1">*</span>
                            Password
                          </label>
                          <input
                            type="text"
                            className="w-full h-[40px] border border-[#003b95] rounded-md pl-2"
                            placeholder="Enter password"
                          />
                        </div>
                        <div className="flex justify-end">
                          <button className="cursor text-[14px]">
                            Forgot Password?
                          </button>
                        </div>
                        <button className="w-full bg-[#ff486a] text-white py-2 rounded-md mt-5 hover:bg-[#003b95]">
                          Sign In
                        </button>
                        <div className="relative w-full h-[2px] bg-[lightgray] mt-8">
                          <h2 className="bg-white text-black sm:text-[16px] text-[14px] sm:w-[130px] w-[100px] h-[20px] text-center absolute translate-div">
                            Sign in using
                          </h2>
                        </div>
                        <div className="flex justify-center mt-4">
                          <button className="border border-[#003b95] w-[100px] h-[40px] flex justify-center items-center rounded-md">
                            <Image
                              src="/Images/google.png"
                              alt=""
                              height={30}
                              width={100}
                            />
                          </button>
                        </div>
                        <div className="flex sm:flex-row flex-col items-center justify-center gap-4 mt-5">
                          <p className="text-[#545454]">Not registered yet?</p>
                          <button onClick={()=>{openSignup()}}>Create an account</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default Login;
