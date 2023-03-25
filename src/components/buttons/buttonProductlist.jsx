import React, {
    useState,
} from "react";
import clsx from "clsx";

const ButtonProductlist = ({ name, total, active, index, callBackButtonActive }, ref) => {
    const handleClick = () => {
      callBackButtonActive(index)
    }
    return (
        <div
            className={clsx(
                { "text-white": active, "text-black": !active },
                "lg:h-full lg:w-1/4 p-4 text-center bg-gray-400  rounded"
            )}
            onClick={handleClick}
        >
            {name} ({total})
        </div>
    );
};

export default ButtonProductlist;
