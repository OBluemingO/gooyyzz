import React, { useEffect, useState, useRef, useMemo } from "react";
import { v4 as keysID } from "uuid";
import { motion } from "framer-motion";
import ButtonBasic from "../../components/buttons/buttonBasic";
import CircleText from "../../components/texts/circleText";
import Hero from "../../assests/images/hero.png";
import HeroSecond from "../../assests/images/hero-second.png";

const SectionOne = () => {
    const textMemo = useMemo(() => {
        return `Lorem ipsum dolor sit amet consetetur lo 
        `.split("");
    }, []);

    const heroRef = useRef(null);

    return (
        <>
            <div className="lg:pt-[10%] md:pt-60 flex flex-col md:justify-start md:items-end lg:items-center lg:justify-center h-screen lg:max-h-[1180px] overflow-hidden relative border-b-2">
                <motion.div
                    className="md:text-[130px] lg:text-[160px] md:pb-[5%] md:pr-[5%] lg:pr-0"
                    initial={{ scale: 0, y: 200, opacity: 1 }}
                    animate={{ scale: 1, y: 0, opacity: 1 }}
                    transition={{ type: "spring", duration: 1.5, delay: 1 }}
                >
                    <span className="text-white">GOOZ</span>
                    <span
                        className="text-light-purple"
                        style={{ "-webkit-text-stroke": `1px white` }}
                    >
                        YYZZ
                    </span>
                </motion.div>

                <div className="flex md:h-full w-full md:flex-col md:justify-end lg:items-end lg:pt-0 lg:flex-row lg:justify-around ">
                    <motion.div
                        className="md:ml-[50%] lg:ml-0 w-[530px] h-full"
                        initial={{ x: 300, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                            ease: "circOut",
                            duration: 0.9,
                            delay: 0.5,
                        }}
                    >
                        <p className="lg:mb-10 text-white w-[400px] text-2xl font-medium">
                            The fashion industry statistics show that the
                            apparel and textile sector is the 4th biggest in the
                            world.
                        </p>
                        <ButtonBasic />
                    </motion.div>
                    <div className="flex lg:hidden">
                        {Array(3)
                            .fill(null)
                            .map((el, index) => {
                                return (
                                    <div
                                        key={keysID()}
                                        className="w-[300px] h-[300px] flex justify-center items-center rounded-[50%]"
                                    >
                                        <motion.div
                                            className="hidden lg:block w-full h-full z-50 scale-150 translate-x-2/4 -translate-y-5"
                                            initial={{
                                                x: -300,
                                                y: -50,
                                                scale: 0.8,
                                                opacity: 0,
                                            }}
                                            animate={{
                                                x: 75,
                                                y: -50,
                                                scale: 1.5,
                                                opacity: 1,
                                            }}
                                            transition={{
                                                ease: "circOut",
                                                duration: 0.9,
                                                delay: 0.5,
                                            }}
                                        >
                                            <img
                                                src={HeroSecond}
                                                alt="hero_home_second"
                                            />
                                        </motion.div>
                                        <motion.div
                                            className="w-[200px] h-[200px]  animate-spin-slow relative"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{
                                                ease: "anticipate",
                                                duration: 2,
                                                delay: 0.5,
                                            }}
                                        >
                                            {textMemo.map((el, index) => {
                                                return (
                                                    <CircleText
                                                        char={el}
                                                        index={index}
                                                        key={keysID()}
                                                        deg={`rotate(${
                                                            index * 9
                                                        }deg)`}
                                                    />
                                                );
                                            })}
                                        </motion.div>
                                    </div>
                                );
                            })}
                    </div>

                    <div className="w-[300px] h-[300px] flex justify-center items-center rounded-[50%]">
                        <motion.div
                            className="hidden lg:block w-full h-full z-50 scale-150 translate-x-2/4 -translate-y-5"
                            initial={{
                                x: -300,
                                y: -50,
                                scale: 0.8,
                                opacity: 0,
                            }}
                            animate={{ x: 75, y: -50, scale: 1.5, opacity: 1 }}
                            transition={{
                                ease: "circOut",
                                duration: 0.9,
                                delay: 0.5,
                            }}
                        >
                            <img src={HeroSecond} alt="hero_home_second" />
                        </motion.div>
                        <motion.div
                            className="w-[200px] h-[200px]  animate-spin-slow relative"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                ease: "anticipate",
                                duration: 2,
                                delay: 0.5,
                            }}
                        >
                            {textMemo.map((el, index) => {
                                return (
                                    <CircleText
                                        char={el}
                                        index={index}
                                        key={keysID()}
                                        deg={`rotate(${index * 9}deg)`}
                                    />
                                );
                            })}
                        </motion.div>
                    </div>
                    <motion.div
                        className="absolute md:-bottom-[30%] lg:h-auto z-[100] md:flex md:items-end
                        lg:grid lg:place-items-center lg:top-0 left-0 overflow-hidden md:w-7/12
                        lg:w-full lg:max-h-[1080px]
                        "
                        ref={heroRef}
                        initial={{ y: 1000, scale: 0 }}
                        animate={{ y: 0, scale: 1 }}
                        transition={{ ease: "circOut", duration: 0.8 }}
                    >
                        <img
                            className="scale-75 "
                            src={Hero}
                            alt="hero_page_home"
                        />
                    </motion.div>
                </div>
            </div>
            {/* <div className="flex justify-evenly items-center lg:hidden w-full">
                <motion.div
                    className="w-[530px]"
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                        ease: "circOut",
                        duration: 0.9,
                        delay: 0.5,
                    }}
                >
                    <p className="lg:mb-10 text-white w-[400px] text-2xl font-medium">
                        The fashion industry statistics show that the apparel
                        and textile sector is the 4th biggest in the world.
                    </p>
                    <ButtonBasic />
                </motion.div>
                <div className="w-[300px] h-[300px] flex justify-center items-center rounded-[50%]">
                    <motion.div
                        className="w-full h-full z-50 scale-150 translate-x-2/4 -translate-y-5"
                        initial={{
                            x: -300,
                            y: 100,
                            scale: 0.8,
                            opacity: 0,
                        }}
                        animate={{ x: 75, y: 100, scale: 1.1, opacity: 1 }}
                        transition={{
                            ease: "circOut",
                            duration: 0.9,
                            delay: 0.5,
                        }}
                    >
                        <img src={HeroSecond} alt="hero_home_second" />
                    </motion.div>
                    <motion.div
                        className="w-[200px] h-[200px] animate-spin-slow relative"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            ease: "anticipate",
                            duration: 2,
                            delay: 0.5,
                        }}
                    >
                        {textMemo.map((el, index) => {
                            return (
                                <CircleText
                                    char={el}
                                    index={index}
                                    key={keysID()}
                                    deg={`rotate(${index * 9}deg)`}
                                />
                            );
                        })}
                    </motion.div>
                </div>
            </div> */}
            <div className="w-[90%] mx-auto border-b-2 mt-5"></div>
            <div className="w-[80%] mx-auto border-b-2 mt-5"></div>
            <div className="w-[70%] mx-auto border-b-2 mt-5"></div>
        </>
    );
};

export default SectionOne;
