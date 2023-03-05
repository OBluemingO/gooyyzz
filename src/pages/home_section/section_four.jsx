import React, { useCallback, useEffect, useRef, useState } from "react";
import { motion, useDragControls } from "framer-motion";
import debounce from "lodash/debounce";

const SectionFour = () => {
    const [leftPaneWidth, setLeftPaneWidth] = useState("50%");
    const [drag, setDrag] = useState(false);
    const wrapRef = useRef(null);

    useEffect(() => {
        if (drag) {
            const movePointer = (event) => {
                // const containerWidth = event.;
                const containerWidth =
                    wrapRef.current.getBoundingClientRect().width;
                const mouseX = event.clientX
                const newLeftPaneWidth = `${((mouseX / containerWidth) * 100) - 16}%`;
                console.log(newLeftPaneWidth,'======== new left')
                
                setLeftPaneWidth(newLeftPaneWidth);
            };

            wrapRef.current.addEventListener("pointermove", movePointer);

            return () =>
                wrapRef.current.removeEventListener("pointermove", movePointer);
        }
    }, [drag]);

    return (
        <div
            ref={wrapRef}
            className="w-full h-screen overflow-hidden flex relative"
        >
            <div
                className="w-[50px] h-[50px] rounded bg-green-500 absolute -translate-x-1/2 top-1/2 -translate-y-1/2"
                style={{ left: leftPaneWidth }}
                onPointerDown={() => setDrag(true)}
                onPointerUp={() => setDrag(false)}
            ></div>
            <div
                style={{
                    width: leftPaneWidth,
                }}
                className="bg-black  border-r-2 overflow-hidden h-full"
            >
                {/* Content for left pane */}
            </div>
            <div className="bg-green-700 h-full overflow-hidden flex-1">
                {/* Content for right pane */}
            </div>
        </div>
    );
};

export default SectionFour;
