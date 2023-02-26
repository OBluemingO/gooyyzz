import React, {useEffect, useRef} from "react";

const CircleText = ({ char, index, deg }) => {
    const charRef = useRef(null)

    useEffect(() => {
      charRef.current.style.transform = deg
    },[])

    return (
        <span
            className="absolute left-1/2 top-0 origin-[0_100px] text-white"
            ref={charRef}
        >
            {char}
        </span>
    );
};

export default CircleText;
