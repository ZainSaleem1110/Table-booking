"use client";
import React, { useState } from "react";
import Image from "next/image";
import Categories from "./categories";
import FilterBar from "./filterbar";
import MobileNavbar from "./mobileNavbar";
import FlagImage from "@/public/Images/Flags/flag.png";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { IoReorderThree, IoClose } from "react-icons/io5";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="bg-[#003b95] flex flex-col justify-center items-center pt-3 py-16 w-full">
        <div className="h-[70px] xl:w-[60%] lg:w-[80%] w-[90%] text-white flex items-center justify-between">
          <h2 className="font-bold text-[24px]">TableBooking</h2>
          <div className="flex items-center gap-[15px] navOption">
            <div className="cursor-pointer hover:bg-[#1a4fa0] p-3 rounded-md">
              <div className="rounded-full w-[25px] h-[25px] overflow-hidden ">
                <Image
                  src={FlagImage}
                  alt="country-flags"
                  width={25}
                  height={25}
                />
              </div>
            </div>
            <div className="hover:bg-[#1a4fa0] p-3 rounded-md">
              <AiOutlineQuestionCircle className="text-[24px] cursor-pointer" />
            </div>
            <button className="border-none bg-white rounded-md text-[#003b95] h-[40px] px-5 hover:bg-[#1a4fa0] hover:text-white">
              Register
            </button>
            <button className="border-none bg-white rounded-md text-[#003b95] h-[40px] px-5 hover:bg-[#1a4fa0] hover:text-white">
              Sign in
            </button>
          </div>
          <div
            className="navIcon text-[42px] cursor-pointer"
            onClick={() => {
              setOpen(true);
            }}
          >
            <IoReorderThree />
          </div>
        </div>
        <div className="pt-5 flex justify-start  navOption xl:w-[60%] lg:w-[80%] w-[90%]">
          <Categories />
        </div>
        <div className="flex justify-start pt-14 xl:w-[60%] lg:w-[80%] w-[90%]">
          <div className="w-full relative ">
            <h2 className="text-white md:text-[42px] sm:text-[32px] text-[18px] font-bold sm:text-start text-center">
              Find your table for any cuisines
            </h2>
            <p className="text-white md:text-[24px] sm:text-[20px] text-[14px] sm:text-start text-center sm:mt-0 mt-2">
              Make a free reservation and search best restaurants for good
              meals.
            </p>
          </div>
        </div>
      </div>
      <div
        className={`fixed top-0 h-[100vh] sm:w-[350px] w-[300px] border bg-white px-7 py-5 z-10 ${
          open === false ? "sm:right-[-360px] right-[-300px]" : "right-0"
        } duration-1000 transition-all`}
      >
        <button
          onClick={() => {
            setOpen(false);
          }}
        >
          <IoClose className="text-[24px]" />
        </button>
        <MobileNavbar />
      </div>
      <div className="flex justify-center">
        <div className="xl:w-[60%] lg:w-[80%] w-[90%]">
          <FilterBar />
        </div>
      </div>
    </>
  );
}

export default Navbar;
