import React from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { FaSnapchatSquare } from "react-icons/fa";
import { RiVisaFill } from "react-icons/ri";
import { FaCcPaypal } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";
import { FaCcMastercard } from "react-icons/fa";

function Footer1() {
  return (
    <>
    <hr className=" bg-slate-500 h-[2px] my-4"/>
    <div className="w-[90%] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-between">
        <div>
          <p className="font-bold">
            Sign up to our email list and receive 20% off your next order
          </p>
          <button className="bg-black text-white p-2 my-5">SIGN UP</button>
        </div>
        <div>
          <p className="font-bold">Connect with us</p>
          <div className="my-5">
            <FaInstagramSquare className="inline mx-2 text-3xl rounded-full" />
            <AiFillTikTok className="inline mx-2 text-3xl rounded-full" />
            <FaFacebook className="inline mx-2 text-3xl rounded-full" />
            <FaSquareXTwitter className="inline mx-2 text-3xl rounded-full" />
            <FaPinterest className="inline mx-2 text-3xl rounded-full" />
            <FaSnapchatSquare className="inline mx-2 text-3xl rounded-full" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        <div>
        <hr className="w-[75%]  bg-slate-500 h-[2px] my-4"/>
          <p className="font-bold" >Help & Information</p>
          <p className="my-4">Customer Service</p>
          <p className="my-4">Delivery Information</p>
          <p className="my-4">Returns & Refunds</p>
          <p className="my-4">Help Center</p>
          <p className="my-4">Track my order</p>
          <p className="my-4">Accessibility</p>
          <p className="my-4">Cookie Settings</p>
        </div>
        <div>
        <hr className="w-[75%]  bg-slate-500 h-[2px] my-4"/>
          <p className="font-bold">About SkinStore</p>
          <p className="my-4">Key Workers Discount</p>
          <p className="my-4">About Us</p>
          <p className="my-4">Affiliate Program</p>
          <p className="my-4">Brand Directory</p>
          <p className="my-4">Coupon Codes</p>
          <p className="my-4">Refer A Friend</p>
          <p className="my-4">Student Discount</p>
          <p className="my-4">Join SkinStore Experts</p>
        </div>
        <div>
        <hr className="w-[75%]  bg-slate-500 h-[2px] my-4"/>
          <p className="font-bold">Legal</p>
          <p className="my-4">Cookie Information</p>
          <p className="my-4">Privacy Policy</p>
          <p className="my-4">Terms & Conditions</p>
          <p className="my-4">Modern Slavery Statement</p>
        </div>
        <div>
        <hr className="w-[75%]  bg-slate-500 h-[2px] my-4"/>
          <p className="font-bold">How To Contact Us</p>
          <p className="my-4">Message Us</p>
          <p className="my-4">Free Beauty Consultations</p>
        </div>
      </div>

    </div>

    <hr className=" bg-slate-500 h-[2px] my-4"/>
      <div className="grid grid-cols-1 sm:grid-cols-2 w-[90%] mx-auto">
        <div className="my-4">
          <p className="text-4xl font-bold ">T H G</p>
          <p className="my-4">2024 © The Hut.com Ltd.</p>
        </div>
        <div>
          <p className="text-bold">Pay securely with</p>
          <div className="my-4">
            <RiVisaFill className="inline mx-4 text-2xl"/>
            <FaCcPaypal className="inline mx-4 text-2xl"/>
            <SiAmericanexpress className="inline mx-4 text-2xl"/>
            <FaCcMastercard className="inline mx-4 text-2xl"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer1;
