import React from "react";

const buttonAboutUs = ({ children }) => {
    return (
        <div
            className="lg:w-[190px] font-medium lg:h-[48px]
          text-white flex items-center justify-center bg-[#666666]"
        >
            {children}
        </div>
    );
};

export default buttonAboutUs;
