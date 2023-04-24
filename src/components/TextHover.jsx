import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

const TextHover = ({ header, headerStroke, body, bodyStroke, right }) => {
    const textHeadRef = useRef();

    function getDirectionEntry(event, referenceElement) {
        const position = {
            x: event.pageX,
            y: event.pageY,
        };

        const offset = {
            left: referenceElement.offsetLeft,
            top: referenceElement.offsetTop,
            width: referenceElement.clientWidth,
            height: referenceElement.clientHeight,
        };
        const posY = position.y - offset.top;
        if (posY < offset.height / 2) {
            return "top";
        } else {
            return "bottom";
        }

        // return {
        //     x: position.x - offset.left,
        //     y: position.y - offset.top,
        //     width: offset.width,
        //     height: offset.height,
        // };
    }

    return (
        <motion.h2
            className={clsx("relative group text-8xl lg:w-[80%] lg:mx-auto text-white tracking-[7.5px] border-y-2 py-10")}
            id="text-topic"
            ref={textHeadRef}
            style={{textAlign: right ? 'right' : 'left'}}
        >
            <div
                className={clsx(
                    " h-full bg-black transition-all duration-500 absolute w-0 group-hover:w-full top-0 right-0 group-hover:left-0"
                )}
            />
            <span className="font-bold overflow-hidden">{header}</span>{" "}
            {headerStroke}
            <br />
            <span className="font-bold overflow-hidden">{body}</span>{" "}
            {bodyStroke}
        </motion.h2>
    );
};

export default TextHover;
