import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";

const Navbar = () => {
    return (
        <div className="z-[300] bg-light-purple text-white flex justify-around items-center fixed w-full h-full max-w-[1440px] lg:max-h-[130px]">
            <div className="flex gap-20">
                <div className="text-2xl cursor-pointer">Home</div>
                <div className="text-2xl cursor-pointer">Shop</div>
            </div>
            <div className="flex items-center">
                <div className="flex gap-10">
                    <div className="text-2xl cursor-pointer">Categories</div>
                    <div className="text-2xl cursor-pointer">About</div>
                </div>
                <div className="flex justify-center gap-5 lg:w-[150px]">
                    <div className="cursor-pointer">
                        <AiOutlineSearch size={20} />
                    </div>
                    <div className="cursor-pointer">
                        <BiShoppingBag size={20} />
                    </div>
                </div>
            </div>
            <div className="font-light absolute left-1/2 -translate-x-1/2 text-5xl cursor-pointer">ULTIMATE</div>
            <div className="border-b-[1px] w-full absolute bottom-0"></div>
        </div>
    );
};

export default Navbar;
