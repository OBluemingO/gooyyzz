import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const handleChangeRoute = (e) => {
        if (["home", "ultimate"].includes(e.target.textContent.toLowerCase()))
            navigate(`/`);
        else navigate(`${e.target.textContent.toLowerCase()}`);
    };

    return (
        <div className="z-[300] bg-light-purple text-white flex justify-between items-center fixed w-full h-full max-w-[1440px] max-h-[100px] lg:max-h-[130px]">
            <div className="flex gap-20 lg:ml-[30px]">
                <div
                    className="text-2xl cursor-pointer"
                    onClick={handleChangeRoute}
                >
                    Home
                </div>
                <div
                    className="text-2xl cursor-pointer"
                    onClick={handleChangeRoute}
                >
                    Shop
                </div>
            </div>
            <div className="flex items-center">
                <div className="flex gap-10">
                    <div className="text-2xl cursor-pointer">Categories</div>
                    <div
                        className="text-2xl cursor-pointer"
                        onClick={handleChangeRoute}
                    >
                        AboutUs
                    </div>
                </div>
                <div className="flex justify-center gap-5 lg:w-[150px]">
                    <div className="">
                        <AiOutlineSearch size={20} />
                    </div>
                    <div className="">
                        <BiShoppingBag size={20} />
                    </div>
                </div>
            </div>
            <div
                className="hidden md:block font-light absolute left-1/2 -translate-x-1/2 text-5xl"
                onClick={handleChangeRoute}
            >
                ULTIMATE
            </div>
            <div className="border-b-[1px] w-full absolute bottom-0"></div>
        </div>
    );
};

export default Navbar;
