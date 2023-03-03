import React, {useEffect, useRef} from "react";

const CircleText = ({ char, index, deg }) => {
    const charRef = useRef(null)

    return (
        <span
            className="absolute left-1/2 top-0 origin-[0_100px] text-white"
            ref={charRef}
            style={{transform: deg}}
        >
            {char}
        </span>
    );
};

export default CircleText;
