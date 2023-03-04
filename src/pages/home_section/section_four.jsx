import React, { useCallback, useEffect, useRef, useState } from "react";
import { motion, useDragControls } from "framer-motion";
import debounce from "lodash/debounce";

const SectionFour = () => {
    const controls = useDragControls();
    const elementSplitRef = useRef(null);
    const containerRef = useRef(null);
    const [size, setSize] = useState({ left: 50, right: 50 });

    const handleDrage = () => {
        const pos = elementSplitRef.current.getBoundingClientRect().x;
        const left = (pos / 1440) * 100;
        const right = 100 - (pos / 1440) * 100;
        setSize({ left: left - 0.8, right: right + 0.8 });
    };

    const delayedDrage = useCallback(
        debounce(() => handleDrage(), 750),
        []
    );
    console.log(size);
    return (
        <div
            className="flex h-screen w-full border-2 relative "
            ref={containerRef}
        >
            <motion.div
                layout
                className="basis-1/2 bg-amber-400"
            >
                <div className="w-[300px] h-[200px] bg-green-300"></div>
            </motion.div>
            <motion.div
                layout
                className="basis-1/2 bg-red-800"
            ></motion.div>
            {/* <motion.div
                className="basis-1/2 bg-red-800"
                initial={{ width: 50 }}
                style={{ width: `${size.right}%` }}
                layout
            ></motion.div> */}

            <motion.div
                className="border-2 border-white h-full w-[2px] absolute left-1/2 translate-x-1/2 grid place-items-center"
                drag="x"
                dragControls={controls}
                dragConstraints={{ left: -580, right: 580 }}
                dragMomentum={false}
                onDragEnd={delayedDrage}
            >
                <motion.div
                    initial={{ translateX: "-50%" }}
                    whileTap={{ scale: 0.9, translateX: "-50%" }}
                    ref={elementSplitRef}
                    className="rounded-full bg-white w-[50px] h-[50px] outline outline-[10px] outline-stone-600/50"
                ></motion.div>
            </motion.div>
        </div>
    );
};

export default SectionFour;
