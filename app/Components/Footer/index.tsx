"use client";
import React, { useState } from "react";
import Image from "next/image";
import CSS from "./footer.module.css";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import Link from "next/link";

const SocialIcons = [
  { icon: FaFacebookF, name: "Facebook", Link: "https://www.facebook.com/zain.saleem.5264?mibextid=ZbWKwL" },
  { icon: FaLinkedinIn, name: "Linkedin", Link: "https://www.linkedin.com/in/zain-saleem-a57896210/" },
  { icon: FaTwitter, name: "Twitter", Link: "" },
  { icon: FaInstagram, name: "Instagram", Link: "https://www.instagram.com/zainsaleem7340/" },
];

export default function Footer() {
  return (
    <div className={`${CSS.footer} mt-10 pb-14`}>
      <div className="mt-16 pt-12 text-white flex flex-col items-center w-full">
        <Link href={"/"} className="cursor-pointer">
          <h2 className="font-bold text-[24px]">TableBooking</h2>
        </Link>
        <div
          className={`sm:h-[70px] px-6 flex sm:flex-row flex-col items-center sm:gap-y-0 gap-y-4 sm:py-0 py-5 mt-20 ${CSS["border_gradient"]}`}
        >
          <Link
            href={"/#location"}
            className="md:w-[180px] sm:w-[130px] w-[80px] sm:px-0 px-3 flex items-center justify-center sm:text-[20px] text-[14px] font-medium sm:border-r-2 border-[#444658] cursor-pointer"
          >
            Locations
          </Link>
          <Link href={"/#restaurants"}
            className="md:w-[180px] sm:w-[130px] w-[100px] sm:px-0 px-3 flex items-center justify-center sm:text-[20px] text-[14px] font-medium sm:border-r-2 border-[#444658] cursor-pointer"
          >
            Restaurants
          </Link>
          <Link
            href={"/#cuisines"}
            className="md:w-[180px] sm:w-[130px] w-[80px] sm:px-0 px-3 flex items-center justify-center sm:text-[20px] text-[14px] font-medium sm:border-r-2 border-[#444658] cursor-pointer"
          >
            Cuisines
          </Link>
          <a
            href={""}
            className="md:w-[180px] sm:w-[130px] w-[100px] sm:px-0 px-3 flex items-center justify-center sm:text-[20px] text-[14px] font-medium cursor-pointer"
          >
            Contact Us
          </a>
        </div>
        <div className="flex items-center gap-x-6 mt-20">
          {SocialIcons &&
            SocialIcons.map((social, index:number) => {
              return (
                <Link
                  href={social?.Link}
                  target="_blank"
                  key={index}
                  className={`${CSS["social_icon"]} rounded-full flex justify-center items-center text-black text-[20px] cursor-pointer`}
                >
                  {<social.icon />}
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
}
