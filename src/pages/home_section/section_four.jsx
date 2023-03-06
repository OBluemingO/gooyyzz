import React, {
    useContext,
    useCallback,
    useEffect,
    useRef,
    useState,
} from "react";
import { motion } from "framer-motion";
import { Context } from "../../store";
import { Canvas } from "@react-three/fiber";
import ProductShirt from "../../components/3D/canvas/productShirt";

const SectionFour = () => {
    const { handleCursorScaleDown } = useContext(Context);
    const [leftPaneWidth, setLeftPaneWidth] = useState("50%");
    const [drag, setDrag] = useState(false);
    const [widthContainer, setWidthContainer] = useState(false);
    const wrapRef = useRef(null);

    useEffect(() => {
        const { width: containerWidth, x } =
            wrapRef.current.getBoundingClientRect();
        setWidthContainer(containerWidth);
        if (drag) {
            const movePointer = (event) => {
                const mouseX = event.clientX - x;
                const newLeftPaneWidth = `${(mouseX / containerWidth) * 100}%`;
                setLeftPaneWidth(newLeftPaneWidth);
            };

            wrapRef.current.addEventListener("pointermove", movePointer);
            handleCursorScaleDown();
            return () =>
                wrapRef.current.removeEventListener("pointermove", movePointer);
        } else {
            handleCursorScaleDown();
        }
    }, [drag]);

    useEffect(() => {
        const handlePointerUp = () => {
            setDrag(false);
        };

        window.addEventListener("pointerup", handlePointerUp);
        window.addEventListener("dragend", handlePointerUp);
        return () => {
            window.removeEventListener("pointerup", handlePointerUp);
            window.removeEventListener("dragend", handlePointerUp);
        };
    });

    return (
        <div
            ref={wrapRef}
            className="w-full h-screen overflow-hidden flex relative"
        >
            <motion.div
                className="w-[50px] h-[50px] z-50 rounded-full bg-green-500 absolute -translate-x-1/2 top-1/2 -translate-y-1/2"
                style={{ left: leftPaneWidth }}
                onPointerDown={() => setDrag(true)}
                initial={{ translateX: "-50%" }}
                animate={{ scale: drag ? 2 : 1 }}
            ></motion.div>
            <div
                style={{
                    width: leftPaneWidth,
                }}
                className="border-r-2 overflow-hidden h-full relative"
            >
                <div
                    className="border-2 text-white text-5xl absolute left-0 z-10  h-full w-full"
                    style={{ width: widthContainer }}
                >
                    {/* 3d product */}
                    <ProductShirt />
                </div>
            </div>
            <div className="h-full overflow-hidden flex-1 ">
                <div
                    className="border-2 border-red-600 text-5xl absolute left-0 z-1 h-full"
                    style={{ width: widthContainer }}
                >
                    <div className=" w-full h-full">
                        {/* 3d product */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionFour;
