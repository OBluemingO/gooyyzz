import React, { useEffect, useState, useRef, useMemo } from "react";
import SectionOne from "./home_section/section_one";
import SectionSecond from "./home_section/section_second";
import SectionThrid from "./home_section/section_thrid";

const Home = () => {
    return (
        <div className="overflow-x-hidden w-full h-full">
            <SectionOne />
            <SectionSecond />
            <SectionThrid />
        </div>
    );
};

export default Home;
