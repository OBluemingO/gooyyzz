import React from "react";
import { CiDeliveryTruck } from "react-icons/ci"; 
import { BsClockHistory } from "react-icons/bs"; 
import { RiRefund2Line } from "react-icons/ri"; 

const SectionFeature = () => {
    return (
      <div className="text-white w-full lg:h-[360px] lg:px-[145px] lg:py-[100px] grid grid-rows-1 grid-cols-3 lg:gap-[30px]">
        <div className="border-2 text-center rounded-3xl grid place-content-center place-items-center gap-[22px]">
          <div className="w-[50px] h-[50px]">
            <CiDeliveryTruck size={50} fill="white" />
          </div>
          Free Shipping
        </div>
        <div className="border-2 rounded-3xl text-center grid place-content-center place-items-center gap-[22px]">
          <div className="w-[50px] h-[50px]"><BsClockHistory size={45} fill='white' /></div>Fast Delivery
        </div>
        <div className="border-2 rounded-3xl text-center grid place-content-center place-items-center gap-[22px]">
          <div className="w-[50px] h-[50px]"><RiRefund2Line size={45} fill="white" /></div>7 Day Refund
        </div>
      </div>
    );
};

export default SectionFeature;
