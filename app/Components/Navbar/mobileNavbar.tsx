import React, { useState, useEffect } from "react";
import { IoMdArrowDropdown, IoMdArrowDropright } from "react-icons/io";
import { categories } from "@/Constant/constant";
import Image from "next/image";

function MobileNavbar({setOpenLogin,setOpenSignup,setOpen}:any) {
  const [openDropdown, setOpenDropdown] = useState(false);
  return (
    <div className="mt-10">
      <div>
        {categories && categories.length > 0 && (
          <>
            <button
              className="flex items-center gap-2"
              onClick={() => {
                setOpenDropdown(!openDropdown);
              }}
            >
              Categories
              {openDropdown === true ? (
                <IoMdArrowDropdown />
              ) : (
                <IoMdArrowDropright />
              )}
            </button>
            <ul
              className={`mt-2 transition-all ${
                openDropdown === true ? "visible" : "hidden"
              }`}
            >
              {categories.map((items: any, index: number) => {
                return (
                  <li
                    key={index}
                    className="flex items-center gap-2 py-1 pl-5  hover:bg-[gray]"
                  >
                    <Image src={items.logo} alt="logo" width={20} height={20} />
                    <a href="">{items.name}</a>
                  </li>
                );
              })}
            </ul>
          </>
        )}
        <button
          className="border-none bg-white rounded-md text-[#003b95] h-[40px] px-5 hover:bg-[#1a4fa0] hover:text-white w-full mt-10"
          onClick={() => {
            setOpenSignup(true);
            setOpen(false)
          }}
        >
          Register
        </button>
        <button
          className="border-none bg-white rounded-md text-[#003b95] h-[40px] px-5 hover:bg-[#1a4fa0] hover:text-white w-full mt-5"
          onClick={() => {
            setOpenLogin(true);
            setOpen(false)
          }}
        >
          Sign in
        </button>
      </div>
    </div>
  );
}

export default MobileNavbar;
