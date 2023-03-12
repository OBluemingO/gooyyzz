import Navbar from "./components/bars/navbar";
import ContactUs from "./components/bars/contactUs";
import { useFollowPointer } from "./hooks/useFollowPointer";
import Home from "./pages/home";
import { useRef, useState, useContext, useEffect } from "react";
import { motion } from "framer-motion";
import { Context } from "./store";

function App() {
    const ref = useRef(null);
    useFollowPointer(ref);
    const {
        cursor,
        cursorDown,
        pointer: { x, y }
    } = useContext(Context);

    return (
        <div className="bg-light-purple max-w-[1440px] mx-auto">
            <Navbar />
            <motion.div
                className="w-[50px] h-[50px] rounded-full bg-[#fd7702] fixed z-[500] pointer-events-none"
                ref={ref}
                layout
                animate={{
                    x,
                    y,
                    height: cursor ? "100px" : cursorDown ? "15px" : "50px",
                    width: cursor ? "100px" : cursorDown ? "50px" : "50px",
                }}
                transition={{
                    type: "spring",
                    stiffness: 80,
                    damping: 15,
                }}
            ></motion.div>
            <Home />
            <ContactUs />
        </div>
    );
}

export default App;
