import React, {
    useContext,
    useEffect,
    useLayoutEffect,
    useRef,
    useState,
} from "react";
import { Context } from "../../store";
import { motion } from "framer-motion";

const SectionThrid = () => {
    const contentRef = useRef(null);
    const textHeadRef = useRef(null);

    const { cursor, handleCursorHit, handleCursorNotHit } = useContext(Context);
    // const [targetElement, setTargetElement] = useState({top:0, bottom: 0})

    // const { scrollY, scrollX } = useScroll();

    // useEffect(() => {
    //     window.addEventListener("pointerenter")
    // }, []);

    return (
        <div className="w-full lg:h-[1200px] " ref={contentRef}>
            <motion.h2
                className="text-8xl lg:w-[80%] lg:mx-auto text-white tracking-[7.5px]"
                id="text-topic"
                ref={textHeadRef}
                onPointerEnter={handleCursorHit}
                onPointerLeave={handleCursorNotHit}
            >
                <span className="font-bold overflow-hidden">Lorem ipsum</span>{" "}
                dolor!
                <br />
                <span className="font-bold overflow-hidden"> ipsum </span>dolor!
            </motion.h2>
            <div className=" lg:mt-[60px] lg:w-[80%] lg:mx-auto border-b-[1px] bg-white"></div>
            <div className="flex text-white lg:w-[80%] lg:mx-auto lg:pt-[50px]">
                <div className="basis-[40%]">
                    <p className="w-[80%] text-2xl">Lorem ipsum dolor</p>
                </div>
                <div className="flex-grow ">
                    <p className="w-[60%] text-2xl">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Doloremque iure expedita cum eveniet, aliquam
                        beatae tempore nisi, dolore incidunt similique, fugit
                        aut quae autem. Sunt debitis molestiae quisquam
                        similique eligendi.
                    </p>
                </div>
            </div>
            <div className="flex text-white lg:w-[80%] lg:mx-auto lg:pt-[50px]">
                <div className="basis-[40%]">
                    <p className="w-[80%] text-2xl">Lorem ipsum dolor</p>
                </div>
                <div className="flex-grow ">
                    <p className="w-[60%] text-2xl">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Doloremque iure expedita cum eveniet, aliquam
                        beatae tempore nisi, dolore incidunt similique, fugit
                        aut quae autem. Sunt debitis molestiae quisquam
                        similique eligendi.
                    </p>
                </div>
            </div>
            <div className="flex text-white lg:w-[80%] lg:mx-auto lg:pt-[50px]">
                <div className="basis-[40%]">
                    <p className="w-[80%] text-2xl">Lorem ipsum dolor</p>
                </div>
                <div className="flex-grow ">
                    <p className="w-[60%] text-2xl">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Doloremque iure expedita cum eveniet, aliquam
                        beatae tempore nisi, dolore incidunt similique, fugit
                        aut quae autem. Sunt debitis molestiae quisquam
                        similique eligendi.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SectionThrid;
