import React, {
    useContext,
    useEffect,
    useLayoutEffect,
    useRef,
    useState,
} from "react";
import { Context } from "../../store";
import { motion } from "framer-motion";
import TextHover from "../../components/TextHover";

const SectionThrid = () => {
    const contentRef = useRef(null);
    const textHeadRef = useRef(null);
    const init_mock = [
        {
            header: "Lorem ipsum",
            headerStroke: "dolor!",
            body: "Lorem ipsum",
            bodyStroke: "dolor!",
            url: 'mock mock'
        },
        {
            header: "Lorem ipsum",
            headerStroke: "dolor!",
            body: "Lorem ipsum",
            bodyStroke: "dolor!",
            url: 'mock mock'
        },{
            header: "Lorem ipsum",
            headerStroke: "dolor!",
            body: "Lorem ipsum",
            bodyStroke: "dolor!",
            url: 'mock mock'
        },{
            header: "Lorem ipsum",
            headerStroke: "dolor!",
            body: "Lorem ipsum",
            bodyStroke: "dolor!",
            url: 'mock mock'
        },
        
    ];
    const [data, setData] = useState(init_mock);

    const { cursor, handleCursorHit, handleCursorNotHit } = useContext(Context);

    return (
        <div className="pt-12 w-full lg:h-[1200px] " ref={contentRef}>
            {data.length != 0
                ? data.map((el, index) => (
                      <TextHover key={`text-hover-${index}`} {...el} right={(index + 1) % 2 == 0} />
                  ))
                : null}
            {/* <motion.h2
                className="relative group text-8xl lg:w-[80%] lg:mx-auto text-white tracking-[7.5px] border-y-2 py-10"
                id="text-topic"
                ref={textHeadRef}
                onPointerEnter={handleCursorHit}
                onPointerLeave={handleCursorNotHit}
            >
                <div className="bottom-0 h-0 w-full bg-black transition-all duration-500 absolute group-hover:h-full group-hover:top-0"></div>
                <span className="font-bold overflow-hidden">Lorem ipsum</span>{" "}
                dolor!
                <br />
                <span className="font-bold overflow-hidden"> ipsum </span>dolor!
            </motion.h2> */}
            {/* <motion.h2
                className="text-8xl lg:w-[80%] lg:mx-auto text-white tracking-[7.5px] text-right border-b-2 py-10"
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
            <motion.h2
                className="text-8xl lg:w-[80%] lg:mx-auto text-white tracking-[7.5px] border-b-2 py-10"
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
            <motion.h2
                className="text-right text-8xl lg:w-[80%] lg:mx-auto text-white tracking-[7.5px] border-b-2 py-10"
                id="text-topic"
                ref={textHeadRef}
                onPointerEnter={handleCursorHit}
                onPointerLeave={handleCursorNotHit}
            >
                <span className="font-bold overflow-hidden">Lorem ipsum</span>{" "}
                dolor!
                <br />
                <span className="font-bold overflow-hidden"> ipsum </span>dolor!
            </motion.h2> */}
        </div>
    );
};

export default SectionThrid;
