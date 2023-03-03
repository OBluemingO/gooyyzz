import React, { useCallback, useEffect, useRef, useState } from "react";
import { motion, useDragControls } from "framer-motion";

const SectionFour = () => {
    const controls = useDragControls();
    const elementSplitRef = useRef(null);
    const containerRef = useRef(null);

    

    return (
        <div
            className="flex h-screen w-full border-2 relative "
            ref={containerRef}
        >
            <div className="basis-1/2 ">
                <div className="w-[300px] h-[200px] bg-green-300"></div>
            </div>
            <div className="basis-1/2 "></div>

            <motion.div
                className="border-2 border-white h-full w-[2px] absolute left-1/2 translate-x-1/2 grid place-items-center"
                drag="x"
                dragControls={controls}
                dragConstraints={{ left: -580, right: 580 }}
                dragMomentum={false}
                // onDragTransitionEnd={handleDrag}
            >
                <motion.div
                    initial={{ translateX: "-50%" }}
                    whileTap={{ scale: 0.9, translateX: "-50%" }}
                    ref={elementSplitRef}
                    onMouseEnter={() => {
                        document.documentElement.style.cursor = "auto"
                    }}
                    className="rounded-full bg-white w-[50px] h-[50px] outline outline-[10px] outline-stone-600/50"
                ></motion.div>
            </motion.div>
        </div>
    );
};

export default SectionFour;
