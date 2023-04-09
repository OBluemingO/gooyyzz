import React, { useEffect, useState, useRef, useMemo } from "react";
import SectionFour from "./home_section/section_four";
import SectionOne from "./home_section/section_one";
import SectionSecond from "./home_section/section_second";
import SectionThrid from "./home_section/section_thrid";
import { useLayoutEffect } from "react";

const Home = () => {
    useLayoutEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);
    return (
        <div className="overflow-x-hidden w-full h-full">
            <SectionOne />
            {/* <SectionSecond />
            <SectionThrid />
            <SectionFour /> */}
        </div>
    );
};

export default Home;
